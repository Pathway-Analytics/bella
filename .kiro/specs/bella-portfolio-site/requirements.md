# Requirements Document

## Introduction

A static portfolio website for Bella Grant / Pathway Analytics, built with Astro and deployed via SST v4 on AWS. The site must be an exact visual and content match of the provided reference HTML (`context/index.html`), served over HTTPS with staging and production domain support.

## Glossary

- **Site**: The Astro-based static portfolio website for Bella Grant / Pathway Analytics
- **Build_System**: The Astro static site generator (v5.9.4+) responsible for compiling source components into static HTML/CSS/JS output
- **Deployment_Stack**: The SST v4.17 infrastructure-as-code configuration that provisions AWS resources (CloudFront, S3, Route 53, ACM) for hosting
- **Reference_HTML**: The provided `context/index.html` file that defines the exact visual design, content, and behaviour the Site must reproduce
- **Timeline_Animation**: The SVG line-draw animation in the "The Route" section, triggered by IntersectionObserver on scroll
- **Content_Author**: A non-technical person who may need to update site text or project entries in future

## Requirements

### Requirement 1: Astro Project Structure

**User Story:** As a developer, I want the project structured as a clean Astro application with pnpm, so that it follows modern conventions and is easy to maintain.

#### Acceptance Criteria

1. THE Build_System SHALL use Astro as the static site framework with pnpm as the package manager
2. THE Site SHALL compile from Astro source files into a `dist/` output directory suitable for static hosting
3. THE Build_System SHALL produce zero build errors and zero build warnings when running `pnpm build`

### Requirement 2: Visual Fidelity

**User Story:** As a stakeholder, I want the deployed site to be visually identical to the Reference_HTML, so that the design intent is preserved without modification.

#### Acceptance Criteria

1. THE Site SHALL reproduce the exact CSS custom properties, colours, typography, spacing, and layout defined in the Reference_HTML
2. THE Site SHALL load Google Fonts (Fraunces, Public Sans, IBM Plex Mono) with the same weights and styles as the Reference_HTML
3. THE Site SHALL render all sections (Navigation, Hero, The Route, What I do, How I work, Proof stats, Selected work, About Bella, Selected publications, Contact, Footer) in the same order and visual appearance as the Reference_HTML
4. THE Site SHALL include the portrait image (extracted from the base64-encoded source or served as `public/portrait.jpg`) displayed identically to the Reference_HTML

### Requirement 3: Content Sections

**User Story:** As a site visitor, I want to see all of Bella Grant's professional information clearly presented, so that I can understand her expertise and experience.

#### Acceptance Criteria

1. THE Site SHALL display a navigation bar with the brand text "PATHWAY ANALYTICS / BELLA GRANT" and anchor links to route, offer, methods, work, and contact sections
2. THE Site SHALL display a hero section with eyebrow text, headline, two paragraphs of copy, a CTA button linking to selected work, an email link, and a founder note
3. THE Site SHALL display "The Route" section with 6 career timeline stations containing year ranges, role titles, and organisation descriptions
4. THE Site SHALL display "What I do" section with 3 numbered offer cards each containing a title and description
5. THE Site SHALL display "How I work" section with 4 numbered method cards each containing a title and description
6. THE Site SHALL display a proof statistics section with 4 figures and their corresponding labels
7. THE Site SHALL display "Selected work" section with 8 project cards (including 1 marked as "current") each containing a tag, title, description paragraphs, and an outcome line
8. THE Site SHALL display "About Bella" section with biographical paragraphs and educational credentials
9. THE Site SHALL display "Selected publications" section with a list of 4 publications and an aside note about professional name
10. THE Site SHALL display a contact section with headline, description, email CTA button, and contact details
11. THE Site SHALL display a footer with the company description and a dynamic copyright year generated via JavaScript

### Requirement 4: Responsive Layout

**User Story:** As a site visitor on any device, I want the layout to adapt gracefully to my screen size, so that content remains readable and usable.

#### Acceptance Criteria

1. WHILE the viewport width is above 960px, THE Site SHALL display the full desktop layout with multi-column grids as defined in the Reference_HTML
2. WHILE the viewport width is at or below 960px, THE Site SHALL collapse the timeline stations to a 3-column grid, hide the SVG line track, switch stations to a left-border style, and display the method grid as 2 columns
3. WHILE the viewport width is at or below 790px, THE Site SHALL hide nav links, display the hero as a single column, collapse all two-column section heads to single column, and display offer/proof/project grids as 2 columns
4. WHILE the viewport width is at or below 560px, THE Site SHALL reduce wrap padding, display all grids as single columns, and reduce section padding

### Requirement 5: Micro-interactions and Accessibility

**User Story:** As a site visitor, I want subtle animations and full keyboard/screen-reader accessibility, so that the site feels polished and is usable by everyone.

#### Acceptance Criteria

