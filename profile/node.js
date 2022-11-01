module.exports = {
  extends: ['plugin:node/recommended', 'airbnb-base', 'prettier'],

  root: true,

  ignorePatterns: ['.eslintrc.js'],

  rules: {
    'newline-before-return': 'error',
    'no-param-reassign': ['error', { props: false }],

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
  },
};
