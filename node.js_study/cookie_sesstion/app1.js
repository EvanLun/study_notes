const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.use(cookieParser());
app.use(cookieSession({
    keys : ["aaa","ccc","sss"]
}));

app.use('/',function(req,res){
    // res.clearCookie('user');//删除cookie
    if(req.session['count'] == null){
        req.session['count'] = 1;
    }else{
        req.session['count']++;
    }
    console.log(req.session['count']);
    res.send("ok");
    res.end();
});
app.listen(8080);
console.log("程序运营在8080端口");