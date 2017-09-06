$(document).ready(
	function(){
		var phone_code = "null";
		
		// 发送验证码
		$("#sendCode").click(function(){
			if(checkSubmitMobil()){
				phone_code = MathRand();
				htmlobj=$.ajax({url:"/admin_message/php_lib/post_action.php?action=sendMsg&phone=" + $("#phone").val() + "&phone_code=" + phone_code, async:false});
			}
		});
		

		
	}	
)

// 验证是否为手机号码
function checkSubmitMobil(){ 
	if($("#phone").val()==""){ 
		alert("手机号码不能为空！"); 
		$("#phone").focus(); 
		return false; 
	}	
	if(!$("#phone").val().match(/^1[3|4|5|7|8][0-9]\d{4,8}$/)){ 
		alert("手机号码格式不正确！请重新输入！"); 
		$("#phone").focus(); 
		return false; 
	} 
	return true; 
}

// 生成六位随机数字
function MathRand(){ 
	var Num=""; 
	for(var i=0;i<6;i++){ 
		Num+=Math.floor(Math.random()*10); 
	} 
	return Num;
} 
