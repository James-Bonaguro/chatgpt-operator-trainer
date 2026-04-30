# ChatGPT Operator Trainer

A lightweight training app for getting better outputs from ChatGPT, Codex, Claude, Perplexity, and other AI tools.

Most people do not need more prompts. They need a better way to give the model the right job, boundaries, evidence standard, and output format. This app turns messy thinking into reusable prompt frameworks for strategy, research, app building, project setup, agent mode, deep research, and tool routing.

**Live app:** https://james-bonaguro.github.io/chatgpt-operator-trainer/

## What this is

ChatGPT Operator Trainer is a static Vite + React + Tailwind app. It is built as a simple prompt-practice tool, not a full SaaS product.

Use it when you have a rough idea, voice note, vague task, or messy plan and want to turn it into a cleaner instruction for an AI model.

The app helps you:

- turn voice-to-text dumps into structured operator briefs
- create better prompts for GPT-5.5, Claude, Codex, and agent tools
- decide when to use ChatGPT, Codex, Claude, Perplexity, NotebookLM, or other tools
- write clearer build briefs before sending work to a coding agent
- keep research bounded so it does not turn into fake progress
- separate project context, sources, branches, schedules, and execution tasks

## Why it exists

AI tools are powerful, but the output quality depends heavily on how the task is framed.

Bad input usually sounds like:

> “Here’s a huge messy thought. Help me with this.”

Better input defines:

- the job the model should do
- what matters now
- what should be ignored
- the boundaries of the task
- the evidence standard
- the exact output format

This app is a small operating system for practicing that habit.

## Who it is for

This is useful for builders, founders, operators, students, consultants, writers, and anyone trying to use AI for real work instead of one-off answers.

It is especially helpful if you:

- use voice-to-text and your prompts come out messy
- bounce between too many AI tools
- use ChatGPT Projects, Claude Code, Codex, Perplexity, or NotebookLM
- want better research prompts without reading every AI product doc
- are learning to build small apps with AI assistance
- want reusable frameworks instead of prompt chaos

## Features

- Prompt framework trainer
- Messy input box + generated structured prompt
- Copy-to-clipboard buttons
- Tool router for choosing the right AI tool
- Operating playbook for repeatable AI workflows
- Best-use-case examples customized around practical work
- Mobile-friendly layout
- No backend
- No login
- No database
- No external UI component libraries

## Prompt frameworks included

The app currently includes frameworks for:

- Voice Dump → Clean Brief
- Strategy Partner Mode
- Build Brief for Codex / Claude Code
- Project Setup
- Branching Drill
- Schedule / Task Drill
- Agent Mode Mission Brief
- Deep Research Decision Memo
- Command Builder
- App Learning Loop
- Product Signal Extractor
- Project Source Updater

Each framework is designed to convert rough intent into a cleaner prompt you can copy into the right model or tool.

## How to use it

1. Open the app.
2. Pick a drill from the left panel.
3. Paste or type a rough thought into the input box.
4. Review the generated prompt.
5. Copy it into ChatGPT, Codex, Claude, Perplexity, or the tool that fits the job.

The goal is not to memorize prompts. The goal is to build the habit of framing work clearly before handing it to AI.

## Tech stack

- Vite
- React
- Tailwind CSS
- GitHub Pages
- GitHub Actions

This project is intentionally simple. It does not use shadcn/ui, lucide-react, a backend, auth, or a database.

## Project structure

```text
chatgpt-operator-trainer/
├── .github/workflows/deploy.yml     # GitHub Pages deployment workflow
├── src/
│   ├── App.js                       # Main app UI
│   ├── main.js                      # React entry point
│   ├── styles.css                   # Tailwind imports and base styles
│   └── data/
│       └── promptFrameworks.js      # Prompt frameworks and tool-router content
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Local setup

Clone the repo:

```bash
git clone https://github.com/James-Bonaguro/chatgpt-operator-trainer.git
cd chatgpt-operator-trainer
```

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Open the local app at:

```text
http://localhost:5173/
```

or, depending on the terminal output:

```text
http://127.0.0.1:5173/
```

## Build

Create a production build:

```bash
npm run build
```

The production build is written to:

```text
dist/
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub Pages deployment

This project is configured for GitHub Pages under the repository name:

```text
chatgpt-operator-trainer
```

The production Vite base path is:

```js
base: "/chatgpt-operator-trainer/"
```

That allows the deployed app to load correctly from:

```text
https://james-bonaguro.github.io/chatgpt-operator-trainer/
```

To deploy:

1. Push changes to the `main` branch.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Go to **Actions → Deploy to GitHub Pages**.
6. Run the workflow manually, or let it run after a push.
7. Open the live Pages URL after the workflow completes.

## Deployment notes

Local development uses `/` as the base path.

Production uses `/chatgpt-operator-trainer/` as the base path.

That split is intentional: local development should be simple, while the deployed GitHub Pages version needs the repo-name path.

## What this is not

This is not a full learning management system.

This is not a chatbot.

This is not a database-backed prompt library.

This is not a replacement for ChatGPT, Claude, Codex, or Perplexity.

It is a small training layer that helps you use those tools better.

## Future ideas

Possible future improvements:

- add saved favorite frameworks
- add custom user-created frameworks
- add categories and search
- add downloadable markdown exports
- add example before/after prompt transformations
- add a SignalSpeak-style speaking practice mode
- add a simple local-only history using `localStorage`

The current version intentionally stays small so it can be used immediately.

## License

No license has been selected yet.
