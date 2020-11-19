module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['font-variation-ligatures'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
