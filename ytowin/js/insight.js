// JavaScript Document
$(function(){   
    // 导航左侧点击开始
    $('.insight-l .l-nav-tab ul').eq(0).show();
    $('.insight-l .l-nav-tab').click(function(event) {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.insight-l .l-nav-tab ul').stop().slideUp(300);
        $(this).find('ul').stop().slideDown(300);
        $('.insight-r .encourage').eq(index).stop().slideDown(300).siblings().hide();
    });
    // 导航左侧点击结束
    // 导航左侧内部点击关联右侧开始
        // 励志激励点击
    $('.insight-l .l-nav-tab:eq(0) li').click(function(event) {
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.insight-r .encourage:eq(0) ul').hide();
        $('.insight-r .encourage:eq(0)').find('ul').eq(index).stop().slideDown(300);
    });
        // 学生减压点击
    $('.insight-l .l-nav-tab:eq(1) li').click(function(event) {
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.insight-r .encourage:eq(1) ul').hide();
        $('.insight-r .encourage:eq(1)').find('ul').eq(index).stop().slideDown(300);
    });
        // 学习方法点击
    $('.insight-l .l-nav-tab:eq(2) li').click(function(event) {
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.insight-r .encourage:eq(2) ul').hide();
        $('.insight-r .encourage:eq(2)').find('ul').eq(index).stop().slideDown(300);
    });
        // 健康锻炼点击
    $('.insight-l .l-nav-tab:eq(3) li').click(function(event) {
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.insight-r .encourage:eq(3) ul').hide();
        $('.insight-r .encourage:eq(3)').find('ul').eq(index).stop().slideDown(300);
    });
       
    // 导航左侧内部点击关联右侧结束






















});



