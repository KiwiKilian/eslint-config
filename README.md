# @kiwikilian/eslint-config

My unified ESLint config.

## Getting started in 3 Steps

Applying the ruleset to a project is quick and easy. Install the package, then create an `.eslintrc.js` file
and select an appropriate project profile.

### 1. Install the Package

```sh
npm install --save-dev eslint
npm install --save-dev typescript # Only for TypeScript profiles/projects
npm install --save-dev @kiwikilian/eslint-config
```

### 2. Choose one Profile

The ruleset currently supports three different "profile" strings, which select lint rules applicable for
your project:

- `@kiwikilian/eslint-config/profile/react` - This profile enables lint rules intended for a frontend React project with TypeScript.

- `@kiwikilian/eslint-config/profile/nestjs` - This profile enables lint rules intended for a backend NestJS project with TypeScript.

After choosing a profile, create an `.eslintrc.js` config file. If you use a TypeScript profile provide the `__dirname` context. Add your profile string in the `extends` field, as shown below for React:

```ts
require('@kiwikilian/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ['@kiwikilian/eslint-config/profile/react'],
  parserOptions: { tsconfigRootDir: __dirname },
};
```

### 3. Add `@kiwikilian/prettier-config`

The `@kiwikilian/eslint-config` ruleset is intended to be used with the Prettier code formatter, see [`@kiwikilian/prettier-config`](https://github.com/KiwiKilian/prettier-config).