1. WHEN the "The Route" SVG line track scrolls into view (at 35% threshold), THE Site SHALL trigger the line-draw CSS animation
2. WHILE the user has `prefers-reduced-motion: reduce` enabled, THE Site SHALL disable smooth scrolling and display the timeline line in its final drawn state without animation
3. THE Site SHALL provide visible focus styles (`outline: 2px solid var(--teal); outline-offset: 3px`) on all interactive elements when focused via keyboard
4. THE Site SHALL include appropriate `aria-label` attributes on the navigation landmark and proof statistics section
5. THE Site SHALL use semantic HTML elements (nav, header, section, article, figure, figcaption, footer, aside) consistent with the Reference_HTML

### Requirement 6: SEO and Metadata

**User Story:** As a stakeholder, I want the site to be discoverable by search engines, so that potential clients can find Bella Grant online.

#### Acceptance Criteria

1. THE Site SHALL include a `<title>` tag with "Bella Grant · Pathway Analytics"
2. THE Site SHALL include meta description, Open Graph title, description, and type tags matching the Reference_HTML values
3. THE Site SHALL serve a valid `robots.txt` file that permits all crawlers
4. THE Site SHALL serve a valid XML sitemap listing the site URL

### Requirement 7: SST v4 Deployment Infrastructure

**User Story:** As a developer, I want the site deployed via SST v4 on AWS, so that infrastructure is defined as code and environments are reproducible.

#### Acceptance Criteria

1. THE Deployment_Stack SHALL define an SST configuration using `sst.aws.StaticSite` or the Astro construct to deploy the built site to AWS
2. THE Deployment_Stack SHALL deploy resources to the `eu-west-2` AWS region using the default AWS profile
3. WHEN deployed to the production stage, THE Deployment_Stack SHALL serve the site at `https://bella.pathwayanalytics.com`
4. WHEN deployed to a non-production stage, THE Deployment_Stack SHALL serve the site at `https://bella-{stage}.pathwayanalytics.com`
5. THE Deployment_Stack SHALL provision HTTPS via AWS Certificate Manager
6. THE Deployment_Stack SHALL configure CloudFront distribution for content delivery
7. THE Deployment_Stack SHALL configure DNS records via Route 53 (or provide instructions for manual DNS record creation if the hosted zone is managed externally)

### Requirement 8: Content Maintainability

**User Story:** As a Content_Author, I want to be able to update site text and project entries without deep technical knowledge, so that the site stays current.

#### Acceptance Criteria

1. THE Site SHALL organise content into clearly named Astro components representing each major section (e.g., `Hero.astro`, `Route.astro`, `Offer.astro`, `Projects.astro`)
2. THE Site SHALL store project card data in a structured format (e.g., a TypeScript array or JSON file) that a Content_Author can edit without modifying layout code
3. THE Site SHALL include code comments or a brief README section explaining how to add, edit, or remove project entries
4. WHILE the first version remains close to the Reference_HTML structure, THE Site SHALL avoid introducing complex abstractions that obscure the relationship between source and output

### Requirement 9: Build and Development Workflow

**User Story:** As a developer, I want standard dev/build/preview scripts and a clean project structure, so that onboarding and iteration are straightforward.

#### Acceptance Criteria

1. THE Build_System SHALL support `pnpm dev` for local development with hot reload
2. THE Build_System SHALL support `pnpm build` for production static output
3. THE Build_System SHALL support `pnpm preview` for previewing the production build locally
4. THE Site SHALL include a comprehensive README.md documenting the tech stack, project structure, local development setup, deployment commands, and content editing guidance

### Requirement 10: Visual Polish and Aesthetic Quality

**User Story:** As a site visitor, I want the site to feel premium and visually refined, so that Bella Grant's professional brand communicates quality and credibility at first glance.

#### Acceptance Criteria

1. THE Site SHALL use a harmonious colour palette derived from the CSS custom properties (deep navy, warm cream, teal accent, soft neutrals) with consistent application across all sections
2. THE Site SHALL apply refined typography with appropriate font size scales, line heights (1.55–1.7 for body, tighter for headings), and letter-spacing that ensure comfortable readability
3. THE Site SHALL provide generous whitespace through section padding (minimum 5rem vertical), element spacing, and content margins that give content room to breathe
4. THE Site SHALL render smooth, subtle transitions on interactive elements (links, buttons, cards) with a consistent duration (0.25s–0.35s ease) that feel responsive without being distracting
5. THE Site SHALL apply a cohesive visual rhythm through consistent use of grid gaps, card padding, and typographic spacing across all repeating content patterns
6. THE Site SHALL present the proof statistics, offer cards, and method cards with clear visual hierarchy using font weight, size contrast, and colour differentiation to guide the viewer's eye
7. WHILE the site loads, THE Site SHALL render above-the-fold content without visible layout shifts or flash of unstyled text by preloading critical fonts and inlining essential CSS
8. THE Site SHALL maintain visual consistency in decorative details such as section numbering style, card borders, accent colour usage, and hover state treatments across all sections
