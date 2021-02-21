const fabric = require('@umijs/fabric');
fabric.strictEslint.rules = {
  ...fabric.strictEslint.rules,
  'react-hooks/exhaustive-deps': 'warn',
};

module.exports = {
  ...fabric.strictEslint,
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: ['.eslintrc.js']
};