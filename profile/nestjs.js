module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },

  root: true,

  env: {
    node: true,
    jest: true,
  },

  ignorePatterns: ['.eslintrc.js'],

  rules: {
    'class-methods-use-this': 'off',
    'newline-before-return': 'error',
    'no-param-reassign': ['error', { props: false }],

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['./test/**', './**/*.e2e-spec.ts', './**/*.spec.ts', './src/seeds/**', './src/scripts/**'],
      },
    ],
  },

  overrides: [
    {
      files: './src/seeds/**/*.seeder.ts',
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
