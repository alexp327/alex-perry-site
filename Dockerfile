# Build stage
FROM node:20.12-alpine3.18 AS builder

WORKDIR /src

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for building)
RUN npm ci --include=optional

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20.12-alpine3.18 AS runner

WORKDIR /src

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production --include=optional && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /src/.next ./.next
COPY --from=builder /src/public ./public
COPY --from=builder /src/next.config.mjs ./
COPY --from=builder /src/package.json ./

# Expose the port the app runs on
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]