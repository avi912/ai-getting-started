CLAUDE / OpenCode guidance for this repository

Purpose
- Short guide for using Anthropic Claude (OpenCode) with this repo. Helps Claude sessions give precise, repository-aware answers without guessing missing manifests or running code.

Quick facts about the repo
- Primary content: bosk/bshellfiles/ — chaptered Bash examples, AWK/sed, small C programs in cfiles/.
- No package.json, pyproject.toml, or CI workflows detected in repo root.
- .vscode/launch.json contains Node "npm start" debug entries; verify package.json before suggesting npm commands.
- Contains archives (e.g., "Alice in.zip") — avoid sending large binary contents to the model.

How to interact (best practices)
- Always request the file path(s) to operate on. Prefer: "Files: bosk/bshellfiles/ch02/func.sh" rather than vague references.
- Ask for small, focused changes. For edits, return a unified patch or diff (git-style or contextual) rather than full-file replacements when possible.
- If asked to run or verify commands, give explicit shell commands and expected outputs; do not attempt to execute anything remotely.
- Avoid sending full binary files or large archives. If needed, request a short listing and only relevant excerpt(s).
- Security: never request or expose secrets (keys, tokens, credentials). If a user pastes secrets, redact and ask them to rotate them.

Prompt patterns and examples
- Summarize repository (Feynman-style):
  "Summarize this repo in plain language for a beginner. Focus on bosk/bshellfiles, what each chapter covers, and how examples are organized. Mention any missing manifests."

- Refactor a shell script (small change):
  "Refactor bosk/bshellfiles/ch02/func.sh to be POSIX-compliant and remove useless use of cat. Preserve behavior and add a brief changelog. Return a unified diff."

- Add a minimal package manifest suggestion:
  "This repo primarily contains Bash scripts. Suggest a minimal package.json and npm scripts for test/lint placeholders if maintainers want Node-based tooling. Provide the JSON only." 

- Create a script test harness suggestion:
  "Create a small Makefile or shell script under tooling/ that runs all executable .sh files in bosk/bshellfiles and reports failures. Show the file content and usage examples."

- Explain a C file and propose tests:
  "Explain bosk/bshellfiles/ch03/cfiles/length.c: what it does, possible edge cases, and propose 3 unit tests (compile commands and sample input/output)."

What to look at first
- bosk/bshellfiles/** for examples and patterns
- .vscode/launch.json for IDE hints (but confirm manifests exist before using npm/node)
- Top-level archives and large files — ask before opening

Formatting and response constraints for Claude
- Prefer diffs/patches for code changes. Example: use git unified diff format or show only changed hunks.
- When asked for proposals (e.g., add CI), include a minimal working example and explain required secrets/credentials clearly in a separate note.
- Keep replies actionable and concise: include commands to run locally to verify changes.

If you need more
- Ask for which files or directories to include in context.
- Request the user to paste small file contents when needed (under ~5KB preferred).

Created by repository maintainers to standardize Claude/OpenCode interactions.
