var express = require("express");
var mysql = require("mysql");
var app = express();
app.get("/login",function(req,res){    //    获取登录传过来的值
    //    创建数据库连接
    var connection=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"user"
    });
    //    连接数据库
    connection.connect();
    var sql="select * from users where username='"+req.query.username+"' and password='"+req.query.password+"'";    //    在数据库里面查询用户名跟密码
    console.log(sql);
    connection.query(sql,function(err,result){    //    执行sql语句，并返回结果
        if(err){
            res.end("登录失败");    //    数据库错误
            console.log(err);
        }
        if(result.length==0){    
            res.end("用户名密码不正确");    //    数据库里面没找到配对的内容返回参数
        }else{
            res.end("登陆成功");    //返回登录成功
        }
    })
    connection.end();    //    关闭数据库
});
//静态资源配置路由
app.use(express.static("public"));
app.listen(3000);
console.log("程序已经在3000端口");