module.exports = {
  extends: [
    "./rules/base/best-practices",
    "./rules/base/possible-errors",
    "./rules/base/style",
    "./rules/base/variables",
    "./rules/base/es6",
    "./rules/base/strict",
  ].map(require.resolve),
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020, //支持es6语法，但并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）
    sourceType: "module", //指定来源的类型，"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    //使用的额外的语言特性
    ecmaFeatures: {
      // 允许在全局作用域下使用 return 语句
      globalReturn: false,
      // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
      impliedStrict: true,
      // 启用 JSX
      jsx: true,
    },
  },
  // 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果发现配置文件中有 “root”: true，它就会停止在父级目录中寻找。
  root: true,
};
