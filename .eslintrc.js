module.exports = {
  root: true,
  env: {
    'browser': true,
    'es2021': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'prettier'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {},
  ignorePatterns: ['*.js', '*.jsx', '*.d.ts']
};
