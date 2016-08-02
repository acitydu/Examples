/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-01-23 16:14:31
 * @version $Id$
 */

var aId="wx2493870011ef22d8";
var tstamp="";
var nStr="";
var snature="";
function getWxinfo(){
    var url = location.href.split('#')[0];
    //console.log(url);

    $.ajax({
        async: false,
        url: 'http://zhongchou.zhixueyuan.net/wxjssdk/getSignature.action?callback=?',
        type: 'GET',
        dataType: 'jsonp',
        data: {"noncestr":"fudejiaoyu","timestamp":"1414587457","url":url},
        jsonp: 'jsoncallback',
        error: function () {
            $("html").removeClass("ui-loading");
            alert('请求超时');
            return false;
        },
        success: function (result) {
           
            console.log(result);             
            snature=result.signature;
            //alert("2"+snature); 
            weixinConf();
            //alert("链接成功")
            /*}
            else{
                alert("链接失败");
                return 
            }*/
        }
    })
}


getWxinfo();
function weixinConf(){
    //alert("1"+snature);
    wx.config({
      debug: false,
      appId:aId, // 必填，公众号的唯一标识
      timestamp: "1414587457", // 必填，生成签名的时间戳
      nonceStr: "fudejiaoyu", // 必填，生成签名的随机串
      signature: snature, // 必填，签名，见附录1
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
      ]
    });

    wx.ready(function(){
        wx.onMenuShareAppMessage({
            title: document.title, // 分享标题
            desc: '辅德教育欢迎您', // 分享描述
            link: location.href, // 分享链接
            imgUrl: 'http://zhzg.zhixueyuan.net/kz/fude/static/img/wxshare.png', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () { 
                // 用户确认分享后执行的回调函数
                //alert("分享成功")
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        })
        wx.onMenuShareTimeline({
            title: document.title, // 分享标题
            desc: '辅德教育欢迎您', // 分享描述
            link: location.href, // 分享链接
            imgUrl: 'http://zhzg.zhixueyuan.net/kz/fude/static/img/wxshare.png', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () { 
                // 用户确认分享后执行的回调函数
                //alert("分享成功")
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        });
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    });

    wx.error(function(res){
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        //alert("验证失败");
        /*wx.config({
          debug: false,
          appId:aId, // 必填，公众号的唯一标识
          timestamp: "1414587457", // 必填，生成签名的时间戳
          nonceStr: "fudejiaoyu", // 必填，生成签名的随机串
          signature: snature, // 必填，签名，见附录1
          jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
          ]
        });
        */
    });
}








    
