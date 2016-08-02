/*******************************
 * Copyright:智讯互动(www.zhixunhudong.com)
 * Author:Mr.Think
 * Description:基类
 *******************************/

KISSY.use('node,dom,event,io,cookie,gallery/simple-mask/1.0/,gallery/kissy-mscroller/1.3/index,gallery/simple-mask/1.0/,gallery/datalazyload/1.0.1/index,gallery/musicPlayer/2.0/index',function(S,Node,DOM,Event,IO,Cookie,Mask,KSMscroller,Mask,DataLazyload,MusicPlayer){
	var $=Node.all;

/* ---------- 预加载 ---------- */
	_PreLoadImg(['static/img/01-bg.jpg',
	'static/img/01-triangle.png',
	'static/img/02-bg.jpg',
	'static/img/02-triangle.png',
	'static/img/03-bg.jpg',
	'static/img/03-triangle.png',
	'static/img/04-bg.jpg',
	'static/img/04-triangle.png',
    'static/img/tips_up.png',
	],function(){  
		$('.loading').remove();
		$('.p-index').show();
		$('.player-button').show();

	});
	if($('#J_submit').length>0){   

	      $('#J_submit').on('click',function(){
	          btn_sub();
	      });
	   }
	   var musicPlayer = new MusicPlayer({
			type:'auto',
        	mode:'random',
        	volume:1,
            auto:'false', //自动播放 默认不播放.
         //   mode:'order', //如果几首歌想随机播放,设置为 random, 默认为order.
            musicList:[{"name":"背景音乐", "path":"./static/img/music.mp3"}]
        });
	var status_bool=false;

	$(".player-button").on("click",function(){
	 	if(status_bool==true){
	 		musicPlayer.stop();
	 		$(this).addClass('.player-button-stop');
	 		status_bool=false;
	 	}else{
	 		musicPlayer.play();
	 		$(this).removeClass('.player-button-stop');
	 		status_bool=true;
	 	}
	 });
	var mFlag=false;
	$(window).on('tap',function(){
		if(!mFlag){
			musicPlayer.play();
			mFlag=true;
			status_bool=true;
		}
	});
	  var REG={
	      name:/^[a-zA-Z0-9\u4e00-\u9fa5]{2,12}$/,
	      phone:/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/,
	      isIDCard1:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/,
		  //身份证正则表达式(18位) 
		  isIDCard2:/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/ ,
		  isIDCard3:/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
		  isIDCard4:/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x)$/,
		  isdate:/\d{4}-\d{2}-\d{2}/
	   }
	   var btn_sub=function(){
	   		/*	if (Cookie.get('WIT_flag_0324_yepao_xian')==1) {
	   				alert("您已经提交过了！"); 
	   				$('#J_username').attr("disabled","disabled");
	                $('#J_usertel').attr("disabled","disabled");
	            
	                return false;
	            };*/
	           var name=$('#J_username').val();
	           var phone=$('#J_usertel').val();
	           var yuyuedate=$('#J_yuyuedate').val();
	           var loupan=$('#J_loupan').val();
	            if(loupan==''){
	               alert('请选择项目!');
	               return ;
	           }
	           if(name==''){
	              alert('请正确填写姓名!');
	               return ;
	           }else if(!REG.name.test(name)){
	               alert('请正确填写姓名！');
	               return ;
	           }
	           if(phone==''){
	              alert('手机号码不能为空！');
	               return ;
	           }else if(!REG.phone.test(phone)){
	               alert('请正确填写手机号码！');
	               return ;
	           }
	           if(yuyuedate==''){
	               alert('请填写看房日期!');
	               return ;
	           }/*else if(!REG.isdate.test(yuyuedate)){
	               alert('请正确填写看房日期号码！');
	               return ;
	           }*/
	           IO.post('./prize.php?opname=subUserInfo',{name:name,phone:phone,loupan:loupan,yuyuedate:yuyuedate},function(data){
	                        if(data.status==200){

	                             //提交成功	                           
	                        Cookie.set("WIT_flag_0427_shvanke_fangzhenhui",1,365);
                             	//显示中奖画面
                             	$("#J_form").css("display","none");
                             	var lottoryhtml_01='<div class="m-img m-img01" style="background:url(static/img/13-bg.jpg) center no-repeat;background-size:cover!important">'+
									'<img class="slide-up J_fTxt" src="static/img/15-txt.png" style="top:73px;left:50%;margin-left:-113px;width:226px">'+
									'</div>';
								$("#J_result_box").html(lottoryhtml_01);
								$("#J_result_box img").css("display","block");

	                        }else{
	                            alert('信息提交失败！\n原因：\n1、不能重复！\n2、网络问题，请检查手机联网状态！');
	                        }
	                     },'json');
	   }

});
