# Mamba Strike Academy

> ## ⚠️ This repo no longer serves the site
>
> The Academy now lives at **https://mambastrike.co.il/academy/**, served by GitHub
> Pages from the `academy/` directory of
> [`mamba-strike-mma`](https://github.com/LKWhitespace/mamba-strike-mma). **That copy is
> the one that ships — edits made here do not reach the live site.**
>
> All `vercel.json` does now is redirect every path on the old Vercel host to the new
> URL (308). The files below are kept as history and as a revert point; the Vercel
> project is due to be deleted once the old links have aged out, and the redirect goes
> away with it.

Static site for **Mamba Strike Academy** — a Hebrew-language digital MMA course. 11 short video lessons on stance, punches, defense, and kicks.

Built from a Claude Design handoff. Pure HTML/CSS/JS — no framework, no build step.

## Structure

```
index.html            # the page
app.js                # interactivity (modal, progress, splash, reveals)
styles/
  index.css           # aggregates all design tokens
  app.css             # page-specific styles
  tokens/             # design system tokens (colors, fonts, spacing, etc.)
assets/               # hero, logo, swoosh, OG image, favicon
vercel.json           # cache headers for /assets and /styles
```

## Deploy

Nothing here is deployed as a site any more. The Vercel project attached to this
repo serves only the catch-all 308 in `vercel.json`, pointing at
`https://mambastrike.co.il/academy/`, and is due to be deleted.

The live Academy is deployed by GitHub Pages from the `academy/` directory of
[`mamba-strike-mma`](https://github.com/LKWhitespace/mamba-strike-mma) — edit it
there.
