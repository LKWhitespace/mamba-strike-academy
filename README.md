# Mamba Strike Academy

> ## ⚠️ This repo no longer serves the site
>
> The Academy now lives at **https://mambastrike.co.il/academy/**, served by GitHub
> Pages from the `academy/` directory of
> [`mamba-strike-mma`](https://github.com/LKWhitespace/mamba-strike-mma). **That copy is
> the one that ships — edits made here do not reach the live site.**
>
> The Vercel project that used to serve this repo has been deleted, and
> `mamba-strike-academy.vercel.app` no longer resolves. `vercel.json` went with it —
> it briefly held a 308 to the new URL, which has no host left to run on. The files
> below are kept as history and as a revert point.

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
```

## Deploy

Nothing here deploys anywhere. The Vercel project is gone.

The live Academy is deployed by GitHub Pages from the `academy/` directory of
[`mamba-strike-mma`](https://github.com/LKWhitespace/mamba-strike-mma) — edit it
there.
