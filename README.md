This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Docker Setup

This project includes Docker configurations for both development and production environments.

### Development (with hot reloading)
Run the development server in a Docker container with live code syncing:

```bash
npm run docker:dev
```

This uses `docker-compose.dev.yaml` and `Dockerfile.dev` for a development-optimized setup with volume mounting for hot reloading.

### Production
Build and run the production-optimized container:

```bash
npm run docker:prod
```

This uses `docker-compose.yaml` and `Dockerfile` for a multi-stage production build.

Both commands will build the image if needed and start the container on `http://localhost:3000`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Resources

- Rehype Pretty Code

## Misc

elements can be placed directly in the markdown like so:

```
<Callout type='warning'>Hello I am a callout</Callout>
# Hello World
Welcome to my blog
```
