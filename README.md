# Atharva Gade Portfolio

Premium Next.js portfolio website built with App Router, Tailwind CSS, and Framer Motion.

## Folder Structure

```text
.
|-- app/
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- about-section.tsx
|   |-- ai-spotlight.tsx
|   |-- contact-section.tsx
|   |-- custom-cursor.tsx
|   |-- experience-section.tsx
|   |-- floating-nav.tsx
|   |-- footer.tsx
|   |-- hero-section.tsx
|   |-- projects-section.tsx
|   |-- skills-section.tsx
|   `-- ui/
|       |-- motion.tsx
|       |-- section-heading.tsx
|       `-- section-shell.tsx
|-- data/
|   `-- portfolio.ts
|-- next.config.ts
|-- package.json
|-- postcss.config.js
|-- tailwind.config.ts
|-- tsconfig.json
`-- README.md
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

4. Create a local environment file:

```bash
cp .env.example .env.local
```

5. Fill in:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_real_email@example.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

## Customize

- Replace placeholder social links in `data/portfolio.ts`.
- Add a real resume file at `public/Atharva-Gade-Resume.pdf`.
- Swap `metadataBase` and Open Graph URLs in `app/layout.tsx` with your deployed domain.
- The contact form is already wired to `app/api/contact/route.ts` and sends mail through Resend.

## Deploy To Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as `Next.js`.
4. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in the Vercel project settings.
5. Deploy.

## Push To GitHub

1. Create a new empty repository on GitHub.
2. In this project folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

3. If Git asks for authentication, use GitHub Desktop, Git Credential Manager, or a Personal Access Token.

## Performance Notes

- Uses App Router for lean routing and metadata support.
- Motion is scoped to section-level reveals and hover states.
- Layout is responsive and optimized for mobile-first rendering.
- Sections are componentized for future code-splitting or expansion.
