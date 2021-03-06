module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 无需分号结尾
    "semi": ["warn", "never"],
    // 未使用变量警告提示
    "no-undef": ["off"],
    "no-unused-vars": ["off"],
    // 只允许单引号、模板字符串、avoid escape 情况下单双混用
    "quotes": ["warn", "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }],
    "quote-props": ["error", "as-needed"],
    // 缩进 4 个空格
    "indent": ["warn", 4],
    "comma-spacing": ["warn", {
      "before": false,
      "after": true
    }],
    "comma-dangle": ["warn", {
      // 除了函数以外，在多行的情况下，要加最后的 `,` 逗号
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    "array-callback-return": ["error", {
      // 数组的一些方法比如
      // every, filter, find, findIndex, flatMap, map, reduce, reduceRight, some, sort
      // 必须有返回函数，否则可能导致 BUG
      "allowImplicit": false,
      // ignore forEach
      "checkForEach": false
    }],
    // === or !==
    "eqeqeq": ["error", "always"],
    // 构造函数不能有返回值
    "no-constructor-return": ["error", "always"],
    // switch case 必须加 break
    "no-fallthrough": ["error"],
    // 禁止向全局变量赋值
    "no-global-assign": ["error", { "exceptions": [] }],
    // 禁止隐式地使用 eval 函数比如：
    // setTimeout("alert('Hi!');", 100)
    "no-implied-eval": ["error"],
    "no-invalid-this": ["error"],
    "no-multi-spaces": ["error", {
      "ignoreEOLComments": true
    }],
    "no-redeclare": ["error"],
    "array-bracket-spacing": ["warn", "never"],
    "block-spacing": ["warn", "always"],
    "key-spacing": ["warn", {
      "beforeColon": false,
      "afterColon": true
    }],
    "keyword-spacing": ["warn", {
      "before": true,
      "after": true
    }],
    // 函数调用禁止空格：fn ()
    "func-call-spacing": ["error", "never"],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "space-in-parens": ["error", "never"],
    "spaced-comment": ["error", "always", {
      "markers": ["/"]
    }],
    // func`hello`
    "template-tag-spacing": ["error", "never"],
    "space-before-blocks": ["warn", {
      "functions": "always",
      "keywords": "always",
      "classes": "always"
    }],
    "no-trailing-spaces": ["error", {
      "skipBlankLines": false,
      "ignoreComments": true
    }],
    "computed-property-spacing": ["warn", "never", {
      "enforceForClassMembers": true
    }],
    "object-curly-spacing": ["warn", "always", {
      // "arraysInObjects": true,
      // "objectsInObjects": true
    }],
    // 花括号风格
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": true
    }],
    // 强制驼峰类型
    "camelcase": ["error"],
    "lines-around-comment": ["warn", {
      "beforeBlockComment": true
    }],
    "lines-between-class-members": ["warn", "always", {
      "exceptAfterSingleLine": true
    }],
    "no-multiple-empty-lines": ["warn", {
      "max": 1
    }],
    // 文件最后添加一空行
    "eol-last": ["warn", "always"],
    "new-parens": ["error", "always"],
    "new-cap": ["error", {
      // new Persion()
      "newIsCap": true,
      // persion()
      "capIsNew": true,
      // new person.Acquaintance()
      "properties": true,
      "newIsCapExceptions": [
        // const emitter = new events();
        "events"
      ]
    }],
    "no-cond-assign": ["error", "always"],
    // ES6+
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "no-var": ["error"],
    "prefer-const": ["warn"],
    "prefer-arrow-callback": ["error", {
      "allowNamedFunctions": true
    }],
    "prefer-destructuring": ["error", {
      "array": true,
      "object": true
    }],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    // ...xxx
    "rest-spread-spacing": ["error", "never"],
    "template-curly-spacing": ["error", "always"],
    "no-duplicate-imports": ["error"]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
