const express = require("express");
var app = express();


app.get("/" , function(req,res){
    console.log(req.query);
    console.log(typeof(req.query));
    var user = req.query.user;
    var pass = req.query.pass;
    console.log(user);
    console.log(pass);
    console.log(typeof(user));
    console.log(typeof(pass));
});

app.listen(3000);
console.log("程序已经运行在3000端口");