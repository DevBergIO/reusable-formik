module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-props-no-spreading': 'off',
    'no-multi-spaces': 'warn',
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'warn',
    'react/jsx-tag-spacing': 'warn',
    'react/prop-types': 1,
    'react/no-array-index-key': 'off',
    'linebreak-style': 'off',
    'object-curly-spacing': 1,
  },
};
