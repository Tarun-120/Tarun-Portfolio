# Tarun Singh — Portfolio

Personal portfolio site for **Tarun Singh**, Full Stack Web Developer. Built with Next.js 16, TypeScript, Tailwind CSS v4, and the `motion` animation library.

🌐 **Live**: _add your Vercel URL after deploying_

---

## Stack

| Layer        | Tech                                                      |
| ------------ | --------------------------------------------------------- |
| Framework    | Next.js 16 (App Router) · React 19 · TypeScript           |
| Styling      | Tailwind CSS v4 · custom theme tokens                     |
| Animation    | `motion` v12 · scroll-triggered reveals + entrance stagger |
| Icons        | `lucide-react` · `react-icons` (Simple Icons / FA)         |
| Backend      | Next.js API Route (`/api/contact`) with input validation  |
| Deployment   | Vercel                                                    |

## Features

- Full-stack contact form (Next.js API route with validation)
- Dynamically generated favicon, OG image, and Twitter card via `next/og`
- Scroll-triggered section reveals with `useReducedMotion` support
- Brand-colored tech-logo pills in the skills section
- Responsive, dark-first design with mobile menu
- SEO metadata + social-share previews

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Customizing content

All site copy lives in [`src/lib/data.ts`](./src/lib/data.ts):

- `personalInfo` — name, contact, social links, resume URL
- `aboutText` — about-me paragraphs
- `skillGroups` — skill categories (icons mapped in `Skills.tsx`)
- `projects` — project cards (supports paired backend/frontend repos)
- `experience` — work history bullets

To add a new tech logo to a skill pill, add an entry to the `techIcons` map in [`src/components/Skills.tsx`](./src/components/Skills.tsx).

## Deployment

The fastest path: push to GitHub, then import to Vercel.

```bash
# from this directory
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Tarun-120/tarun-portfolio.git
git push -u origin main
```

Then on Vercel:

1. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub
2. Import the `tarun-portfolio` repo
3. Click **Deploy** (no env vars required for the base build)
4. Optional: set `NEXT_PUBLIC_SITE_URL` to your final domain so OG metadata uses it

## Optional: wire the contact form to email

The `/api/contact` route currently logs submissions server-side. To send real emails, set up [Resend](https://resend.com) (free tier covers 3,000/mo):

```ts
// src/app/api/contact/route.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "portfolio@yourdomain.com",
  to: "ts6216574@gmail.com",
  subject: `New contact from ${name}`,
  text: `From: ${email}\n\n${message}`,
});
```

Add `RESEND_API_KEY` to Vercel env vars.

## Resume

Drop `Tarun_Singh_Resume.pdf` into `public/` and the **Resume** button in the hero will work automatically.

## License

Personal portfolio — content and copy © Tarun Singh. Code is provided as-is for learning.
