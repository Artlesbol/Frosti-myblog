/**
 * ESLint 配置文件。
 * 
 * 该配置扩展了 "@antfu/eslint-config" 包，并自定义了几个样式和格式规则。
 * 
 * @formatters {boolean} - 启用或禁用格式化程序。
 * @stylistic {object} - 样式规则配置。
 * @stylistic.quotes {string} - 将引号样式设置为双引号。
 * @stylistic.semi {boolean} - 强制使用分号。
 * @rules {object} - 自定义 ESLint 规则。
 * @rules["antfu/top-level-function"] {string} - 禁用 "antfu/top-level-function" 规则。
 * @rules["arrow-parens"] {Array} - 如果箭头函数没有括号则发出警告。
 */
import antfu from "@antfu/eslint-config";


export default antfu({
  formatters: true,
  stylistic: {
    quotes: "double", // As the Chinese teacher said, single quotes should be inside double quotes.(
    semi: true,
  },
  rules: {
    // Ignore the antfu/top-level-function rule
    "antfu/top-level-function": "off",
    "arrow-parens": ["warn", "always"],
  },
});
