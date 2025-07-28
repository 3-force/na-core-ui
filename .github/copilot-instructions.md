---
applyTo: '**'
---

# Commit message guidelines

Generate commit messages in English following the Conventional Commits specification.

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
