const url_mo = require("url");
//加ture是进行解析数据为json不加true将不解析
var obj = url_mo.parse("http://localhost:3000/aaa?name=12&pass=12",true);
console.log(obj);
console.log(typeof(obj));