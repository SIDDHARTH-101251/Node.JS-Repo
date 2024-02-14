const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hello Yash!!!");
});

app.get("/date", (request, response) => {
    let date = new Date();
    response.send(`Today's date is ${date}`);
});

app.listen(3000, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log("Server is listening on port 3000");
    }
});
