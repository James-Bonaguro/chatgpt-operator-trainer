# ChatGPT Operator Trainer

A static Vite + React + Tailwind app for practicing ChatGPT Operator prompts. It has no backend, no login, and no external UI component libraries.

## Local Setup

```bash
npm install
npm run dev
```

Open the app locally at:

```text
http://localhost:5173/
```

## Build

```bash
npm run build
```

The production build is written to `dist/`.

## GitHub Pages Deployment

This project is configured for the repository name `chatgpt-operator-trainer`.

1. Push the project to a GitHub repository named `chatgpt-operator-trainer`.
2. In GitHub, open **Settings -> Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch.
5. The workflow in `.github/workflows/deploy.yml` builds the app and deploys `dist/` to GitHub Pages.

The Vite base path is `/` during local development and `/chatgpt-operator-trainer/`
for production builds, so the deployed app loads correctly from:

```text
https://<your-github-username>.github.io/chatgpt-operator-trainer/
```
