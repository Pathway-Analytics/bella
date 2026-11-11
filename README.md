# Bella Grant · Pathway Analytics

Static portfolio site for Bella Grant / Pathway Analytics, built with Astro and deployed to AWS via SST.

**Production:** https://bella.pathwayanalytics.com

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v5.x (static output)
- **Deployment:** [SST](https://sst.dev/) v4.17 (Ion) — CloudFront + S3 + ACM + Route 53
- **Package manager:** pnpm
- **Language:** TypeScript
- **Hosting:** AWS (eu-west-2)

## Project Structure

```
bella/
├── public/
│   ├── portrait.jpg          # Portrait image
│   └── robots.txt            # Search engine crawl rules
├── src/
│   ├── components/           # Astro section components
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Route.astro       # Career timeline with SVG animation
│   │   ├── Offer.astro       # "What I do" cards
│   │   ├── Methods.astro     # "How I work" cards
│   │   ├── Proof.astro       # Statistics section
│   │   ├── Projects.astro    # Selected work grid
│   │   ├── About.astro
│   │   ├── Publications.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/
│   │   ├── projects.ts       # Project card entries (editable)
│   │   └── timeline.ts       # Career timeline entries (editable)
│   ├── layouts/
│   │   └── BaseLayout.astro  # HTML shell, meta tags, fonts, scripts
│   ├── pages/
│   │   └── index.astro       # Main page composing all components
│   └── styles/
│       └── global.css        # All CSS: tokens, resets, components, responsive
├── astro.config.mjs          # Astro configuration
├── sst.config.ts             # SST deployment configuration
├── package.json
└── tsconfig.json
```

## Local Development

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Setup

```bash
pnpm install
```

### Development server

```bash
pnpm dev
```

Starts the Astro dev server with hot reload at `http://localhost:4321`.

### Production build

```bash
pnpm build
```

Outputs static files to `dist/`.

### Preview production build

```bash
pnpm preview
```

Serves the built `dist/` directory locally for final checks before deployment.

## Deployment

The site is deployed to AWS using SST v4.17. SST provisions CloudFront, S3, ACM (HTTPS), and Route 53 DNS automatically.

### Automatic deployment (GitHub Actions)

Every push to `main` deploys to production through `.github/workflows/deploy.yml`. It can also be run by hand from the repo's **Actions** tab ("Deploy site" → "Run workflow"). The workflow is skipped until the one-off AWS setup below is done.

One-off setup, by someone with admin access to the Pathway Analytics AWS account (the account that holds the `pathwayanalytics.com` Route 53 zone):

1. **Add GitHub as an identity provider.** IAM → Identity providers → Add provider → OpenID Connect.
   - Provider URL: `https://token.actions.githubusercontent.com`
   - Audience: `sts.amazonaws.com`
   - Skip if it already exists.
2. **Create the deploy role.** IAM → Roles → Create role → Web identity → choose the provider above, audience `sts.amazonaws.com`. Name it `github-deploy-bella`. Then replace its trust policy with the one below (put in the account ID), so only the `main` branch of this repo can use it:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Principal": { "Federated": "arn:aws:iam::<ACCOUNT_ID>:oidc-provider/token.actions.githubusercontent.com" },
         "Action": "sts:AssumeRoleWithWebIdentity",
         "Condition": {
           "StringEquals": { "token.actions.githubusercontent.com:aud": "sts.amazonaws.com" },
           "StringLike": { "token.actions.githubusercontent.com:sub": "repo:Pathway-Analytics/bella:ref:refs/heads/main" }
         }
       }
     ]
   }
   ```

3. **Give the role permissions.** SST manages CloudFront, S3, ACM, Route 53, Lambda, IAM and SSM, so the simplest working option is the `AdministratorAccess` managed policy. The trust policy above limits who can use it. Narrow it later if wanted.
4. **Tell GitHub the role.** In this repo: Settings → Secrets and variables → Actions → **Variables** tab → New repository variable.
   - Name: `AWS_DEPLOY_ROLE_ARN`
   - Value: the role ARN, e.g. `arn:aws:iam::<ACCOUNT_ID>:role/github-deploy-bella`
5. **Test it.** Actions tab → "Deploy site" → Run workflow. A green tick means the site is live with the latest `main`.

SST keeps its deployment state in the AWS account, so deploys from GitHub pick up the existing production stage. Deploys done by hand still work as before.

### Manual deployment

#### Staging

```bash
npx sst deploy --stage staging
```

Deploys to `https://bella-staging.pathwayanalytics.com`.

#### Production

```bash
npx sst deploy --stage production
```

Deploys to `https://bella.pathwayanalytics.com`.

#### Tear down a stage

```bash
npx sst remove --stage staging
```

Production uses `removal: "retain"` so resources are preserved even if removed from the config.

## Content Editing

### Project cards

Edit `src/data/projects.ts` to add, update, or remove entries in the "Selected work" section.

Each project has this shape:

```typescript
{
  tag: "Category label",
  title: "Project title",
  paragraphs: ["First paragraph.", "Optional second paragraph."],
  outcomeLabel: "Outcome",       // or "Decision", "Value"
  outcomeText: "Description of the outcome.",
  isCurrent: false,              // set true to highlight with teal border
}
```

**To add a project:** Append a new object to the `projects` array.

**To mark a project as current:** Set `isCurrent: true` on the new entry and remove it from the previous current project.

### Timeline

Edit `src/data/timeline.ts` to update the career timeline in "The Route" section.

Each station has this shape:

```typescript
{
  yearRange: "2024–present",
  role: "Role title",
  organisation: "Description of the role or organisation.",
  isNow: true,                   // highlights the station as current
}
```

### Other sections

All other content lives directly in the `.astro` component files under `src/components/`. Open the relevant file and edit the HTML content directly:

| Section | File |
|---------|------|
| Navigation | `src/components/Nav.astro` |
| Hero | `src/components/Hero.astro` |
| What I do | `src/components/Offer.astro` |
| How I work | `src/components/Methods.astro` |
| Statistics | `src/components/Proof.astro` |
| About Bella | `src/components/About.astro` |
| Publications | `src/components/Publications.astro` |
| Contact | `src/components/Contact.astro` |
| Footer | `src/components/Footer.astro` |

### After editing

Run `pnpm build` to verify your changes compile without errors, then deploy.
