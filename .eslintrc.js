const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  globals: {
    document: false,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false },
    ],
  },
  settings: {
    'import/resolver': {
      alias: [['src', './src')]],
    },
  },
};
