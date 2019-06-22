const http = require("http");
const mod = require("./1");
//const mod = require("./1.js");
//在这里.js可以省略 也可以直接将这个文件放在node_modules文件里面

var server = http.createServer(function(req,res){
    //模块化 1.引入模块 require 2.module 模块的意思 3.exports输出的意思
    console.log(mod.sum(15));
    res.end("ok");
});

server.listen(3000);
console.log("程序已经运行在了3000端口");