# senkenn.dev

SENKEN's personal website

## Tech Stack

- [**React**](https://react.dev/) - A modern UI library for building interactive interfaces
- [**Vite**](https://vite.dev/) - Lightning-fast build tooling and development server
- [**Hono**](https://hono.dev/) - Ultralight, modern backend framework
- [**Cloudflare Workers**](https://developers.cloudflare.com/workers/) - Edge computing platform for global deployment
- [**Tailwind CSS v4**](https://tailwindcss.com/) - Utility-first CSS framework

## Features

- Hot Module Replacement (HMR) for rapid development
- TypeScript support out of the box
- ESLint configuration included
- OGP (Open Graph Protocol) support for social media sharing
- Optimized icons (circular favicon, square OGP image)

## Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Your application will be available at [http://localhost:5173](http://localhost:5173).

## Production

Build your project for production:

```bash
pnpm build
```

Type check and build:

```bash
pnpm check
```

Preview your build locally:

```bash
pnpm preview
```

Deploy your project to Cloudflare Workers:

```bash
pnpm deploy
```

## Project Structure

```text
senkenn.dev/
├── src/
│   └── react-app/       # React application
│       ├── main.tsx     # Entry point
│       └── App.tsx      # Main component
├── public/              # Static assets
│   ├── senkenn-icon.png       # OGP image (square)
│   └── senkenn-icon-round.png # Favicon (circular)
└── index.html           # HTML entry file with OGP tags
```

## Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/)
- [Hono Documentation](https://hono.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
