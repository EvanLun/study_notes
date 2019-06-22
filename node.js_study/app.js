const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const url_mo = require("url");

var server = http.createServer(function(req,res){
    //res.write往前台发东西
    //res.end结束请求
    //fs让服务器读取磁盘里面的文件直接放在浏览器里面
    //fs.readFile("url",function(err,data){})读取文件 相对于app.js的地址
    //fs.writeFile("url","data",function(err){})写入文件url是写入的位置，
    //get获取前端过来的数据
    ///aaa?name=12&pass=12 --->req.url
    //这块学习了一个如何将querystring数据用querystring模块分离成url和传输的json对象
    //详情请看querystring.js语法
    //==================get请求
    // var obj = url_mo.parse(req.url,true);
    // console.log(obj.query);
    // console.log(obj.pathname);
    // res.write("aaaa");
    // res.end();
    //==================post请求
    //post传输因为很大所以要切段传输
       var str = "";
       req.on('data' , function(data){
            str += data;
       });
       //数据全部到达的时候
       req.on('end' , function(){
            console.log(querystring.parse(str));
       });
});

server.listen(3000);
console.log("程序已经运行在了3000端口");