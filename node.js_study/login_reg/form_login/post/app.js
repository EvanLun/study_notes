const express = require("express");
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false,//扩展模式
    limit: 2*1024   //限制大小的
}));

app.post("/" , function(req,res){
    console.log(req.body);
    console.log(typeof(req.body));
    var user = req.body.user;
    var pass = req.body.pass;
    console.log(user);
    console.log(pass);
    console.log(typeof(user));
    console.log(typeof(pass));
     
});

app.listen(3000);
console.log("程序已经运行在3000端口");