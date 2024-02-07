const variable = require("./var_export");
const expression = require("./expr_export");
const add = require("./fun_export_without_define");
const sub = require("./fun_export_after_define");

console.log("variable : " ,variable);
console.log("Expression : ", expression);
console.log("add : ", add(7, 4));
console.log("sub : ", sub(4, 11));