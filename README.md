# Anushka Sahani Portfolio

A single-page Next.js portfolio created from the provided resume details. The project combines shadcn/ui-style primitives with adapted React Bits motion components for the hero typography, stat counters, spotlight cards, magnetic CTA buttons, and tilt interaction.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui component structure
- Motion for animation

## Project structure

- `app/` contains the App Router entrypoints and global styling.
- `components/ui/` contains shadcn-style reusable primitives.
- `components/animations/` contains adapted React Bits-inspired UI motion components.
- `components/portfolio/portfolio-page.tsx` assembles the full page.
- `lib/portfolio.ts` stores the resume-derived content model.

## Run locally

1. Install Node.js and npm.
2. Run `npm install`.
3. Run `npm run dev`.
4. Run `npm run lint` before shipping changes.

## Notes

- Resume content was mapped into structured data rather than hard-coded inline.
- The React Bits-based files are adapted from the MIT-licensed `DavidHDev/react-bits` repository.
- `node` and `npm` were not available in this environment, so install, lint, and build verification could not be executed here.
