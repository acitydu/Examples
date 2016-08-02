function loadImages(sources, callback){
      var count = 0,
          images ={},
          imgNum = 0;
      for(src in sources){
          imgNum++;
      }
      for(src in sources){
          images[src] = new Image();
          images[src].onload = function(){
              if(++count >= imgNum){
                  callback(images);
              }
          }
          images[src].src = sources[src];
      }
  }
  loadImages(['img/bg-01.jpg'
,'img/bg-02.jpg'
,'img/bg-03.jpg'
,'img/bg-04.jpg'
,'img/bg-05.jpg'
,'img/bg-06.jpg'
,'img/bg-07.jpg'
,'img/bg-08.jpg'
,'img/bg-09.jpg'
,'img/bg-10.jpg'
,'img/bg-11.jpg'
,'img/bg-12.jpg'
,'img/bg-13.jpg'
,'img/bg-14.jpg'
,'img/bg-15.jpg'
,'img/bg-16.jpg'
,'img/bg-17.jpg'
,'img/bg-18.jpg'
,'img/ico-p11.png'
,'img/ico-p12.png'
,'img/ico-p21.png'
,'img/ico-p22.png'
,'img/ico-p31.png'
,'img/ico-p32.png'
,'img/ico-p33.png'
,'img/ico-p34.png'
,'img/ico-p41.png'
,'img/ico-p42.png'
,'img/ico-p43.png'
,'img/ico-p51.png'
,'img/ico-p52.png'
,'img/ico-p61.png'
,'img/ico-p71.png'
,'img/ico-p81.png'
,'img/ico-p82.png'
,'img/ico-p91.png'
,'img/ico-p101.png'
,'img/ico-p111.png'
,'img/ico-p121.png'
,'img/ico-p131.png'
,'img/ico-p141.png'
,'img/ico-p151.png'
,'img/ico-p161.png'
,'img/ico-p171.png'
,'img/ico-p181.png'
,'img/ico-p182.png'
,'img/iconShare.jpg'
,'img/player-button-start.png'
,'img/player-button-end.png'],function(){
  setTimeout(function(){
    $('.loading-box').remove();
    $('.sec01').show().addClass('sec01_show');
  },3000);  //3000
});
//容灾
setTimeout(function(){
  if($('.loading-box').length==1){
    $('.loading-box').remove();
    $('.sec01').show().addClass('sec01_show');
  }
},8000);  //8000




function IsPC(){  
	var userAgentInfo = navigator.userAgent;  
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
	var flag = true;  
	for (var v = 0; v < Agents.length; v++) {  
	   if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
	}  
	return flag;  
}

var jumpPc = IsPC();
if(jumpPc!=false){
}


function initPage(){
  pageWidth = $(window).width();
  pageHeight = $(".wrap").height();
  pages = $(".wrap section");
  $(".bg .bg_sec").css("height",pageHeight);
    var bg_sec_height = $('.bg .bg_sec').height();
    $(".svg").css("height",bg_sec_height*8);

    $(".wrap section").css({
        "width":pageWidth+"px",//"height":$(".wrap").height()+"px"
        "height":pageHeight+"px"
    });
    //$(".wrap").height($(".wrap").height());

    secHeight = pageHeight * $(".wrap section").length;
    lineHeight = 832 * secHeight / pageHeight;

    $(".sec, .line").addClass("drag");
    animatePage(curPage);
    //$(".sec, .line").removeClass("drag");

}

function orientationChange(){
  initPage();
}

// 以下是拖动效果
var startX = 0,
    startY = 0;
    margin = 0;
var pages = null;
var curPage = 0;
var pageWidth = 0,
    pageHeight = 0;
var lineHeight = 0, secHeight = 0;
var targetElement = null;
var scrollPrevent = false, movePrevent = false, touchDown = false;


function onStart (e) {
    if(movePrevent == true){
        event.preventDefault();
        return false;
    }
    if($(e.target).parents("#container").length==1){
        scrollPrevent = true;
    }else{
        scrollPrevent = false;
    }

    $(".map").on('click', function(e){
      $(".map_show").addClass("show");
    })

    if(!$(e.target).parents("#container").length==1){
      $(".map_show").removeClass("show");
    }

    touchDown = true;

    // 起始点，页面位置
    startX = e.pageX;
    startY = e.pageY;
    //margin = parseInt($(".sec").css("top"));
    //-webkit-transform:translateY(0px)

    //matrix(1, 0, 0, 1, 0, 8)

    $(".sec, .line").addClass("drag");

    margin = $(".sec").css("-webkit-transform");
    //margin = "matrix(1, 0, 0, 1, 0, -50)";
    margin = margin.replace("matrix(", "");
    margin = margin.replace(")", "");
    margin = margin.split(",");
    margin = parseInt(margin[5]);
}

function onMove (e, oe) {
    if(movePrevent == true || touchDown != true){
        event.preventDefault();
        return false;
    }
    event.preventDefault();
    if( scrollPrevent==false && e.pageY!=startY){
        var temp = margin + e.pageY - startY;
        $(".sec").css("-webkit-transform", "matrix(1, 0, 0, 1, 0, "+temp+")");
        var b =  lineHeight / secHeight * temp;
        $(".line").css("-webkit-transform", "matrix(1, 0, 0, 1, 0, "+b+")");
    }
}

function onEnd (e) {
    if(movePrevent == true){
        event.preventDefault();
        return false;
    }

    touchDown = false;

    if( scrollPrevent==false ){
        // 抬起点，页面位置
        endX = e.pageX;
        endY = e.pageY;
        // swip 事件默认大于50px才会触发，小于这个就将页面归回
        if( Math.abs(endY-startY)<=50) {
            animatePage(curPage);
        }else{
          if(endY>startY){
            prevPage();
          }else{
            nextPage();
          }
        }
    }

    $(".sec, .line").removeClass("drag");
}
//弹出
$('.J_guide').on('click',function(){
    $('.guide').show();
});

function prevPage(){
    var newPage = curPage - 1;
    if(curPage==0){
      newPage=17;
    }
    animatePage(newPage);
}
function nextPage(){
    var newPage = curPage + 1;
    if(newPage==18){newPage=0}
    animatePage(newPage);
}

function animatePage( newPage ){
      $('.guide').hide();
    $('.sec-11bg').show();
  $('.sec-12bg').show();
    if(newPage<0){
        newPage = 0;
    }
    if(newPage>$(".wrap section").length-1){
        newPage = $(".wrap section").length-1;
    }

    curPage = newPage;
    var newMarginTop = newPage * (-pageHeight);
    $(".sec").css({
        "-webkit-transform" : "matrix(1, 0, 0, 1, 0, "+newMarginTop+")"
    });

    var newTop = -parseInt(curPage*pageHeight*(lineHeight/secHeight));
    $(".line").css({
        "-webkit-transform" : "matrix(1, 0, 0, 1, 0, "+newTop+")"
    });

    movePrevent = true;
    setTimeout("movePrevent=false;", 300 );

    // 每页动画
    if( !$(pages[curPage]).hasClass("sec0" + (curPage+1) + "_show") ){
        $(pages[curPage]).addClass("sec0" + (curPage+1) + "_show");
    }
    $(pages[curPage-1]).removeClass("sec0" + (curPage) + "_show");
    $(pages[curPage+1]).removeClass("sec0" + (curPage+2) + "_show");

    pgvSendClick({hottag:'index.index.start_qzone'});
}


// 视差
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);