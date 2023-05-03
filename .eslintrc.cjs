// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        indent: [
          'error',
          2,
          {
            SwitchCase: 1,
          },
        ],
        quotes: [
          'error',
          'single',
        ],
        semi: [
          'error',
          'always',
        ],
        'linebreak-style': [
          'off',
        ],
        '@typescript-eslint/ban-types': [
          'off',
        ],
        'import/no-unresolved': [
          'off',
        ],
        'import/extensions': [
          'off',
        ],
        'import/prefer-default-export': [
          'off',
        ],
        'no-shadow': [
          'off',
        ],
        '@typescript-eslint/no-shadow': [
          'error',
        ],
        'no-unused-vars': [
          'off',
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
        ],
        'func-style': [
          'error',
          'declaration',
          {
            allowArrowFunctions: true,
          }
        ],
        'func-names': [
          'error',
        ],
        'no-case-declarations': [
          'off',
        ],
        'no-plusplus': [
          'off',
        ],
        'no-continue': [
          'off',
        ],
        'import/no-extraneous-dependencies': [
          'off',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
};
