# Wird Landing Page — Deployment Guide

## Deploy to Vercel in 5 minutes

### Option A: Drag & Drop (Fastest)
1. Go to vercel.com/new
2. Drag this folder onto the page
3. Done — live in 30 seconds.

### Option B: GitHub + Vercel (Recommended)
1. Create a new GitHub repo
2. Push these files to it
3. Connect repo on vercel.com/new
4. Auto-deploys on every push.

---

## Set up the Email Waitlist

### Formspree (Free, fastest — recommended for MVP)
1. Go to formspree.io → create free account
2. Create a new form → copy your Form ID
3. In index.html, find this line:
   ```
   const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
4. Replace `YOUR_FORM_ID` with your actual ID
5. Emails go to your inbox + Formspree dashboard

### Alternatives
- **Resend** (resend.com) — developer-friendly, good deliverability
- **ConvertKit** — good for newsletters + waitlists
- **Mailchimp** — free up to 500 contacts

---

## Customise Before Launch

### Must-change:
- [ ] Replace `YOUR_FORM_ID` with Formspree endpoint
- [ ] Update `hello@wird.app` with your real email
- [ ] Update social links (Twitter/X, LinkedIn)
- [ ] Update `og:image` meta tag with a real image

### Should-change:
- [ ] Replace the concept demo video section with your real demo video
  - Record a 30-45 second screen recording showing the counter tick
  - Upload to YouTube (unlisted) or use HTML5 video tag
- [ ] Update the "47 people on the list" base count once real signups come in
- [ ] Add your real domain to Vercel (wird.app or similar)

### Custom domain on Vercel:
1. Vercel dashboard → your project → Settings → Domains
2. Add wird.app (or whatever you bought)
3. Update DNS at your registrar

---

## Concept Demo Video — Script

Record this as a 30-second screen recording + voiceover:

**Shot 1** (0-5s): Phone screen, Wird app open, counter at 0. Start session tap.
**Shot 2** (5-15s): Phone face-down on desk. Person typing on laptop. You hear them say "Astaghfirullah" naturally. Counter ticks to 1. Say it again — ticks to 2.
**Shot 3** (15-22s): Walking shot. Earbuds in. Say it. Notification shows 47. 48. 49.
**Shot 4** (22-28s): Dashboard screen — bar chart of the day, time breakdown.
**Shot 5** (28-30s): وِرد logo on screen. URL.

**Voiceover**: "You're already doing dhikr. We just count it."

Tools: OBS for screen recording, your phone camera, DaVinci Resolve (free) for editing.

---

## Tech Stack (if converting to Next.js)

```
/app
  /page.tsx     ← copy HTML into JSX
  /layout.tsx   ← head/meta tags
/public
  /og.png       ← social share image (1200x630)
```

For the email form in Next.js, use an API route:
```
/app/api/waitlist/route.ts
```

Libraries: `resend` npm package for email, `@vercel/postgres` or Supabase for storing emails.

---

## Analytics

Add to <head> before launch:
- **Vercel Analytics** (free, privacy-friendly): just enable in Vercel dashboard
- **Plausible** (plausible.io) — lightweight, no cookies, good for Muslim audience trust

---

Built by Hifza — Karachi, Pakistan · 2026
