const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use('/',function(req,res){
    req.secret="qweqweqw";
    res.cookie('user','lisi',{signed: true});//是否需要密钥
    console.log("没有签名",req.signedCookies);
    console.log("有签名",req.cookies);
    res.send("ok");
    res.end();


});
app.listen(8080);
console.log("程序运营在8080端口");