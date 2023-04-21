/**
 * @auth: iiCoding
 * @time: 2023/3/2
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
module.exports = {
  "arrowParens": "always", // avoid | always (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号，always 总是有括号
  "bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  "eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
  "disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
  "endOfLine": "auto", // 结尾是 \n \r \n\r auto
  "htmlWhitespaceSensitivity": "ignore", // "<css|strict|ignore>"
  "ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  // "insertPragma": true,
  "jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
  "jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
  "jsBracketSameLine": true, // 在jsx中把'>' 是否单独放一行
  "overrides": [
    {
      "files": ".prettierrc.js",
      "options": {
        "parser": "js"
      }
    }
  ],
  // "parser": "babel", // 格式化的解析器，默认是babylon
  "printWidth": 110, //一行的字符数，如果超过会进行换行，默认为80
  // 对象key是否使用引号 <as-needed|consistent|preserve>
  // as-needed 仅在需要的时候使用
  // consistent 有一个属性需要引号，就都需要引号
  // preserve 保留用户输入的情况
  // "quoteProps": 'preserve',
  "proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  "singleQuote": true, // 使用单引号代替双引号
  "semi": true, // 句尾添加分号
  "trailingComma": "all", // <es5|none|all> 在对象或数组最后一个元素后面是否加逗号
  "useTabs": false, // 缩进不使用tab，使用空
  "requireConfig": false, // Require a 'prettierconfig' to format prettier
  "stylelintIntegration": true, //不让prettier使用stylelint的代码格式进行校验
  "tabWidth": 2, // 缩进字节数
  "tslintIntegration": false // 不让prettier使用tslint的代码
};
