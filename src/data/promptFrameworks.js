export const lessons = [
  {
    id: 'voice',
    title: 'Voice Dump → Clean Brief',
    icon: '🎙️',
    outcome: 'Turn messy voice-to-text into a usable prompt without rewriting everything.',
    category: 'Input Quality',
    template:
      'Clean this voice dump into an operator brief. Preserve my intent, remove rambling, infer structure, and ask zero clarifying questions unless something blocks the task.\n\nVoice dump:\n{{input}}\n\nOutput format:\n1. Goal\n2. Current context\n3. Constraints\n4. What matters now\n5. Exact prompt I should send next',
  },
  {
    id: 'strategy',
    title: 'Strategy Partner Mode',
    icon: '🧠',
    outcome: 'Use GPT-5.5 for judgment, sequencing, tradeoffs, and killing fake progress.',
    category: 'Strategy',
    template:
      'Act as my operator-tone strategy partner. Be direct. Find the leverage, incentives, tradeoffs, and second-order effects. Push back on fake progress, overbuilding, or research-as-avoidance.\n\nDecision/task:\n{{input}}\n\nGive me:\n- Best move\n- What to ignore\n- Risk I’m underestimating\n- First 3 actions',
  },
  {
    id: 'build',
    title: 'Build Brief for Codex / Claude Code',
    icon: '🛠️',
    outcome: 'Convert an idea into a buildable spec that a coding agent can execute.',
    category: 'Build',
    template:
      'Create a build brief for Codex or Claude Code. Keep scope small and shippable. No overengineering.\n\nIdea:\n{{input}}\n\nInclude:\n1. User problem\n2. V1 scope\n3. Non-goals\n4. Data model\n5. Screens / flows\n6. Acceptance criteria\n7. Test checklist\n8. Exact first prompt to give the coding agent',
  },
  {
    id: 'project',
    title: 'Project Setup',
    icon: '📁',
    outcome: 'Know what belongs in Projects, Sources, chats, branches, and files.',
    category: 'ChatGPT OS',
    template:
      'Turn this work into a clean ChatGPT Project structure. Separate durable Sources from messy chats. Recommend focused chats and project instructions.\n\nProject context:\n{{input}}\n\nOutput:\n- Project name\n- Project instructions\n- Sources to add\n- First 5 chats to create\n- What not to add',
  },
  {
    id: 'branch',
    title: 'Branching Drill',
    icon: '🌿',
    outcome: 'Use branches to keep one chat from turning into soup.',
    category: 'ChatGPT OS',
    template:
      'From this answer or idea, identify 3 branches I should split into separate chats. For each branch, give me the exact opening prompt and what should stay out of that branch.\n\nMaterial:\n{{input}}',
  },
  {
    id: 'schedule',
    title: 'Schedule / Task Drill',
    icon: '⏰',
    outcome: 'Create recurring execution prompts instead of digital junk-drawer reminders.',
    category: 'ChatGPT OS',
    template:
      'Turn this recurring behavior into a sharp scheduled ChatGPT task. Make it useful, not annoying.\n\nBehavior I want:\n{{input}}\n\nOutput:\n- Task title\n- Schedule\n- Prompt\n- What this should NOT be used for',
  },
  {
    id: 'agent',
    title: 'Agent Mode Mission Brief',
    icon: '🤖',
    outcome: 'Use agent mode when the task needs multi-step browsing, file work, checking, or iteration.',
    category: 'Advanced Use',
    template:
      'Use agent mode for this. Do not just answer. Complete the task as far as possible using tools, then give me the result and what remains uncertain.\n\nMission:\n{{input}}\n\nRules:\n- Work from evidence, not guesses\n- Use web/files/tools where needed\n- Keep a running list of decisions made\n- Flag blockers instead of pretending\n- Final output should be usable immediately\n\nReturn:\n1. Completed work\n2. Sources / evidence checked\n3. Gaps or assumptions\n4. Next action for me',
  },
  {
    id: 'deep-research',
    title: 'Deep Research Decision Memo',
    icon: '🔎',
    outcome: 'Prevent research from becoming a fake-progress swamp.',
    category: 'Advanced Use',
    template:
      'Run this as a bounded deep research task. The output is a decision memo, not a giant report.\n\nQuestion:\n{{input}}\n\nBoundaries:\n- Focus on what changes the decision\n- Ignore generic market fluff\n- Separate facts, inference, and opinion\n- Look for competitors, demand signals, failed attempts, pricing, distribution, and wedge risk\n- End with a commit / kill / defer recommendation\n\nDecision memo format:\n1. Bottom line\n2. What the market already has\n3. What people clearly want\n4. What is still underserved\n5. Distribution reality\n6. Risks / traps\n7. Best next test',
  },
  {
    id: 'command',
    title: 'Command Builder',
    icon: '⌨️',
    outcome: 'Turn vague intent into exact commands for Codex, terminal, GitHub, or repo work.',
    category: 'Build',
    template:
      'Turn this into exact commands or repo instructions. Assume I’m using VS Code and want low-friction execution.\n\nIntent:\n{{input}}\n\nGive me:\n- The safest command sequence\n- Where to run each command\n- What each command does in plain English\n- What output I should expect\n- What to do if it fails\n\nDo not assume missing paths. If a path is required, mark it clearly.',
  },
  {
    id: 'app-process',
    title: 'App Learning Loop',
    icon: '📱',
    outcome: 'Learn app-building by shipping small pieces, not studying docs forever.',
    category: 'Build',
    template:
      'Help me learn the app-building process while building the smallest useful version. Do not turn this into a course.\n\nApp idea / current build:\n{{input}}\n\nGive me:\n1. What I need to understand conceptually\n2. What I should build next\n3. What Codex should do\n4. What I should manually inspect\n5. What can wait\n6. One tiny shipping milestone for today',
  },
  {
    id: 'product-signal',
    title: 'Product Signal Extractor',
    icon: '📡',
    outcome: 'Use conversations and reactions to find real pull without prematurely picking a wedge.',
    category: 'Product',
    template:
      'Extract product signal from this conversation or reaction. Do not overfit to one compliment.\n\nRaw notes:\n{{input}}\n\nTell me:\n- What problem was actually validated\n- What was not validated\n- Exact user language worth saving\n- Possible product direction\n- Smallest test that does not require building\n- What would make this a trap',
  },
  {
    id: 'source-update',
    title: 'Project Source Updater',
    icon: '🧾',
    outcome: 'Turn messy project changes into clean context files without creating Frankenstein docs.',
    category: 'ChatGPT OS',
    template:
      'Update my project context from this new direction. Do not preserve stale strategy just because it exists.\n\nCurrent change:\n{{input}}\n\nOutput:\n1. What old context should be deleted or demoted\n2. What new context should become durable source material\n3. Updated project instructions\n4. Updated source file outline\n5. Things that should stay in chat only',
  },
];

