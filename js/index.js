var inv = {
	codeBtn:$("#getcode"),
	CodeNum:60,
	init:function(){
		inv.load();
		inv.bind();
	},
	bind:function(){
		$.unblockUI();
		//姓名校验
		$('#name').bind('focus',function(){
			inv.showerror('hide');
		}).bind('blur',function(){
			inv.checkName();
		})
	},
	submitForm:function(){
		
	},
	checkName:function(){
		inv.showerror('hide');
		var nameVal = $('#name').val();
		if(!nameVal){
			inv.showerror('请输入您的姓名');
			return false;
		}else if(!(/(^[\u4e00-\u9fa5\s]{2}|[a-zA-Z]{4})([\u4e00-\u9fa5\s]{0,18}|[. ]{0,36}|[. ]{0,36}|[a-zA-Z]{0,36})?$/.test(nameVal))){
			inv.showerror('请输入正确的姓名');
			return false;
		}else if(nameVal == '不详' || nameVal == '不知道' || nameVal == '未知' || nameVal == '姓名' || nameVal.indexOf('测试') > -1 || nameVal.indexOf('test') > -1){
			inv.showerror('请输入正确的姓名');
			return false;
		}else{
			inv.showerror('hide');
			return true;
		}
	},
	checkPassword:function(){
		inv.showerror('hide');
		var passwordVal = $('#password').val();
		if(!passwordVal){
			inv.showerror('请输入您的密码');
			return false;		
		}else if(passwordVal && !(/^(\w){6,20}$/.test(passwordVal))){
			inv.showerror('密码不合规范');
			return false;
		}else{
			inv.showerror('hide');
			return true;
		}
	},
	checkMobile:function(){
		
	},
	checkBox:function(){
		var boxObj = $('.checkbox').find('input');
		if(!boxObj.prop("checked")){
			inv.showerror('请勾选条款');
			return false;
		}else{
			inv.showerror('hide');
			return true;
		}
	},
	inputSmsCodeValidator:function(){
		var smsCode = $('#code').val();
		if(!smsCode){
			inv.showerror('请输入验证码');
			return false;
		}else if(smsCode.length != 6){
			inv.showerror('验证码不合规范')
		}else if(!/^\d{6}$/.test(smsCode)){
			inv.showerror('验证码不合规范');
			return false;
		}
		return true;
	},
	checkForm:function(){
		if(!inv.checkName()){
			return false;
		}
		if(!inv.checkPassword()){
			return false;
		}
		if(!inv.checkMobile()){
			return false;
		}
		if(!inv.inputSmsCodeValidator()){
			return false;
		}
		if(!inv.checkBox()){
			return false;
		}
		return true;
	},
	showerror:function(message,duration){
		var toast = $('#toast');
		clearTimeout(toast.timer);
		if(message && message !== 'hide'){
			toast.find('span').html(message);
		}else if(message && message == 'hide'){
			toast.hide();
			return;
		}
		toast.show();
		toast.timer = setTimeout(function(){
			toast.hide();
		},duration || 2000);
	},
	getUrlParams:function(){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
        var r = window.location.search.substr(1).match(reg);  
        if (r != null) return unescape(r[2]); return null;  
	},
	load:function(){
		$.blockUI({
			message:"<img src='img/load.gif'/>",
			css:{
				top:($(window).height()-50)/2+'px',
				left:($(window).width()-50)/2+'px',
				width:'50px',
				height:'50px',
				border:'none',
				background:'none'
			},
			overlayCSS:{
				backgroundColor:'#fff'
			}
		})
	},
	dateInit:function(){
		
	},
	setCookie:function(name,value,path){
		var d = new Date();
		d.setTime(d.setTime()+(30*60*1000));
		expires = d.toGMTString();
		value = escape(value);
		document.cookie = name + "="+value+";"+(expires !=-1 ? "expirses=" + expires + ";" : "")
		+(path ? "path=" + path : "");
	},
	getCookie:function(){
		var strCookie = document.cookie;
		var arrCookie = strCookie.split(';');
		
		for(var i=0;i<arrCookie.length;i++){
			var arr = arrCookie[i].split("=");
			if($.trim(arr[0]) == name)
			   return $.trim(arr[1]);
		}
	},
	GetAgeByBirthday:function(){
		
	},
	parseDate:function(){
		
	},
	obtainCode:function(){
		var _this = this;
		_this.codeBtn.data('obtaining',true);
		_this.codeBtn.val('60s后重发');
		_this.codeTimer = setInterval(function(){
			_this.CodeNum -=1;
			if(_this.CodeNum === 0){
				clearInterval(_this.codeTimer);
				_this.codeBtn.val('获取验证码');
				_this.codeBtn.data('obtaining',false);
				_this.CodeNum = 60;
				return;
			}
			_this.codeBtn.val(_this.CodeNum+'s后重发');
		},1000);
	}
};
$(function(){
	inv.init();
})
