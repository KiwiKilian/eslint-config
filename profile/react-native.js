module.exports = {
  extends: ['@react-native-community', 'airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],

  parserOptions: { project: './tsconfig.json' },

  root: true,

  ignorePatterns: ['.eslintrc.js'],

  rules: {
    'newline-before-return': 'error',
    'no-param-reassign': ['error', { props: false }],

    '@typescript-eslint/no-unused-vars': 'warn',

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
  },
};