export const toolRouter = [
  ['GPT-5.5', 'HQ for messy strategy, files, docs, spreadsheets, project structure, synthesis, and prompt conversion.'],
  ['Agent Mode', 'Use when ChatGPT should browse, inspect files, compare sources, create artifacts, or complete a multi-step mission.'],
  ['Deep Research', 'Use for bounded market/competitor/source-heavy decisions. The output should be a decision memo, not a dump.'],
  ['Codex', 'Use for repo edits, app builds, tests, refactors, deployment, and turning specs into working code.'],
  ['Claude / Claude Code', 'Use for long code review, architecture, repo judgment, CLAUDE.md workflows, and critique.'],
  ['Perplexity', 'Use for fast current research and source discovery. Do not let it become the strategist.'],
  ['Base44', 'Use for fast no-code prototypes when login/database/backend speed matters more than code ownership.'],
  ['NotebookLM', 'Use for grounded learning hubs, source-based explainers, and audio overviews.'],
];

export const playbook = [
  ['Dump messy', 'Use voice-to-text. Don’t polish first. Capture the truth.'],
  ['Convert to brief', 'Ask GPT-5.5 to extract goal, constraints, output, and first move.'],
  ['Route the work', 'Strategy stays in GPT-5.5. Repo execution goes to Codex or Claude Code.'],
  ['Use Agent Mode', 'When the work requires browsing, checking, comparing, files, or multi-step execution.'],
  ['Use Deep Research', 'When facts, competitors, pricing, or recent tool changes decide the move.'],
  ['Make it durable', 'Good context becomes Sources, CLAUDE.md, project instructions, or reusable prompts.'],
  ['Branch aggressively', 'One idea per focused chat. Don’t create mega-chat soup.'],
  ['Review weekly', 'Kill dead tasks. Keep deployable skills. Ignore curriculum cosplay.'],
];

export const bestUseCases = [
  ['Before using Agent Mode', 'Write a mission brief. Agent mode needs a target, evidence rules, and a final deliverable. Otherwise it wanders.'],
  ['Before Deep Research', 'State the decision you’re trying to make. Research without a decision becomes a beautiful swamp.'],
  ['Before Codex', 'Create acceptance criteria. Codex is better when success is observable: buttons work, files exist, tests pass.'],
  ['Before updating Project Sources', 'Separate durable context from temporary emotion. Sources should not become a diary dump.'],
  ['Before building the rehearsal app', 'Extract product signal from real conversations. The personalization library is the seed; do not overbuild around generic social anxiety yet.'],
  ['Before Whop learning', 'Tie each module to an output: one video, one prompt system, one app screen, one reusable skill. Watching is not progress.'],
];
