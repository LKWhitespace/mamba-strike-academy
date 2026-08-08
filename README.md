# Mamba Strike Academy

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

Static — deployed to Vercel with zero build config.
