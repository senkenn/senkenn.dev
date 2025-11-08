# Guidelines for AI Coding Agents

This document provides instructions for AI coding agents (like Claude Code, GitHub Copilot, Cursor, etc.) working on this project.

## Code Quality Standards

### Always Run Check Command

**IMPORTANT**: Whenever you modify code files (`.ts`, `.tsx`, `.js`, `.jsx`, `.json`, `.html`, `.css`, etc.), you **MUST** run the check command before completing your task:

```bash
pnpm check
```

This command performs the following operations in sequence:

1. **Format** - Auto-formats code using Biome
2. **Lint** - Checks code quality with Biome
3. **Type Check** - Validates TypeScript types
4. **Build** - Compiles the project with Vite
5. **Dry Run Deploy** - Validates deployment configuration

### Why This Matters

- Ensures consistent code formatting across the project
- Catches potential bugs and type errors early
- Validates that the code builds successfully
- Confirms deployment configuration is correct
- Maintains code quality standards

### Individual Commands

If you only need specific checks, you can run commands individually:

```bash
pnpm format  # Format code with Biome
pnpm lint    # Check code with Biome
pnpm build   # Build the project
```

## Project Structure

```
senkenn.dev/
├── src/
│   └── react-app/       # React application code
├── public/              # Static assets (icons, images)
└── index.html           # HTML entry file
```

## Technology Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Hono** for server-side routing
- **Tailwind CSS v4** for styling
- **Biome** for formatting and linting
- **Cloudflare Workers** for deployment

## Best Practices

1. **Type Safety**: Always use TypeScript types, avoid `any`
2. **Code Style**: Follow the Biome configuration
3. **Component Structure**: Keep components small and focused
4. **Performance**: Optimize for edge deployment on Cloudflare Workers
5. **Testing**: Run `pnpm check` before committing changes

## Deployment

The project is deployed to Cloudflare Workers. Always ensure that:

- Code passes all checks before deployment
- Environment variables are properly configured
- Build output is optimized for edge runtime

---

**Remember**: Always run `pnpm check` after making code changes!
