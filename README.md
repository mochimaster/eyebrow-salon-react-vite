# Eyebrow Salon React + Vite Practice Project

A beginner-friendly React recreation inspired by the Weblium Nail Salon template.

## Requirements

Install Node.js 20.19+ or 22.12+ before running the project.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## GitHub Pages

This project already includes a GitHub Actions deployment workflow.

1. Create a GitHub repository named `eyebrow-salon-react-vite`.
2. Push this project to the `main` branch.
3. In GitHub, open Settings → Pages.
4. Set Source to GitHub Actions.
5. The workflow will build and deploy the site.

The Vite `base` is already configured for:

https://YOUR_USERNAME.github.io/eyebrow-salon-react-vite/

If you rename the repository, update `base` in `vite.config.js`.

## Suggested learning exercises

- Replace the remote images with local images.
- Create a reusable `SectionHeading` component.
- Add animation to the mobile menu.
- Add an active navigation link while scrolling.
- Improve the form validation.
- Add a real booking backend later if you want one.
- Recreate more of the original Weblium visual details yourself.

## Attribution / practice

This is an independently written learning project inspired by a public Weblium template. It does not copy Weblium's source code.
