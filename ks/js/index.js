// JavaScript Document

$(function(){
	"use strict";
	/*背景音乐开关*/
	var bgm=true;
	$('.header .btn').click(function() {
		$(this).toggleClass('current');
		if(bgm===true){	
			$('.header audio')[0].pause();
			bgm=false;
		}else{	
			$('audio')[0].play();
			bgm=true;
		}
	});
	/*导航音乐*/
	$('.nav .nav-menu li').mouseenter(function(e) {
		var index=$(this).index()   
		$('.nav .nav-wrap01 audio')[index].currentTime=0 
		$('.nav .nav-wrap01 audio')[index].play()
	});
	/*导航fixed*/
	var navH=$('.fix').offset().top;
	$(window).scroll(function(e) {
		var winT=$(window).scrollTop()
		if(winT>navH){	
			$('.fix').addClass('fixed').stop().animate({top:winT},100)
		}else{	
			$('.fix').removeClass('fixed')
		}
	});
	//导航栏里公司搜索
	$('.nav-wrap .nav-sl .checked').click(function(e) {
		$('.nav-wrap .nav-sl #check').toggle()
		$('.nav-wrap #check li').removeClass('hov')
		$('.nav-wrap #check li').hover(function(e) {
			$(this).toggleClass('hov')
		});
		
	});
	$('.nav-wrap .nav-sl ul li').click(function(e) {
		var liClick=$(this).html()
		$('.nav-wrap .nav-sl #check').toggle()
		$('.nav-wrap .nav-sl .checked').html(liClick)
		$('.nav-wrap #check li').hover(function(e) {
			$(this).toggleClass('hov')
		});
	});


	/*焦点图*/
	var speed = 400;
	var sliderTime = 4000;  
	var tuCeng = 3;    
	var num = 0;
	$('.slider ul li').eq(0).find('span').css({top:0})
	$('.slider ol li').mouseenter(function(e) {
		$(this).addClass('on').siblings().removeClass('on');
		var index=$(this).index()
		tuCeng++
		num=index
		$('.slider ul li').eq(num).css({ zIndex: tuCeng}).stop().fadeIn(speed).siblings().stop().fadeOut(speed)
		$('.slider ul li').eq(num).find('span').stop().animate({top:0},speed)
	});
		var timer = null;
	var itemLength =  $('.slider ul li').length; 
	var myFn = function(){
		$('.slider ul li').eq(num).find('span').stop().animate({top:0},speed)
		num++
		if( num > (itemLength-1) ){
			num = 0
		}
		tuCeng++;       
		$('.slider ul li').eq(num).css({ zIndex: tuCeng}).stop().fadeIn(speed).siblings().stop().fadeOut(speed);
		$('.slider ul li').eq(num).find('span').stop().animate({top:0},speed)
		$('.slider ol li').eq(num).addClass('on').siblings().removeClass('on')
	}
	timer = setInterval(myFn,sliderTime)
	
	$('.slider').mouseenter(function(e) {
		clearInterval(timer)           
	}).mouseleave(function(e) {
		clearInterval(timer)
		timer = setInterval(myFn,sliderTime)   
	});
  /*右侧最新企业tab*/
   $('.main-r-new01 .supply-hd ul li').mouseenter(function(e) {
		$(this).addClass('current').siblings().removeClass('current')
		$('.main-r-new01 .supply-mn ul:eq('+$(this).index()+')').show().siblings().hide()
	});
	/*左侧行业*/
	$('.mn-l-hy .supply-hd li').mouseenter(function(e) {
		$(this).addClass('current').siblings().removeClass('current')
		$('.mn-l-hy .hy-mn-bd table:eq('+$(this).index()+')').show().siblings().hide()
	});
	$('.mn-l-hy .hy-mn-bd td').hover(function(e) {
		$(this).toggleClass('color')
	});
	/*推荐产品*/
	$('.mn-l-cp .supply-hd li').mouseenter(function(e) {
		$(this).addClass('current').siblings().removeClass('current')
		$('.mn-l-cp .mn-l-cp-mn ul:eq('+$(this).index()+')').show().siblings().hide()
	});
	/*返回顶部*/
	var winH=$(window).height()
	$(window).scroll(function(e) {
		var winT=$(window).scrollTop()
		if(winT>winH){	
			$('.return').show()
		}else{
			$('.return').hide()	
		}
		$('.return').stop().animate({bottom:50-winT},100)
	});
	$('.return').click(function(e) {
		$('html,body').animate({scrollTop:0},500)
	});
	
	
	
	
	
	
	
	
	
	
});







