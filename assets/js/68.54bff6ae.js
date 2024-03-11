(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{340:function(s,t,a){"use strict";a.r(t);var e=a(13),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-基本概念"}},[s._v("#")]),s._v(" MySQL 基本概念")]),s._v(" "),t("p",[s._v("数据库(database)是用来"),t("strong",[s._v("组织、存储和管理")]),s._v("数据的仓库。")]),s._v(" "),t("p",[t("strong",[s._v("DataType 数据类型")])]),s._v(" "),t("p",[s._v("① "),t("strong",[s._v("int")]),s._v(" 证书"),t("br"),s._v("\n② "),t("strong",[s._v("varchar(len)")]),s._v(" 字符串"),t("br"),s._v("\n③ "),t("strong",[s._v("tinyint(1)")]),s._v(" 布尔值")]),s._v(" "),t("p",[t("strong",[s._v("字段的特殊标识")])]),s._v(" "),t("p",[s._v("① PK (Primary Key) "),t("strong",[s._v("主键、唯一标识")]),t("br"),s._v("\n② NN (Not Null) "),t("strong",[s._v("值不允许为空")]),t("br"),s._v("\n③ UQ (Unique) "),t("strong",[s._v("值唯一")]),t("br"),s._v("\n④ AI (Auto Increment) "),t("strong",[s._v("值自动增长")])]),s._v(" "),t("h2",{attrs:{id:"_1-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-sql"}},[s._v("#")]),s._v(" 1 SQL")]),s._v(" "),t("p",[s._v("SQL(英文全称: Structured Query Language)是"),t("code",[s._v("结构化查询语言")]),s._v("，专门用来"),t("strong",[s._v("访问和处理数据库")]),s._v("的编程语言。能够让我们"),t("code",[s._v("以编程的形式，操作数据库里面的数据")]),s._v("。")]),s._v(" "),t("p",[s._v("三个关键点:"),t("br"),s._v("\n① SQL 是一门"),t("code",[s._v("数据库编程语言")]),t("br"),s._v("\n② 使用 SQL 语言编写出来的代码，叫做 "),t("code",[s._v("SQL 语句")]),t("br"),s._v("\n③ SQL 语言"),t("code",[s._v("只能在关系型数据库中使用")]),s._v("（例如 MySQL、Oracle、SQL Server)。非关系型数据库（例如 Mongodb)不支持 SQL 语言")]),s._v(" "),t("h3",{attrs:{id:"_1-1-select-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-select-语句"}},[s._v("#")]),s._v(" 1.1 SELECT 语句")]),s._v(" "),t("p",[s._v("SELECT 语句用于从表中"),t("strong",[s._v("查询数据")]),s._v("。执行的结果被存储在一个"),t("strong",[s._v("结果表")]),s._v("中（称为"),t("code",[s._v("结果集")]),s._v(")")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 这是注释")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 从 FROM指定的【表中】，查询出【所有的】数据。* 表示【所有列】")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表名称\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 从FROM指定的【表中】，查询出指定列名称(字段)的数据。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" 列名称 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("注意:SQL 语句中的关键字对大小写不敏感。SELECT 等效于 select，FROM 等效于 from。")]),s._v(" "),t("h3",{attrs:{id:"_1-2-insert-into-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-insert-into-语句"}},[s._v("#")]),s._v(" 1.2 INSERT INTO 语句")]),s._v(" "),t("p",[t("strong",[s._v("INSERT INTO")]),s._v("语句用于"),t("code",[s._v("向数据表中")]),t("strong",[s._v("插入新的数据行")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 向指定的表中，插入如下几列数据，列的值通过values ——指定")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 注意: 列和值要——对应，多个列和多个值之间，使用英文的逗号分隔")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("列"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，列"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("值"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，值"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_1-3-updata-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-updata-语句"}},[s._v("#")]),s._v(" 1.3 UPDATA 语句")]),s._v(" "),t("p",[t("code",[s._v("Update")]),s._v("语句用于"),t("strong",[s._v("修改表中的数据")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 1. 用 UPDATE 指定要更新哪个表中的数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 2. 用 SET 指定列对应的新值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 3. 用 WHERE 指定更新的条件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" 表名称 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" 列名称 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 新值 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 列名称 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 某值\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" 表名称 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" 列名称"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("新值"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("列名称"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("新值"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 列名称 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 某值\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_1-4-delete-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-delete-语句"}},[s._v("#")]),s._v(" 1.4 DELETE 语句")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 从指定的表中，根据 WHERE 条件，删除对应的数据行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表名称 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 列名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_1-5-where-子句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-where-子句"}},[s._v("#")]),s._v(" 1.5 WHERE 子句")]),s._v(" "),t("p",[s._v("WHERE 子句用于"),t("code",[s._v("限定选择的标准")]),s._v("。在"),t("strong",[s._v("SELECT、UPDATE、DELETE")]),s._v("语句中，皆可使用 WHERE 子句来限定选择的标准")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--查询语句中的 WHERE条件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" 列名称 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表名称 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 列 运算符 值\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--更新语句中的WHERE条件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" 表名称 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" 列"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("新值 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("wHERE")]),s._v(" 列 运算符 值\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 删除语句中的 WHERE条件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表名称 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 列 运算符 值\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"_1-6-可在-where-子句中使用的运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-可在-where-子句中使用的运算符"}},[s._v("#")]),s._v(" 1.6 可在 WHERE 子句中使用的运算符")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("操作符")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("=")]),s._v(" "),t("td",[s._v("等于")])]),s._v(" "),t("tr",[t("td",[s._v("<> 或 !=")]),s._v(" "),t("td",[s._v("不等于")])]),s._v(" "),t("tr",[t("td",[s._v(">")]),s._v(" "),t("td",[s._v("大于")])]),s._v(" "),t("tr",[t("td",[s._v("<")]),s._v(" "),t("td",[s._v("小于")])]),s._v(" "),t("tr",[t("td",[s._v(">=")]),s._v(" "),t("td",[s._v("大于等于")])]),s._v(" "),t("tr",[t("td",[s._v("<=")]),s._v(" "),t("td",[s._v("小于等于")])]),s._v(" "),t("tr",[t("td",[s._v("BETWEEN")]),s._v(" "),t("td",[s._v("在某个范围内")])]),s._v(" "),t("tr",[t("td",[s._v("LIKE")]),s._v(" "),t("td",[s._v("搜索某种模式")])])])]),s._v(" "),t("h3",{attrs:{id:"_1-7-and-和-or-运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-and-和-or-运算符"}},[s._v("#")]),s._v(" 1.7 AND 和 OR 运算符")]),s._v(" "),t("p",[s._v("AND 和 OR 可在 "),t("code",[s._v("WHERE 子语句")]),s._v("中"),t("code",[s._v("把两个或多个条件结合起来")]),s._v("。"),t("br"),s._v("\nAND 表示"),t("strong",[s._v("必须同时满足多个条件")]),s._v("，相当于 JavaScript 中的&&运算符，例如 if (a !== 10 && a !== 20)\nOR 表示"),t("strong",[s._v("只要满足任意一个条件")]),s._v("即可，相当于 JavaScript 中的运算符，例如 if(a !== 10| la !== 20)")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询显示所有状态为0并且id小于等于3的用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" users "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("img",{attrs:{src:s.$withBase("/mysql/mysql_1.png")}}),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 使用OR来显示所有状态为1 或username为 zs的用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" users "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zs'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("img",{attrs:{src:s.$withBase("/mysql/mysql_2.png")}}),s._v(" "),t("h3",{attrs:{id:"_1-9-order-by-子句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-order-by-子句"}},[s._v("#")]),s._v(" 1.9 ORDER BY 子句")]),s._v(" "),t("p",[s._v("ORDER BY 语句用于"),t("code",[s._v("根据指定的列")]),t("strong",[s._v("对结果集进行排序")]),s._v("。"),t("br"),s._v("\nORDER BY 语句"),t("strong",[s._v("默认")]),s._v("按照"),t("strong",[s._v("升序")]),s._v("对记录进行排序,关键字"),t("strong",[s._v("ASC")]),s._v("。"),t("br"),s._v("\n如果您希望按照"),t("strong",[s._v("降序")]),s._v("对记录进行排序，可以使用"),t("strong",[s._v("DESC")]),s._v("关键字。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 对users表中的数据 按照 status 字段进行升序排序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" users "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" users "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asc")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("img",{attrs:{src:s.$withBase("/mysql/mysql_3.png")}}),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 对users表中的数据 按照 id 字段进行降序排序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" users "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("img",{attrs:{src:s.$withBase("/mysql/mysql_4.png")}}),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("ORDER BY 多重排序")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 对users标中的数据，先按照status进行降序排序，再按照username字母的顺序进行升序排序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" users "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("username "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asc")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("img",{attrs:{src:s.$withBase("/mysql/mysql_5.png")}}),s._v(" "),t("h3",{attrs:{id:"_1-10-count-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-count-函数"}},[s._v("#")]),s._v(" 1.10 COUNT(*)函数")]),s._v(" "),t("p",[s._v("COUNT(*)函数用于返回查询结果的"),t("strong",[s._v("总数据条数")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_1-11-使用-as-为列设置别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-使用-as-为列设置别名"}},[s._v("#")]),s._v(" 1.11 使用 AS 为列设置别名")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" uname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" pwd "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" users\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("img",{attrs:{src:s.$withBase("/mysql/mysql_6.png")}})])}),[],!1,null,null,null);t.default=r.exports}}]);