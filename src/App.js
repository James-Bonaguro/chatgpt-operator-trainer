import React, { useMemo, useState } from 'react';
import { bestUseCases, lessons, playbook, toolRouter } from './data/promptFrameworks';

const h = React.createElement;

function fillTemplate(template, input) {
  const safeInput = input?.trim() || '[paste your rough voice note or task here]';
  return template.replaceAll('{{input}}', safeInput);
}

function Pill({ children }) {
  return h(
    'span',
    {
      className:
        'rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs text-neutral-300',
    },
    children,
  );
}

function TabButton({ id, activeTab, label, onSelect }) {
  return h(
    'button',
    {
      type: 'button',
      onClick: () => onSelect(id),
      className: `rounded-xl px-4 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900 ${
        activeTab === id ? 'bg-neutral-100 text-neutral-950' : 'text-neutral-300 hover:bg-neutral-800'
      }`,
    },
    label,
  );
}

function LessonButton({ lesson, selected, onSelect }) {
  return h(
    'button',
    {
      type: 'button',
      onClick: () => onSelect(lesson.id),
      'aria-pressed': selected,
      className: `w-full rounded-2xl border p-3 text-left transition focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900 ${
        selected ? 'border-neutral-500 bg-neutral-800' : 'border-neutral-800 bg-neutral-950 hover:bg-neutral-900'
      }`,
    },
    h(
      'div',
      { className: 'flex gap-3' },
      h('div', { className: 'text-xl', 'aria-hidden': 'true' }, lesson.icon),
      h(
        'div',
        { className: 'space-y-1' },
        h('div', { className: 'font-medium' }, lesson.title),
        h('div', { className: 'text-xs text-neutral-500' }, lesson.category),
        h('div', { className: 'text-sm leading-5 text-neutral-400' }, lesson.outcome),
      ),
    ),
  );
}

function InfoCard({ title, body, label }) {
  return h(
    'div',
    { className: 'rounded-2xl border border-neutral-800 bg-neutral-950 p-4' },
    label ? h('div', { className: 'mb-2 text-sm text-neutral-500' }, label) : null,
    h('div', { className: label ? 'mb-2 text-lg font-semibold' : 'font-semibold' }, title),
    h('p', { className: 'mt-1 text-sm leading-6 text-neutral-400' }, body),
  );
}

