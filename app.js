const express = require('express');
const { join } = require('path');
const path = require('path');
const app = express();
const port = 8080;
const userRoute = require("./route/user");

// set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use("/users", userRoute);
app.get('/', function(req, res){
	res.send("<h2>This is my first app</h2>");
})
app.listen(port, ()=>{
    console.log("Your app is running on " + port);
})

module.exports = app;