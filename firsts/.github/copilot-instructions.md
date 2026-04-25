# Copilot instructions for this repository

Summary
- This repository is primarily a collection of shell scripts and learning resources (see bosk/bshellfiles/). There are no obvious build, test, or lint configuration files (package.json, pyproject.toml, Makefile, tox.ini, etc.) in the project root.

1) Build, test, and lint commands
- No project-level build/test/lint commands detected in the repo root.
- Common commands if a package.json is added:
  - Install dependencies: npm install
  - Run tests: npm test
  - Run lint: npm run lint
  - Start app: npm start
- To run a single npm test when the test runner supports it (example for Jest): npm test -- -t "<test name>"
- To run an individual script (single-file execution):
  - Run via bash: bash ./bosk/bshellfiles/ch01/world.sh
  - Or make executable and run: chmod +x ./path/to/script && ./path/to/script
- VS Code launch configuration has been normalized to include a "Run npm start" terminal configuration. Copilot should still verify package.json exists before suggesting running npm scripts.

2) High-level architecture (big picture)
- Primary content: bosk/bshellfiles/ — organized into chapters (ch01, ch02, ch03, ch04...). Each chapter contains example shell scripts, small C files (cfiles/), AWK/sed examples and challenge scripts.
- Top-level files/dirs include: bsh (script/tool), the-book-of-secret-knowledge (resources), and some archives (e.g., "Alice in.zip"). These are not part of a typical build system.
- .vscode/ contains editor launch/settings. Note: launch.json contains Node "npm start"/Node program entries but no package.json exists in repo — Copilot should check for manifests before suggesting npm/node commands.

3) Key conventions and patterns
- Shell-first repository: most executable content is Bash scripts with a shebang (#!/bin/bash). Prefer shell semantics when generating or editing code.
- Naming: chapter and challenge conventions: chNN (chapter folders), challengeN.sh, cfiles/ for small C examples.
- Keep suggestions local to the script being edited. Avoid adding new project-wide tooling unless the user requests it.
- When suggesting run or test commands, prefer explicit invocation (bash path or ./path) and note permission changes (chmod +x).

4) Where to look when answering questions
- Source examples: bosk/bshellfiles/**
- Editor/IDE hints: .vscode/launch.json and settings.json
- Misc resources: top-level archives and resource folders (inspect before acting)

5) AI/assistant files
- No CLAUDE.md, AGENTS.md, .cursorrules, .windsurfrules, or other assistant config files detected. If they are added later, incorporate their authoritative guidance into this document.

Notes for Copilot sessions
- Always detect presence of package manifests or CI before offering high-level build or test commands.
- Prefer minimal, reversible edits (e.g., add a README or small helper script) and ask before introducing new tooling.

If you want this file extended to include example run commands for specific scripts, or to include a suggested shellcheck/lint workflow, say which areas to cover and it will be added.
