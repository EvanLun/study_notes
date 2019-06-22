const querystring = require("querystring");

var json = querystring.parse("aaa?name=12&pass=12");
console.log(typeof(json));
console.log(json);

// var GET = {};
// if(req.url.indexOf('?') != -1){
//     var arr = req.url.split('?');
//     var url = arr[0];
//     GET = querystring.parse(arr[1]); 
// }else {
//     url = '/';
//     GET = querystring.parse(req.url);
// }
// console.log(GET);
// console.log(url);