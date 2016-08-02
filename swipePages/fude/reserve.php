<?php
$conn = mysql_connect("localhost","root","zwtchina123") or die("数据库链接错误");
mysql_select_db("fude", $conn);
mysql_query("set names 'utf8'"); 

$aaa = 0;

if($_POST['tijiao']){ 
$sj = time();
$sql="insert into message (id,user,tel,content,lastdate) values ('','{$_POST[user]}','{$_POST[tel]}','{$_POST[content]}',$sj)";

mysql_query($sql); 
$aaa = 1;
}
?> 


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>辅德教育-预约试听</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
<link rel="stylesheet" href="static/css/mobi.css">
<script src="http://libs.useso.com/js/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script type="text/javascript" src="static/js/weixin.js"></script>
<style>
*{color: #fff;}
#main{width:100%;height:100%;background: url(static/img/01-bg.jpg) no-repeat center;background-size: 100% 100%;}
form.reform{display: block;position: relative;width:80%;margin:1em auto;top:0;left:0;background:none;box-shadow: none;border-radius: none;}
form.reform input.text{padding:0 0 0 0.5em;width:100%;border:1px solid #b2a187;-moz-box-shadow:-1px -1px 1px #d1bd9c inset;-webkit-box-shadow:-1px -1px 1px #d1bd9c inset;box-shadow:-1px -1px 1px #d1bd9c inset;height: 2em;line-height: 2em;border-radius:3px;background: #ffe5c0;margin:1em 0 0 -0.4em;font-size: 1.2em;color: #a9742d}
form.reform textarea{width:100%;border:1px solid #b2a187;-moz-box-shadow:-1px -1px 1px #d1bd9c inset;-webkit-box-shadow:-1px -1px 1px #d1bd9c inset;box-shadow:-1px -1px 1px #d1bd9c inset;border-radius:3px;background: #ffe5c0;margin:1em 0 0 -0.4em;font-size: 1.2em;padding:0.5em 0 0 0.5em;height: 7em;color: #a9742d}
.tjxx{width:66%;height:2em;line-height:2em;font-size:1.4em;color: #f4d191;background:#024708;text-align: center;display:block;margin:1em auto;border: none;}
</style>
</head>
<body>
<div id="main">
	<div class="top1 map">
		<img class="reimg" src="static/img/re.png">
		<form class="reform" method="post" onSubmit="return checkform(this);">
			<input name="user" class="text" type="text" placeholder="姓名" id="user">
			<input name="tel" class="text" type="text" placeholder="手机" id="phone">
			<textarea name="content" placeholder="试听及课程要求（可选填）" id="content"></textarea>
			<input type="submit" class="tjxx" value="提交信息" name="tijiao">
		</form>
	</div>
	<div class="menu">
		<a href="tel:051082709078" class="ma1"></a>
		<a href="reserve.php" class="ma2"></a>
		<a href="#" class="ma3"></a>
	</div>
</div>
<script type="text/javascript">
	$(document).ready(function() {
		var dh = $(window).height();
	    //alert(dh);
	    if(dh<490){
	    	$(".map").css("padding","3%");
	    	$(".reimg").css("padding","0");
	    	$(".reform").css("margin-top","0");
	    	$(".text").css("margin-top","0.5em");
	    	$("textarea").css("margin-top","0.5em");
	    }
	});
	function checkform(){
    $(".errortips").hide();
    var uvalue = $("#user").val();
    var pvalue = $("#phone").val();
    var cvalue = $("#content").val();
    $(".tjxx").val("提交中……").css("background","#1a551f");
    //alert(pvalue.length);
    //alert(uvalue+","+evalue+","+pvalue+","+cvalue);
    if (uvalue=="") {
        alert("请输入您的姓名");
        $(".tjxx").val("提交信息").css("background","#024708");
        $("#user").focus();
        return false;
    }
    else if(!(/^1[3|5][0-9]\d{4,8}$/.test(pvalue)) || pvalue.length!=11){ 
        alert("请输入您正确手机号");
        $(".tjxx").val("提交信息").css("background","#024708");
        $("#phone").focus();
        return false;
    }
    else{
		return true;  //返回真值
	}
}
</script>
<?php
if($aaa){
?>	
<script type="text/javascript">
	alert("提交成功！");
	top.location.href="index.html"
</script>


<?php	
}
?>
</body>
</html>