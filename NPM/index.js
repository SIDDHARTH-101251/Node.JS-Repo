const path = require("path");

const filePath = path.join("users", "ravi", "notes.txt");

console.log(filePath);

const { addDays } = require("date-fns/addDays");

const result = addDays(new Date(2021, 0, 11), 10);

console.log(result);