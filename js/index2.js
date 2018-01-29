var inv = {
	init:function(){
		inv.bind();
	},
	bind:function(){
		console.log('进来了')
		if(inv.getUrlParams("name")){
			var name2 = inv.getUrlParams("name");
			console.log(name2);
			$('#name2').val(name2);
		}
		if(inv.getUrlParams("password")){
			var password2 = inv.getUrlParams("password");
			console.log(password2);
			$('#password2').val(password2);
		}
		if(inv.getUrlParams("mobile")){
			var mobile2 = inv.getUrlParams("mobile");
			console.log(mobile2);
			$('#phone2').val(mobile2);
		}
		
	},
	getCookie:function(name){
		var strCookie = document.cookie;
		var arrCookie = strCookie.split(';');
		for(var i=0;i<arrCookie.length;i++){
			var arr = arrCookie[i].split("=");
			if($.trim(arr[0]) == name)
			   return $.trim(arr[1]);
		}
	},
	getUrlParams:function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
	    var r = window.location.search.substr(1).match(reg);  
	    if (r != null) return unescape(r[2]); return null;  
	}
	
}
$(function(){
	inv.init();
})