# Pipat — My Profile

A responsive React portfolio with seven pages:

- `/` — Home
- `/about` — About Me
- `/eduexp` — Education & Experience
- `/spec` — Specializations
- `/projects` — Projects
- `/skills` — Skills
- `/contactme` — Contact Me

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, or check the code with `npm run lint`.

## Personalize the profile

- The profile currently displays student ID `6852410007` in `src/components/MyCard.jsx`.
- Put your portrait in `public/` and set `profileImage` in `src/components/MyCard.jsx` to its path (for example, `/profile.jpg`).
- Update the social profile URLs in `src/components/MyCard.jsx`.
- The contact form is currently a visual form only; connect it to an email service or backend before using it to receive messages.

Vercel's rewrite configuration is in `vercel.json` so the page routes work on refresh.
