// JavaScript Document
$(function(){   

    // 专业库按钮切换关联专业库分类开始
    $('.major-tab .major-bachelor a').click(function(event) {
        $(this).addClass('tabOn');
        $('.major-tab .major-junior a').removeClass('tabOn');
        $('.major-contain-l .left-bachelor li').eq(0).addClass('active').siblings().removeClass('active');
        $('.major-contain-l .left-bachelor').slideDown(300);
        $('.major-contain-l .left-junior').hide();
        $('.major-contain-r .contain-r-zx').slideDown(300);
        $('.major-contain-r .junior-details').hide();
    });
    $('.major-tab .major-junior a').click(function(event) {
        $(this).addClass('tabOn');
        $('.major-tab .major-bachelor a').removeClass('tabOn');
        $('.major-contain-l .left-junior li').eq(0).addClass('active').siblings().removeClass('active');
        $('.major-contain-l .left-junior').slideDown(300);
        $('.major-contain-l .left-bachelor').hide();
        $('.major-contain-r .contain-r-nlmy').slideDown(300);
        $('.major-contain-r .bachelor-details').hide();
    });
    // 专业库按钮切换关联专业库分类结束
    // 专业库分类左侧点击,右侧关联开始    
    var effect = function(canshu){ 
        $('.major-contain-l .left-bachelor li').eq(canshu).addClass('active').siblings().removeClass('active');
        $('.major-contain-r .contain-r-mn .bachelor-details').eq(canshu).stop().slideDown(200).siblings().stop().hide();
    }
    var effect1 = function(canshu){ 
        $('.major-contain-l .left-junior li').eq(canshu).addClass('active').siblings().removeClass('active');
        $('.major-contain-r .contain-r-mn .junior-details').eq(canshu).stop().slideDown(200).siblings().stop().hide();
    }
    $('.major-contain-l .left-bachelor li').click(function(e) {
        var index = $(this).index();
        effect(index);
    });
    $('.major-contain-l .left-junior li').click(function(e) {
        var index = $(this).index();
        effect1(index);
    });
    // 专业库分类左侧点击,右侧关联结束
    // 专业库分类右侧点击开始
    $('.major-contain-r .classesr-mn').hide();
    $('.major-contain-r .classes-hd').click(function(event) {
        $(this).toggleClass('act');
        $(this).next().toggle(300);
    });
    // 专业库分类右侧点击结束
















});








