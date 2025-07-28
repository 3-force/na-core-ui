---
applyTo: '**'
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
