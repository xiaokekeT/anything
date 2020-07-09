module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
}