function ChatGPTOperatorTrainer() {
  const [selected, setSelected] = useState(lessons[0].id);
  const [raw, setRaw] = useState(
    'I want to use ChatGPT better but I mostly voice dictate, so my prompts are messy. Help me turn this into something actually useful.',
  );
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState('trainer');

  const active = useMemo(
    () => lessons.find((lesson) => lesson.id === selected) || lessons[0],
    [selected],
  );
  const prompt = useMemo(() => fillTemplate(active.template, raw), [active, raw]);

  async function copyPrompt() {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(prompt);
      } else {
        const copyBuffer = document.createElement('textarea');
        copyBuffer.value = prompt;
        copyBuffer.setAttribute('readonly', '');
        copyBuffer.style.position = 'fixed';
        copyBuffer.style.top = '-1000px';
        document.body.appendChild(copyBuffer);
        copyBuffer.select();
        document.execCommand('copy');
        document.body.removeChild(copyBuffer);
      }
    } catch {
      const copyBuffer = document.createElement('textarea');
      copyBuffer.value = prompt;
      copyBuffer.setAttribute('readonly', '');
      copyBuffer.style.position = 'fixed';
      copyBuffer.style.top = '-1000px';
      document.body.appendChild(copyBuffer);
      copyBuffer.select();
      document.execCommand('copy');
      document.body.removeChild(copyBuffer);
    }
  }

  return h(
    'main',
    { className: 'min-h-screen bg-neutral-950 p-4 text-neutral-100 md:p-8' },
    h(
      'section',
      { className: 'mx-auto max-w-6xl space-y-6' },
      h(
        'header',
        { className: 'space-y-4' },
        h(
          'div',
          { className: 'flex flex-wrap gap-2' },
          h(Pill, null, 'GPT-5.5 Operator Training'),
          h(Pill, null, 'Voice-to-text friendly'),
          h(Pill, null, 'Codex-ready'),
        ),
        h(
          'div',
          { className: 'space-y-3' },
          h(
            'h1',
            { className: 'max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl' },
            'Use ChatGPT like an operator, not a search box.',
          ),
          h(
            'p',
            { className: 'max-w-3xl text-base leading-7 text-neutral-300 md:text-lg' },
            'A practical trainer for turning rough thinking into better prompts, cleaner project structure, smarter research, sharper agent tasks, and build briefs that Codex can actually execute.',
          ),
        ),
      ),
      h(
        'nav',
        { className: 'flex flex-wrap gap-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-2' },
        [
          ['trainer', 'Trainer'],
          ['playbook', 'Playbook'],
          ['router', 'Tool Router'],
          ['examples', 'Best Use Cases'],
        ].map(([id, label]) =>
          h(TabButton, {
            key: id,
            id,
            label,
            activeTab: tab,
            onSelect: setTab,
          }),
        ),
      ),
      tab === 'trainer'
        ? h(
            'section',
            { className: 'grid gap-4 lg:grid-cols-12' },
            h(
              'aside',
              { className: 'rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-xl lg:col-span-4' },
              h(
                'div',
                { className: 'mb-4 space-y-1' },
                h('h2', { className: 'text-xl font-semibold' }, 'Pick the drill'),
                h(
                  'p',
                  { className: 'text-sm text-neutral-400' },
                  'Use these when your input is messy but the output needs to be precise.',
                ),
              ),
              h(
                'div',
                { className: 'space-y-2' },
                lessons.map((lesson) =>
                  h(LessonButton, {
                    key: lesson.id,
                    lesson,
                    selected: lesson.id === selected,
                    onSelect: setSelected,
                  }),
                ),
              ),
            ),
            h(
              'section',
              { className: 'rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-xl md:p-6 lg:col-span-8' },
              h(
                'div',
                { className: 'mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between' },
                h(
                  'div',
                  { className: 'space-y-2' },
                  h(
                    'div',
                    { className: 'flex items-center gap-3' },
                    h('span', { className: 'text-2xl', 'aria-hidden': 'true' }, active.icon),
                    h('h2', { className: 'text-2xl font-semibold' }, active.title),
                  ),
                  h('p', { className: 'text-neutral-400' }, active.outcome),
                ),
                h(
                  'button',
                  {
                    type: 'button',
                    onClick: copyPrompt,
                    className:
                      'rounded-2xl bg-neutral-100 px-4 py-2 font-medium text-neutral-950 transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900',
                  },
                  copied ? 'Copied' : 'Copy prompt',
                ),
              ),
              h(
                'label',
                { className: 'mb-2 block text-sm text-neutral-300', htmlFor: 'messy-voice-note' },
                'Messy voice note / task',
              ),
              h('textarea', {
                id: 'messy-voice-note',
                value: raw,
                onChange: (event) => setRaw(event.target.value),
                className:
                  'mb-5 min-h-32 w-full rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-sm leading-6 text-neutral-100 outline-none focus:border-neutral-500',
              }),
              h('label', { className: 'mb-2 block text-sm text-neutral-300' }, 'Prompt to paste into GPT-5.5'),
              h(
                'pre',
                {
                  className:
                    'max-h-96 overflow-auto whitespace-pre-wrap rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-sm leading-6 text-neutral-200',
                },
                prompt,
              ),
            ),
          )
        : null,
      tab === 'playbook'
        ? h(
            'section',
            { className: 'rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-xl' },
            h(
              'div',
              { className: 'mb-5 space-y-2' },
              h('h2', { className: 'text-2xl font-semibold' }, 'Operating playbook'),
              h(
                'p',
                { className: 'text-neutral-400' },
                'The process is the advantage: rough input → clean brief → right tool → shipped artifact.',
              ),
            ),
            h(
              'div',
              { className: 'grid gap-3 md:grid-cols-2 lg:grid-cols-4' },
              playbook.map(([title, body], index) =>
                h(InfoCard, {
                  key: title,
                  title,
                  body,
                  label: `Step ${index + 1}`,
                }),
              ),
            ),
          )
        : null,
      tab === 'router'
        ? h(
            'section',
            { className: 'rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-xl' },
            h(
              'div',
              { className: 'mb-5 space-y-2' },
              h('h2', { className: 'text-2xl font-semibold' }, 'Tool router'),
              h(
                'p',
                { className: 'text-neutral-400' },
                'Use the right machine for the job. Don’t let tool choice become procrastination with better lighting.',
              ),
            ),
            h(
              'div',
              { className: 'grid gap-3 md:grid-cols-2' },
              toolRouter.map(([tool, use]) =>
                h(InfoCard, {
                  key: tool,
                  title: tool,
                  body: use,
                }),
              ),
            ),
          )
        : null,
      tab === 'examples'
        ? h(
            'section',
            { className: 'rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-xl' },
            h(
              'div',
              { className: 'mb-5 space-y-2' },
              h('h2', { className: 'text-2xl font-semibold' }, 'Customized best use cases'),
              h(
                'p',
                { className: 'text-neutral-400' },
                'These are the repeatable moves for your current pivot: learn the process, build small, improve inputs, and avoid fake-progress research.',
              ),
            ),
            h(
              'div',
              { className: 'space-y-3' },
              bestUseCases.map(([title, body]) =>
                h(InfoCard, {
                  key: title,
                  title,
                  body,
                }),
              ),
            ),
          )
        : null,
    ),
  );
}

export default ChatGPTOperatorTrainer;
