# Finando | TypeScript React | ESLint configuration

Shareable TypeScript React ESLint configuration.

[![GitHub Actions](https://github.com/finando/eslint-config/actions/workflows/release.yaml/badge.svg)](https://github.com/finando/eslint-config/actions/workflows/release.yaml)

## Table of Contents

  - [Usage](#usage)
    - [Installation](#installation)
      - [NPM](#npm)
      - [Yarn](#yarn)
    - [Configuration](#configuration)
  - [Contributing](#contributing)
    - [Development environment](#development-environment)
    - [Implementing changes](#implementing-changes)
    - [Releasing new versions](#releasing-new-versions)
  - [Change log](#change-log)

## Usage

### Installation

#### NPM
```sh
npm install -D @finando/eslint-config-typescript-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-airbnb-base eslint-import-resolver-typescript eslint-plugin-deprecation eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks typescript
```

#### Yarn
```sh
yarn add -D @finando/eslint-config-typescript-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-airbnb-base eslint-import-resolver-typescript eslint-plugin-deprecation eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks typescript
```

### Configuration

The simplest possible configuration of [ESLint](https://eslint.org/) that can be used in `.eslintrc.json` is as follows:

```json
{
  "$schema": "https://json.schemastore.org/eslintrc",
  "extends": [
    "@finando/eslint-config-typescript-react"
  ]
}
```

The configuration is extensible and can thus be extended with other configurations, plugins and rules to accomodate any additional requirements.

## Contributing

### Development environment

The project is structured as a monorepo and is managed by [Lerna](https://lerna.js.org/).

Follow the outlined steps in order to set up a development environment.

#### Step 1 - Install dependencies
```sh
npm install
```

#### Step 2 - Run preparation script
```sh
npm run prepare
```

#### Step 3 - Bootstrap project
```sh
npx lerna bootstrap
```

#### Step 4 - Build leaf packages
```sh
npx lerna run build
```

### Implementing changes

In order to implement changes, create a branch from `main` branch, commit changes and open a pull request. Use [atomic](https://en.wikipedia.org/wiki/Atomic_commit) [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to add changes to Git history. Use `npm run commit` to start an interactive wizard that helps with formatting commits according to specified standard.

### Releasing new versions

Once changes are approved by pull request reviewers, merge the pull request to `main` branch. This will trigger an automatic release workflow in GitHub Actions. Follow along to make sure it completes successfully.

## Change log

Detailed changes for each release are documented in [CHANGELOG.md](https://github.com/finando/eslint-config/blob/HEAD/src/packages/typescript-react/CHANGELOG.md).
