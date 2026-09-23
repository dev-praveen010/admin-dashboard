# Admin Dashboard

A modern admin dashboard built with React 19, Vite, shadcn/ui, Ant Design, Tailwind CSS and TypeScript. All data is mocked in the browser with MSW, so no backend is required.

**Live demo:** https://dev-praveen010.github.io/admin-dashboard/

## Getting started

Requires Node.js 20+ and pnpm (via `corepack enable`).

```bash
pnpm install
pnpm dev        # http://localhost:3001
pnpm build      # production build to dist/
pnpm preview    # preview the production build
```

## Deployment

Pushing to `main` builds the site and publishes `dist/` to the `gh-pages` branch via GitHub Actions (`.github/workflows/deploy.yml`).
The GitHub Pages base path is set in `.env.production` (`VITE_APP_PUBLIC_PATH`).

## License

MIT — see [LICENSE](./LICENSE). Based on the open-source [slash-admin](https://github.com/d3george/slash-admin) template.
