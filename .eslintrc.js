const base = require('@umijs/fabric/dist/eslint');

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    'arrow-parens': 0,
    'react/no-find-dom-node': 0,
  },
};
