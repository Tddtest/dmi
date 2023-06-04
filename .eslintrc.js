/**
 * @auth: iiCoding
 * @time: 2023/3/2
 * @func:
 * @params:
 * @return:
 * @updateTime:
 * */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  rules: {
    // 同步需要关闭 / 开启 prettier
    'prettier/prettier': 'error',
    'react/require-default-props': 'off',
    'import/order': 'error',
    'no-console': 'off',
    'no-debugger': 'off',
    // 通常和linux系统会冲突。 允许windows系统下使用CRLF换行符.
    'linebreak-style': [0, 'error', 'windows'],
    // esLint 代码检查通常只适用于js文件，所以需要在扩展中配置需要检查的文件类型
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    'react/destructuring-assignment': 'off', // 解构赋值
    'react/react-in-jsx-scope': 'off',
    // 接下来这两行 是为了解决 React17版本 不需要引入React的特性，
    // 但是 再create-react-app 脚手架中的核心包： react-script 中未解决此问题，所以配合esLint会报错的问题，
    // 参考地址：https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
    'no-use-before-define': 'off',
    'react/no-unused-prop-types': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    // 引入文件可以省略文件后缀，比如 .js  .jsx  .ts  .tsx
    'import/extensions': [
      0,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never',
      },
    ],
    // 关闭ts每个函数都要显式声明返回值，
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 以下两项 是关闭 jsx 元素上的 a11y规则的静态AST检查 将来如果出现jsx-a11y 的问题 都可以在此处添加关闭规则
    // 允许非button只绑定click事件
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    // 允许a标签作为非锚点使用
    'jsx-a11y/anchor-is-valid': 'off',
    // 允许...扩展props
    'react/jsx-props-no-spreading': 'off',
    // https://github.com/facebook/create-react-app/pull/7179  ts有验证 无需eslint再来验证
    'no-undef': 'off',

    // 在es module中 使用require
    '@typescript-eslint/no-var-requires': 'off',

    // 关闭不能使用普通函数
    'prefer-arrow-callback': 'off',

    // tsx 中不用写 prop-types
    'react/prop-types': 'off',
    // 适配ts 三斜线指令 https://cn.eslint.org/docs/4.0.0/rules/spaced-comment
    // 三斜线指令详情：https://blog.csdn.net/weixin_43720095/article/details/112603722
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    // 关闭interface为空的警告 比如 interface IProps {} 会出现警告
    '@typescript-eslint/no-empty-interface': 'off',
    // 当一个文件，没有多个导出时 会提示用默认导出，事实上，我们可能会export const 多个
    // 但第一个使用的时候，会报错，所以关掉
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    // 关闭在Ts中写泛型，但没有使用的报错，
    '@typescript-eslint/no-unused-vars': 'off',
    // 关闭 写any 报错
    '@typescript-eslint/no-explicit-any': 'off',
    // 关闭 不能直接修改函数传进来的参数 比如我们请求返回的data对象，
    // 如果我们直接修改会报错: data.timer = new Date() --- 这样会报错，
    // 需要我们备份一下: const breakUpVar = data; breakUpVar = new Date();
    'no-param-reassign': 'off',
    // warning: Unexpected unnamed function (func-names)
    // 看到这个提示基本是就是说你的函数不能是匿名函数，最好可以起一个名字，然后你增加一个函数名称就好了
    // 但通常我们 有时候就需要一个匿名函数，所以关掉。
    'func-names': 'off',
    // 当我们使用Promise、reject一个错误除去的时候：Promise.reject('请先登录');
    // 但是规范是不允许的，需要我们这样做；Promise.reject(new Error('请先登录'));
    // 但大家都写习惯了，
    'prefer-promise-reject-errors': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/no-unescaped-entities': 'off',
    'no-plusplus': 'off',
    // 关闭hooks的deps校验
    'import/no-extraneous-dependencies': 'off',
    // 期待箭头函数有返回值
    'no-else-return': 'off',
    // 关闭异步函数必须返回值
    'consistent-return': 'off',
    'no-useless-escape': 'off',
    // 允许嵌套三元表达式
    'no-nested-ternary': 'off',
    // 允许使用for of
    'no-restricted-syntax': 'off',
    // 允许在循环中使用 await
    'no-await-in-loop': 'off',
    'no-unused-expressions': 'off',
    'no-loop-func': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-bitwise': 'off',
    // ts 有时候需要写函数重载 所以需要关掉
    'no-redeclare': 'off',
    'react/no-unknown-property': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    camelcase: 'off',
    'no-empty': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // https://www.cnblogs.com/UnfetteredMan/archive/2022/09/30/16745415.html
    // 'react/function-component-definition': [
    //   2,
    //   { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    // ],
    'react/function-component-definition': 'off',
    'class-methods-use-this': 'off',
    'no-continue': 'off',
  },
  // 有这么一种情况，就是在Ts中，eslint 有时候不能解析某个模块的导出， 导致报警告，
  // 所以需要在settings 中配合 eslint-import-resolver-typescript包，来解决这个问题
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
      typescript: {
        project: './tsconfig.json',
      },
      alias: [['@/*', './src/*']],
    },
  },
  globals: {
    window: true,
  },
};
