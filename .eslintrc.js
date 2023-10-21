module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'next/core-web-vitals',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/newline-after-import': ['error', { count: 2, }],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2, 
        maxEOF: 1,

      }
    ],
  },
};
