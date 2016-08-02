$(document).ready(function() {
  

var oUl = $("#slider_name .silder_con");
var aLiUl = $("#slider_name .silder_con li");

var oOl = $("#slider_name .silder_nav");
var aLiOl =$("#slider_name .silder_nav li");

var oneWidth = aLiUl[0].offsetWidth;

var iNow = 0;
//var iNow2 = 0;
var timer2 = null;

//var oBox = document.getElementById('box');

/*for (var i=0;i<aLiOl.length;i++) {
  aLiOl[i].index = i;
  aLiOl[i].onmouseover = function  () {
          for (var i=0;i<aLiOl.length;i++) {
            aLiOl[i].className = '';
          }
    this.className = 'active'; 
    
          iNow = this.index;
          iNow2 = this.index;
          $(oUl).animate({"left":- iNow2*oneWidth},300);


    //startMove (oUl, {left : -this.index*oneWidth}) 
  };

}*/

  timer2 = setInterval(toRun,5000);
  $("#slider").mouseenter(function(){
    clearInterval(timer2);
  });
  $("#slider").mouseleave(function(){
    timer2 = setInterval(toRun,5000);
  });
  var allnum=aLiUl.length;
  var lastli=allnum-1;
  function toRun(){
     $(".content").removeClass("fadeInLeft").addClass("fadeInRight");
     //alert(iNow+","+iNow2);
     /*if (iNow==0) {
      aLiUl[0].style.position = 'static';
      $(oUl).css("left","0");
      iNow2 = 0;
     }
     if(iNow == aLiOl.length-1){
      //alert(1);
      if (iNow2<0) {
        $(oUl).css("left",iNow*oneWidth);
      }
      iNow = 0;
      aLiUl[0].style.position = 'relative';
      aLiUl[0].style.left = aLiUl.length*oneWidth + 'px';
     }
     else{
       iNow++;
       }*/
    if (iNow == aLiOl.length-1) {
      iNow=0;
      for (var i=0;i<aLiOl.length;i++) {
            aLiOl[i].className = '';
          }
      aLiOl[iNow].className = 'active'; 
      $(".content").hide();
      $("#c"+iNow).show();
      $(oUl).animate({"left":"0"},500);
    }
    else{


      iNow++
      //iNow2++;


      for (var i=0;i<aLiOl.length;i++) {
              aLiOl[i].className = '';
            }
      aLiOl[iNow].className = 'active'; 
      $(".content").hide();
      $("#c"+iNow).show();
      console.log(iNow+","+oneWidth);
      $(oUl).animate({"left":- iNow*oneWidth},500);
       //startMove (oUl, {left: - iNow2*oneWidth});
    }
  }

  function toRun_left(){
     //alert(iNow+","+iNow2);
     
    $(".content").removeClass("fadeInRight").addClass("fadeInLeft");
    if (iNow == 0) {
      iNow=aLiOl.length-1;
      for (var i=0;i<aLiOl.length;i++) {
            aLiOl[i].className = '';
          }
      aLiOl[iNow].className = 'active'; 
      $(".content").hide();
      $("#c"+iNow).show();
      $(oUl).animate({"left":-iNow*oneWidth},500);
    }
    else{

     /*if(iNow == aLiOl.length-1){
      
      //alert(2);
      iNow2 = aLiOl.length-1;
      alert(iNow+","+iNow2);
      aLiUl[lastli].style.position = 'static';
      $(oUl).css("left",-iNow2*oneWidth + 'px');
     }

     if (iNow==0) {
      //alert(1);
      iNow = aLiOl.length-1;
      aLiUl[lastli].style.position = 'relative';
      aLiUl[lastli].style.right = aLiUl.length*oneWidth + 'px';
     }
     else{
       iNow--;
     }*/
     
      iNow--;
      //iNow2--;

      for (var i=0;i<aLiOl.length;i++) {
          aLiOl[i].className = '';
      }
      aLiOl[iNow].className = 'active'; 
      $(".content").hide();
      $("#c"+iNow).show();
      //alert(iNow+","+iNow2);
      $(oUl).animate({"left":-iNow*oneWidth},500);
         //startMove (oUl, {left: - iNow2*oneWidth});
    }
  }



  var sy, ey = 0;
  $("#slider_name").bind("touchstart", function (event) {
     //alert("touchstart:" + event.originalEvent);
     clearInterval(timer2);
     var touchs = event.originalEvent.changedTouches;
     if (touchs.length == 0) return;
     var touch = touchs[0];
     sy = touch.screenX;
     console.log(touch);
     //alert("touchstart:" + sy);
  });
  $("#slider_name").bind("touchend", function (event) {
     var touchs = event.originalEvent.changedTouches;
     if (touchs.length == 0) return;
     var touch = touchs[0];
     ey = touch.screenX;
     //alert("touchend:" + (ey - sy));
     if (ey - sy < -60) {
         if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
             //alert("向左");
             toRun();
         }
     } else if (ey - sy > 60) {
         if ($(document).scrollTop() <= 0) {
             //alert("向右");
             toRun_left();
         }
     }
     timer2 = setInterval(toRun,5000);
  });

});  
