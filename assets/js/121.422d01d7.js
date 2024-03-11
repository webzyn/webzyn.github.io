(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{394:function(s,t,a){"use strict";a.r(t);var e=a(13),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("h2",{attrs:{id:"polyfill-和-babel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#polyfill-和-babel"}},[s._v("#")]),s._v(" polyfill 和 babel")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Babel 主要用于处理 JavaScript 语法的兼容性问题，目标是"),t("code",[s._v("将新版本的 ECMAScript 代码转换为向后兼容的代码")])])]),s._v(" "),t("li",[t("p",[s._v("Polyfill 主要用于提供缺失的功能或 API 支持，目标是"),t("code",[s._v("填充环境的功能缺陷")])])]),s._v(" "),t("li",[t("p",[s._v("实际项目中，"),t("code",[s._v("Babel")]),s._v(" 处理语法转换，而 "),t("code",[s._v("Polyfill")]),s._v(" 用于提供缺失的功能支持，以确保应用在各种环境中都能够正常运行")])])]),s._v(" "),t("h3",{attrs:{id:"core-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-js"}},[s._v("#")]),s._v(" core-js")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("core-js")]),s._v("通常用作一个 polyfill 提供商")])]),s._v(" "),t("h2",{attrs:{id:"eslint-相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslint-相关"}},[s._v("#")]),s._v(" eslint 相关")]),s._v(" "),t("h3",{attrs:{id:"babeloptions-与-babel配置文件区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babeloptions-与-babel配置文件区别"}},[s._v("#")]),s._v(" babelOptions 与 babel配置文件区别")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("babelOptions")]),s._v(" 用于在 ESLint 运行过程中配置 Babel 的一些行为，而不是直接指定 Babel 的配置文件。")]),s._v(" "),t("li",[s._v("Babel 配置文件（.babelrc 或 babel.config.js）是由 Babel 直接使用的配置文件，它用于"),t("code",[s._v("指定 Babel 的详细配置")])])]),s._v(" "),t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eslintrc.js")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("parserOptions")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("babelOptions")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"extends、parser、parseroptions区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extends、parser、parseroptions区别"}},[s._v("#")]),s._v(" extends、parser、parserOptions区别")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("extends")]),s._v(" 用于引入已有的 ESLint 配置，这样不必从头开始配置所有规则")]),s._v(" "),t("li",[t("code",[s._v("parser")]),s._v(" 用于指定用于解析 JavaScript 代码的解析器")]),s._v(" "),t("li",[t("code",[s._v("parserOptions")]),s._v(" 用于配置解析器的选项")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eslintrc.js")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint:recommended"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("parser")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/eslint-parser"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("parserOptions")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);