# Utility Files for Launch School Work

## `eslint.config.mjs`

ESLint Configuration File for JavaScript linting.

This `eslint.config.mjs` includes the configuration from Launch School's
`eslintrc.yml` <https://launchschool.com/gists/9ad96eed>, migrated for
compatibility with ESLint v9.+.

### Install

Copy this file into the root of your repository.

Run:

```bash
npm install --save-dev eslint globals @babel/core @babel/eslint-parser
```

### Usage

```bash
npx eslint .
```

You can also configure your editor to use ESLint to detect issues on the fly.
