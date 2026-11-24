# Surendra Sharma — Personal Portfolio

A responsive personal portfolio website with a premium dark/light theme, built with plain HTML, CSS and JavaScript.

## Preview locally
Open `public/index.html` in a browser.

## Deploy to Firebase Hosting
1. Create or select a project in the Firebase Console.
2. Install Firebase CLI in a terminal: `npm install -g firebase-tools`.
3. Sign in: `firebase login`.
4. From the repository root, run `firebase use --add` and select your Firebase project.
5. Deploy: `firebase deploy --only hosting`.

The Firebase Hosting public directory is already configured as `public`.

## Custom domain
After the first Hosting deployment, add `surendrasharma.link` in Firebase Console → Hosting → Add custom domain. Follow the exact DNS verification and record values Firebase provides, then add those records in your domain registrar's DNS settings. Do not guess or replace DNS records before Firebase displays the required values.

## Personalization
Edit `public/index.html` to update the profile, project descriptions and links. No backend or paid API is required for this static site.
