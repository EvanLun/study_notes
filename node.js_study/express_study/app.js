const express = require("express");
var app = express();
const expressStatic = require("express-static"); 

app.use("/login" , function(req,res){
   console.log(req.query);
   res.send("ok");
   res.end();
})
app.use(expressStatic("./www"));
app.listen(3000);
console.log("程序已经运行在3000端口");