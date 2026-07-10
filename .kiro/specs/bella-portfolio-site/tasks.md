# Implementation Plan: Bella Portfolio Site

## Overview

Build a static portfolio website for Bella Grant / Pathway Analytics using Astro v5.9.4, deployed to AWS via SST v4.17. The implementation extracts content from the reference HTML into structured Astro components and TypeScript data files, reproducing the exact visual design with responsive breakpoints and micro-interactions.

## Tasks

- [x] 1. Project setup and configuration
  - [x] 1.1 Initialise Astro project structure and update dependencies
    - Run `pnpm create astro@latest` or manually create `astro.config.mjs` with `output: 'static'`
    - Update `package.json`: change `sst` to `^4.17.0`, remove `aws-cdk-lib` and `constructs` (not needed for SST Ion)
    - Add `@astrojs/sitemap` integration
    - Create directory structure: `src/pages/`, `src/layouts/`, `src/components/`, `src/data/`, `src/styles/`, `public/`
    - Run `pnpm install`
    - _Requirements: 1.1, 1.2, 9.1, 9.2, 9.3_

  - [x] 1.2 Create SST v4.17 configuration
    - Create `sst.config.ts` with `$config()` pattern using `sst.aws.Astro` component
    - Configure `eu-west-2` region, app name `bella-pathwayanalytics`
    - Set production domain to `bella.pathwayanalytics.com`, staging to `bella-{stage}.pathwayanalytics.com`
    - Set `removal: "retain"` for production, `"remove"` for other stages
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7_

  - [x] 1.3 Extract portrait image and create static assets
    - Extract the base64-encoded JPEG from `context/index.html` and save as `public/portrait.jpg`
    - Create `public/robots.txt` permitting all crawlers (`User-agent: * Allow: /`)
    - _Requirements: 2.4, 6.3_

- [x] 2. Global styles and base layout
  - [x] 2.1 Create global CSS stylesheet
    - Create `src/styles/global.css` with all CSS custom properties (design tokens), base resets, typography rules, and component styles extracted from the Reference_HTML `<style>` block
    - Include all responsive media queries (960px, 790px, 560px breakpoints)
    - Include `prefers-reduced-motion` media query
    - Include animation keyframes for the line-draw effect
    - _Requirements: 2.1, 2.2, 4.1, 4.2, 4.3, 4.4, 5.2, 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8_

  - [x] 2.2 Create BaseLayout component
    - Create `src/layouts/BaseLayout.astro` with `<html lang="en">`, `<head>` containing meta tags, Open Graph tags, Google Fonts preconnect/link tags, and global CSS import
    - Include `<title>Bella Grant · Pathway Analytics</title>`
    - Include meta description and OG tags matching Reference_HTML
    - Add slot for page content in `<body>`
    - _Requirements: 2.2, 5.5, 6.1, 6.2, 10.7_

- [x] 3. TypeScript data files
  - [x] 3.1 Create project cards data file
    - Create `src/data/projects.ts` with `ProjectCard` interface and array of 8 project entries matching Reference_HTML content
    - Include fields: `tag`, `title`, `paragraphs`, `outcomeLabel`, `outcomeText`, `isCurrent`
    - Add code comments explaining how to add/edit/remove entries
    - _Requirements: 3.7, 8.2, 8.3_

  - [x] 3.2 Create timeline stations data file
    - Create `src/data/timeline.ts` with `TimelineStation` interface and array of 6 timeline entries matching Reference_HTML content
    - Include fields: `yearRange`, `role`, `organisation`, `isNow`
    - _Requirements: 3.3, 8.2_

- [x] 4. Section components (Navigation, Hero, Route)
  - [x] 4.1 Create Nav component
    - Create `src/components/Nav.astro` with brand text "PATHWAY ANALYTICS / BELLA GRANT" and anchor links
    - Include `aria-label="Main navigation"` on `<nav>` element
    - Apply `.wrap` class, `.brand`, `.nav-links` styles
    - _Requirements: 3.1, 5.4, 5.5_

  - [x] 4.2 Create Hero component
    - Create `src/components/Hero.astro` with eyebrow, headline (`Clarity for difficult public decisions.`), two paragraphs, CTA button, email link, founder note, and portrait frame with `public/portrait.jpg`
    - Use semantic `<header>` and `<figure>` elements
    - _Requirements: 2.4, 3.2, 5.5, 10.6_

  - [x] 4.3 Create Route (Timeline) component
    - Create `src/components/Route.astro` importing from `src/data/timeline.ts`
    - Render SVG line-track with `.draw` path and 6 station entries
    - Apply `.now` class to current station
    - _Requirements: 3.3, 5.1_

