const variable = require("./var_export");
const expression = require("./expr_export");
const add = require("./fun_export_without_define");
const sub = require("./fun_export_after_define");
const student = require("./class_export_while_defining");
let StudentDetails = require("./class_export_while_defining");
let Car = require("./class_export_after_defining");
const {name, sirname} = require("./named_export_multi_var");
const {mult, div} =require("./name_export_function");
var {Flower, Pet} = require("./named_export_class");

console.log("variable : " ,variable);
console.log("Expression : ", expression);
console.log("add : ", add(7, 4));
console.log("sub : ", sub(4, 11));

StudentDetails = new StudentDetails("Siddharth", 21052029);
console.log(StudentDetails);

Car = new Car("Audi", 10000000);
console.log(Car);

console.log(name, sirname);
console.log(mult(10, 20));
console.log(div(10,20));

Flower = new Flower("Rose");
console.log(Flower);

Pet = new Pet("Dog");
console.log(Pet);