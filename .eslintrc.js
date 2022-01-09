module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // Global
    'global-require': 'off',
    // Typescript
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    // Prettier
    'prettier/prettier': 'error',
    // Import
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'remix',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    // React
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/function-component-definition': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
  },
}
