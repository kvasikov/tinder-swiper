module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'react-app/jest', 'plugin:react/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'no-console': 'warn',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        tabWidth: 2,
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        jsxSingleQuote: true,
        bracketSpacing: true,
        endOfLine: 'auto',
      },
    ],
  },
};
