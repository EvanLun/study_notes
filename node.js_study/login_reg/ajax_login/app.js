const express = require('express');
var app = express();
const bodyParser=require('body-parser');
//get请求demo
// app.get('/', function (req, res){
//   console.log(req.query); //GET
//   res.send("1");
//   res.end();
// });
//post请求demo
app.use(bodyParser.urlencoded({
    extended: false,                 //扩展模式
    limit:    2*1024*1024           //限制-2M
}));

app.use('/', function (req, res){
    console.log(req.body); //POST
    console.log(typeof(req.body));
    res.send("1");
    res.end();

});
app.listen(3000);
console.log("程序运行在3000端口")