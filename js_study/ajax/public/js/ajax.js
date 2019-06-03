function ajax(option) { //传入的是对象，因为对象可以确保传入的参数不按照顺序和数量的限制
	var ajax = new XMLHttpRequest();
	//第一步创建ajax的对象 这块如果想兼容IE6要写兼容（容错兼容）
	option.type = option.type || 'get';
    //第二步 获取数据接口
	//2.0 接口地址处理
	if(!option.url || option.url == '') {
		throw new Error('接口地址不能为空');
	}
	//2.1如果不设置请求方式，默认get请求
	//2.2 git请求的处理
	//git请求的方式是将数据名称和数据值用=连接，多个的话使用&连接然后把数据
    //放在url?后面传给指定的页面
	if(option.data && option.type == 'get') {
		if(typeof option.data == 'object' && !Array.isArray(option.data)) {
			option.url += '?' + objtostring(option.data);
		} else {
			option.url += '?' + option.data;
		}
	}
	//4.是否异步。
	if(option.async == false) {
		option.async = false
	} else {
		option.async = true
	}
    //第三步发送请求+2.3 post请求的处理
	ajax.open(option.type, option.url, option.async);
	//post传输数据
	if(option.data && option.type == 'post') { //post
		ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		if(typeof option.data == 'object' && !Array.isArray(option.data)) {
			ajax.send(objtostring(option.data));
		} else {
			ajax.send(option.data);
		}
	} else {
		ajax.send();
	}

	if(option.async == false) { //同步
		option.success && option.success(ajax.responseText); //将获取的数据以实参的形式传递出来		
	} else { //异步
		ajax.onreadystatechange = function() {
			if(ajax.readyState == 4) { //send完成，请求数据。
				if(ajax.status == 200) { //请求成功获取数据
				//解析过程分为五步 每一步是一个数据readState0(初始话)1(请求建立)
				//2发送完成3请求处理中4响应已经完成
				//send完成 请求数据
				//返回的状态码
					option.success && option.success(ajax.responseText); //将获取的数据以实参的形式传递出来
				} else { //请求失败
					//还有另一种格式ajax.responseXML:获取XML格式的接口返回的数据
					option.error && option.error(ajax.status);
				}

			}
		}
	}
	//2.4因为url后边要传入字符串因此要做对象转字符串函数
	function objtostring(obj){
		var arr=[];
		for(var attr in obj){
			arr.push(attr+'='+obj[attr]);
		}
		return arr.join('&');
	}
}