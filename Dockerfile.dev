FROM node:20.12-alpine3.18

WORKDIR /src

COPY package*.json ./

RUN npm ci --include=optional

COPY . .

CMD ["npm", "run", "dev"]