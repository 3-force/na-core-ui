---
applyTo: '**'
---

# Commit message guidelines

Generate commit messages in English following the Conventional Commits specification. **Your analysis MUST be based ONLY on the files in the staging area (`git diff --staged`). Do not consider unstaged files.**

Use one of the following types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing ones
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files

Format:

```
<type>(<optional scope>): <subject>
```

Examples:

```
feat(auth): add token refresh middleware
fix(core): handle null values in config parser
docs(readme): add usage section for CLI
```

# README Generation Guidelines

When asked to create a README for this project, act as a senior developer writing documentation for a new contributor.

Use the `@workspace` context to analyze the entire file structure, `package.json` to identify the project name and dependencies, and source code files to understand the main features.

The README must be clear, concise, written in Portuguese, and strictly follow this Markdown structure:

# [Project Name]

(Use the name found in `package.json`)

## 📖 Sobre o Projeto

(Write one or two paragraphs describing the project's overall purpose, based on what you can infer from the files and structure.)

## ✨ Principais Funcionalidades

(Create a bulleted list of the main features you can identify in the code. For example: "User authentication", "Data visualization dashboard", "File upload system", etc.)

## 🛠️ Tecnologias Utilizadas (Tech Stack)

(Create a bulleted list of the main technologies, frameworks, and libraries used. Look at the `dependencies` and `devDependencies` in `package.json`.)

## 🚀 Começando (Getting Started)

(Provide a step-by-step guide to set up and run the project locally.)

### Pré-requisitos

(List the tools that need to be installed, such as Node.js and pnpm.)

### Instalação

1. Clone the repository:

```bash
git clone [YOUR_REPO_URL]
```

2. Navigate to the project directory:

```bash
cd [PROJECT_NAME]
```

3. Install dependencies:

```bash
pnpm install
```

### Rodando o Projeto

(Provide the command to start the development server, based on the `dev` script in `package.json`.)

```bash
pnpm run dev
```

## 📄 Variáveis de Ambiente

(Check if a `.env.example` file exists. If so, explain that a `.env` file needs to be created from the example and the necessary variables filled in. If not, suggest that this section can be added if the project requires environment variables.)

The final output should be the complete content of the README.md file, ready to be copied. Use emojis to make the sections more visual and friendly.
