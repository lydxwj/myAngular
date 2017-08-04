// JavaScript Document
/*页面跳转开始*/
/*var isMobile = device.mobile(),
            isTable = device.tablet();

    if(isMobile || isTable){
        
    }
    else{
         window.open("http://www.ytowin.com/","_self");
    }*/
/*页面跳转结束*/
/*点击事件加快star*/
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}
/*点击事件加快end*/
$(document).ready(function(){
    document.addEventListener('touchstart',function(){},false);

	//导航
	$('.nav').click(function(e) {
		$('.nav-tap li').hide();
		$('.nav').toggleClass('click');
		$('.nav-tap').toggle();
		$('.nav-tap li:eq(0)').slideDown(100);
		$('.nav-tap li:eq(1)').slideDown(100);
		$('.nav-tap li:eq(2)').slideDown(150);
		$('.nav-tap li:eq(3)').slideDown(150);
		$('.nav-tap li:eq(4)').slideDown(200);
		$('.nav-tap li:eq(5)').slideDown(200);
		$('.nav-tap li:eq(6)').slideDown(250);
		$('.nav-tap li:eq(7)').slideDown(250);
		$('.nav-tap li:eq(8)').slideDown(300);
		$('.nav-tap li:eq(9)').slideDown(300);
	});
	$('.main').click(function() {
		$('.nav').removeClass('click')
		$('.nav-tap').hide();
	});
	$('.header h1').click(function() {
		$('.nav').removeClass('click')
		$('.nav-tap').hide();
	});
	// 返回顶部
    $('.toTop').click(function() {
        $('html,body').animate({ scrollTop : 0 },200);      
    });
	var winH=$(window).height()-300
	$(window).scroll(function(e) {
		var winT=$(window).scrollTop()
		if(winT>winH){	
			$('.toTop').show();
		}else{
			$('.toTop').hide();	
		}
	});
	
	
});









  