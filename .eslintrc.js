module.exports = {
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: '16.9',
    },
  },
  rules: {
    // eslint 标准规则
    'no-console': 'warn',
    'no-var': 'warn',
    'object-curly-spacing': [
      'warn',
      'always',
    ],
    'comma-spacing': 'warn',
    'spaced-comment': 'warn',
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline',
      },
    ],
    'arrow-parens': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
      },
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'ImportDeclaration': 'first',
      },
    ],
    'no-restricted-properties': [
      'error',
      {
        'property': 'pop',
      },
      {
        'property': 'push',
      },
      {
        'property': 'shift',
      },
      {
        'property': 'unshift',
      },
      {
        'property': 'splice',
      },
    ],
    'curly': 'error',
    'no-constant-condition': 'off',
    'no-undef': 'off',
    'no-empty': 'off',
    'no-extra-boolean-cast': 'off',
    'dot-notation': 'off',
    'no-useless-escape': 'off',

    // eslint-plugin-react 规则
    'react/display-name': 'off',
    'react/no-string-refs': 'off',
    'react/prop-types': 'off',
    'react/no-find-dom-node': 'off',

    // typescript-eslint 规则
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-array-constructor': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-triple-slash-reference': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
}
