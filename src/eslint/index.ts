import type { Linter } from 'eslint'

type Options = Pick<Linter.BaseConfig, 'rules' | 'plugins'>

export const eslintConfig = (options?: Options) => {
  const plugins = [
    'unicorn',
    'import',
    'unused-imports',
    'simple-import-sort',
    'sort-keys-fix',
    'typescript-sort-keys',
    'tailwindcss',
    ...(options?.plugins?.length ? options.plugins : []),
  ]

  const rules: Linter.RulesRecord = {
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'minimumDescriptionLength': 3,
        'ts-check': true,
        'ts-expect-error': false,
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
      },
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/comma-spacing': ['error', { after: true, before: false }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 'tab', { SwitchCase: 1 }],
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        overrides: {
          catch: {
            after: true,
          },
          for: {
            after: true,
          },
          if: {
            after: true,
          },
          switch: {
            after: true,
          },
          while: {
            after: true,
          },
        },
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-empty': 'warn',
    'no-extra-boolean-cast': 'warn',
    'react/display-name': 0,
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-sort-props': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'simple-import-sort/exports': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'unicorn/explicit-length-check': 'warn',
    'unicorn/filename-case': 0,
    'unicorn/import-style': 0,
    'unicorn/no-anonymous-default-export': 0,
    'unicorn/no-array-for-each': 'warn',
    'unicorn/no-array-reduce': 0,
    'unicorn/no-empty-file': 'warn',
    'unicorn/no-negated-condition': 'warn',
    'unicorn/no-nested-ternary': 0,
    'unicorn/no-null': 'warn',
    'unicorn/no-typeof-undefined': 'warn',
    'unicorn/no-useless-undefined': 'warn',
    'unicorn/prefer-code-point': 'warn',
    'unicorn/prefer-logical-operator-over-ternary': 0,
    'unicorn/prefer-module': 0,
    'unicorn/prefer-spread': 'warn',
    'unicorn/prefer-string-replace-all': 'warn',
    'unicorn/prefer-type-error': 'warn',
    'unicorn/prevent-abbreviations': 0,
    'unicorn/switch-case-braces': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    ...options?.rules,
  }

  return {
    $schema: 'https://json.schemastore.org/eslintrc',
    extends: [
      'eslint:recommended',
      'plugin:unicorn/recommended',
      'plugin:tailwindcss/recommended',
      require.resolve('@umijs/lint/dist/config/eslint'),
    ],
    parser: '@typescript-eslint/parser',
    plugins: plugins.filter((p) => !!p),
    rules: rules,
  }
}
