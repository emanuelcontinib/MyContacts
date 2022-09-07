module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'prefer-const': 'off',
    'no-restricted-globals': 'off',
    camelcase: 'off',
  },
};
