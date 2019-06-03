//1.创建ajax对象
//容错try catch finally
try {
	//先走这个有错走catch
	var ajax = new XMLHttpRequest();
}catch(e) {//e:错误信息
 	//try没有错这个不执行
 	var ajax = new ActiveXObject("Msxml2.XMLHTTP");
}finally{
	console.log("ajax对象创建完成");
}
//2.获取数据接口 ajax的open方法(1.设置请求类型，2.打开数据接口，3.是否异步)
//可以用此方法传输一些数据和安全无关的数据，可以做跨域
//get 利用这个请求传送一些无关安全的重要数据，json跨域(长度有限64不安全)
//post 安全 长度较长麻烦
//同步浏览器会警告
//数据接口要是一个完整的url 如http://www.baidu.com:80/index.html
ajax.open('get','url',true);
//3.ajax的send方法解析发送数据
//解析过程分为五步 每一步是一个数据readState0(初始话)1(请求建立)
//2发送完成3请求处理中4响应已经完成
ajax.send();
//监听上面的状态码是否完成
ajax.onreadystatechange = function(){
	if(ajax.readyState == 4){
		if(ajax.status == 200){
			console.log(ajax.responseText);
		}else{
			console.log('接口地址有误' + ajax.status);
		}
		//send完成了请求数据
		//ajax.responseText:获取接口返回的数据--字符串
		//ajax.responseXML:获取XML格式的接口返回的数据
	}
}
//5.git请求的方式是将数据名称和数据值用=连接，多个的话使用&连接然后把数据
//放在url?后面传给指定的页面