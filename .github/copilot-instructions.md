---
applyTo: '**'
---

# Commit Message Guidelines

Generate commit messages in English following the [Conventional Commits](https://www.conventionalcommits.org/) specification. Your analysis MUST be based ONLY on the files in the staging area (`git diff --staged`). Do not consider unstaged files.

## Allowed Types

- feat: A new feature
- fix: A bug fix
- docs: Documentation-only changes
- style: Changes that do not affect the meaning of the code (e.g., white-space, formatting)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding or correcting tests
- build: Changes to the build system or external dependencies
- ci: Changes to CI configuration or scripts
- chore: Other changes that don’t modify src or test files

## Expected Structure

```
<type>(<optional scope>): <subject>

<optional body>

<optional footer(s)>
```

## Examples

### Simple commit

```
docs: correct spelling of CHANGELOG
```

### With scope

```
feat(auth): add token refresh middleware
```

### With body and footers

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Refs: #123
```

### With breaking change

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: 'extends' key in config file is now used for extending other config files
```

### With ! and breaking change

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

---

# README Generation Guidelines

When generating a README.md file, act as a senior developer writing clear, concise documentation for new contributors.

Use the @workspace context, package.json, and source files to infer:

- The project name
- Main features
- Tech stack
- Local setup instructions
- Environment dependencies

## Expected Structure

````
# [Project Name]

## About the Project
(Brief description of the project’s purpose based on structure and source files)

## Main Features
- Feature 1
- Feature 2
- ...

## Tech Stack
- Framework X
- Library Y
- ...

## Getting Started

### Prerequisites
- Node.js
- pnpm

### Installation

```bash
git clone [YOUR_REPO_URL]
cd [PROJECT_NAME]
pnpm install
````

### Running the Project

```bash
pnpm run dev
```

## Environment Variables

(Explain if a .env.example exists and whether developers need to create a .env file with the appropriate variables.)

```

You may include emojis in the generated README.md file to improve readability if desired, but keep them out of this instruction file to avoid confusion.
```
