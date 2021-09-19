module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'prettier',
    'import',
    'tailwindcss',
  ],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 0,
    'react/no-unused-prop-types': 1,
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 0,
    // 'react/forbid-component-props': ['error', { forbid: ['className'] }],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
    'prettier/prettier': 'error',
    // Next.js <Link> component doesn't play nice with anchor validation
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/anchor-has-content': 0,
    'tailwindcss/classnames-order': 0,
  },
  overrides: [
    // TypeScript config
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'airbnb',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
        'plugin:tailwindcss/recommended',
      ],
      rules: {
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        // From above
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'import/order': ['error', { 'newlines-between': 'always' }],
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-unescaped-entities': 0,
        'react/no-unused-prop-types': 1,
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 0,
        // 'react/forbid-component-props': ['error', { forbid: ['className'] }],
        'prettier/prettier': 'error',
        // Next.js <Link> component doesn't play nice with anchor validation
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/anchor-has-content': 0,

        // TypeScript specific override to avoid errors like `'React' was used before it was defined`
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],

        // I suggest this setting for requiring return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        'tailwindcss/classnames-order': 0,
      },
    },
  ],
}