- [x] 5. Section components (Offer, Methods, Proof)
  - [x] 5.1 Create Offer component
    - Create `src/components/Offer.astro` with section header and 3 numbered offer cards
    - Use semantic `<section id="offer">` element
    - _Requirements: 3.4, 5.5, 10.6, 10.8_

  - [x] 5.2 Create Methods component
    - Create `src/components/Methods.astro` with section header and 4 numbered method cards
    - Use dark teal background section styling
    - _Requirements: 3.5, 5.5, 10.6, 10.8_

  - [x] 5.3 Create Proof component
    - Create `src/components/Proof.astro` with 4 statistics figures and labels
    - Include `aria-label` on the proof section for accessibility
    - _Requirements: 3.6, 5.4, 10.6_

- [x] 6. Section components (Projects, About, Publications, Contact, Footer)
  - [x] 6.1 Create Projects component
    - Create `src/components/Projects.astro` importing from `src/data/projects.ts`
    - Render 8 project cards in a 2-column grid with `.current` class applied to the current project
    - _Requirements: 3.7, 8.2, 10.5, 10.8_

  - [x] 6.2 Create About component
    - Create `src/components/About.astro` with biographical paragraphs and credentials
    - Use teal background section styling
    - _Requirements: 3.8, 5.5_

  - [x] 6.3 Create Publications component
    - Create `src/components/Publications.astro` with 4 publications list and aside note
    - Use semantic `<aside>` for the professional name note
    - _Requirements: 3.9, 5.5_

  - [x] 6.4 Create Contact component
    - Create `src/components/Contact.astro` with headline, CTA button, and contact details
    - Use dark background section styling
    - _Requirements: 3.10, 5.3_

  - [x] 6.5 Create Footer component
    - Create `src/components/Footer.astro` with company description and dynamic copyright year via inline `<script>`
    - _Requirements: 3.11, 5.5_

- [x] 7. Page assembly and interactivity
  - [x] 7.1 Create index page and wire all components
    - Create `src/pages/index.astro` that imports BaseLayout and all section components
    - Compose components in correct order: Nav, Hero, Route, Offer, Methods, Proof, Projects, About, Publications, Contact, Footer
    - _Requirements: 2.3, 3.1–3.11_

  - [x] 7.2 Add IntersectionObserver script for timeline animation
    - Add inline `<script>` in BaseLayout or Route component that observes `.line-track` at 35% threshold and adds `.in-view` class
    - Include fallback: if IntersectionObserver is not supported, add `.in-view` immediately
    - _Requirements: 5.1, 5.2_

  - [x] 7.3 Create sitemap integration
    - Configure `@astrojs/sitemap` in `astro.config.mjs` with the site URL
    - Verify sitemap XML is generated in build output
    - _Requirements: 6.4_

- [x] 8. Checkpoint - Build verification
  - Ensure `pnpm build` completes with zero errors and zero warnings. Verify `dist/index.html`, `dist/robots.txt`, and `dist/sitemap-index.xml` exist. Ask the user if questions arise.

- [x] 9. Documentation and GitHub setup
  - [x] 9.1 Create README.md
    - Document tech stack (Astro, SST, pnpm), project structure, local dev setup (`pnpm install`, `pnpm dev`), deployment commands (`npx sst deploy --stage production`), and content editing guidance for project cards and timeline data
    - _Requirements: 8.3, 8.4, 9.4_

  - [x] 9.2 Initialise Git repository and push to GitHub
    - Create `.gitignore` with `node_modules/`, `dist/`, `.sst/`, `.astro/`
    - Initialise git repo, commit all files
    - Create remote repository at `github.com/pathway-analytics/bella` and push
    - _Requirements: 9.4_

- [x] 10. Final checkpoint - Full verification
  - Ensure all tests pass, `pnpm build` succeeds cleanly, and all content sections match the Reference_HTML. Ask the user if questions arise.

## Notes

- No property-based tests are included as the design document confirms PBT is not applicable for this static site project
- The reference HTML (`context/index.html`) is the source of truth for all content, colours, spacing, and responsive behaviour
- SST v4.17 (Ion) uses `$config()` pattern and `sst.aws.Astro` — this replaces the older CDK-based SST v2/v3 approach
- The portrait image must be extracted from the base64 data URI in the reference HTML and saved as a static file
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3", "2.1"] },
    { "id": 2, "tasks": ["2.2", "3.1", "3.2"] },
    { "id": 3, "tasks": ["4.1", "4.2", "4.3", "5.1", "5.2", "5.3"] },
    { "id": 4, "tasks": ["6.1", "6.2", "6.3", "6.4", "6.5"] },
    { "id": 5, "tasks": ["7.1", "7.2", "7.3"] },
    { "id": 6, "tasks": ["9.1", "9.2"] }
  ]
}
```
