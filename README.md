# Wird — وِرد · Landing Page

Next.js 15 · TypeScript · Tailwind CSS v4

---

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Connect Kit (email waitlist)

1. Copy `.env.example` to `.env.local`
2. Go to [app.kit.com](https://app.kit.com) → Forms → your "Wird Waitlist" form
3. Copy the form ID from the URL (the number in `app.kit.com/forms/XXXXXXX`)
4. Paste it in `.env.local`:
   ```
   KIT_FORM_ID=your_actual_id
   ```
5. Restart dev server

> **Note:** Without `KIT_FORM_ID`, the form still works in dev — signups are just logged to the terminal instead of Kit.

---

## Deploy to Vercel

```bash
# Push to GitHub first, then:
# Vercel dashboard → New Project → Import from GitHub
# Add environment variable: KIT_FORM_ID = your_form_id
# Deploy
```

Or via CLI:
```bash
npx vercel --prod
```

Set the env var in Vercel dashboard → Settings → Environment Variables.

---

## Project Structure

```
wird-landing/
├── app/
│   ├── api/waitlist/route.ts   ← Kit API route (server-side)
│   ├── globals.css             ← Tailwind v4 + custom theme
│   ├── layout.tsx              ← Root layout + metadata
│   └── page.tsx                ← Full landing page
├── components/
│   ├── DemoPhone.tsx           ← Animated phone mockup
│   ├── ScrollReveal.tsx        ← Intersection observer
│   └── WaitlistForm.tsx        ← Email form (client component)
├── .env.example
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

Built by Hifza Zafar · Karachi, Pakistan · April 2026
