







		
		$("#button").click(function(){
			 
		alert("aaaaa")
		return
			 login();

		
		function login(){
			var username = $("#username").val();
			var password =  $("#userpwd").val();
		$.ajax({
		dataType:'json',
		type:'POST',
		data:{username:username,password:password},
		async:false,
		url:'http://192.168.1.101:8083/login/login',
		success:function(data) {
					if (data.errCode == 0)
					{
					alert("登陆成功!");
}
					else{	
						if (data.errMsg){
						alert(data.errMsg);
						}
					}			


		}
		});
	}
});