module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    // 'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    // 'vue/no-v-model-argument': 'off',
    'vue/no-mutating-props': 'off',
    // 剪头函数 箭头前后空格
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    // 操作符周围空格
    'space-infix-ops': ['error', { 'int32Hint': false }],
    // 大括号之中的空格
    'object-curly-spacing': ['error', 'always'],
    // 注释空格
    'spaced-comment': ['error', 'always', {
      'line': {
        'markers': ['/'],
        'exceptions': ['-', '+']
      },
      'block': {
        'markers': ['!'],
        'exceptions': ['*'],
        'balanced': true
      }
    }],
    '@typescript-eslint/no-explicit-any': ['off']
  }
}
