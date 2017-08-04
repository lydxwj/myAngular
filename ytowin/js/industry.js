// JavaScript Document
$(function(){   

    // 专业库按钮切换关联专业库分类开始
    $('.industry-tab .industry-hot a').click(function(event) {
        $(this).addClass('tabOn');
        $('.industry-tab .industry-tradition a').removeClass('tabOn');
        $('.industry-contain-l .left-hot li').eq(0).addClass('active').siblings().removeClass('active');
        $('.industry-contain-l .left-hot').slideDown(300);
        $('.industry-contain-l .left-tradition').hide();
        $('.industry-contain-r .contain-r-cm').slideDown(300);
        $('.industry-contain-r .tradition-details').hide();
    });
    $('.industry-tab .industry-tradition a').click(function(event) {
        $(this).addClass('tabOn');
        $('.industry-tab .industry-hot a').removeClass('tabOn');
        $('.industry-contain-l .left-tradition li').eq(0).addClass('active').siblings().removeClass('active');
        $('.industry-contain-l .left-tradition').slideDown(300);
        $('.industry-contain-l .left-hot').hide();
        $('.industry-contain-r .contain-r-cw').slideDown(300);
        $('.industry-contain-r .hot-details').hide();
    });
    // 专业库按钮切换关联专业库分类结束
    // 专业库分类左侧点击,右侧关联开始    
    var effect = function(canshu){ 
        $('.industry-contain-l .left-hot li').eq(canshu).addClass('active').siblings().removeClass('active');
        $('.industry-contain-r .contain-r-mn .hot-details').eq(canshu).stop().slideDown(200).siblings().stop().hide();
    }
    var effect1 = function(canshu){ 
        $('.industry-contain-l .left-tradition li').eq(canshu).addClass('active').siblings().removeClass('active');
        $('.industry-contain-r .contain-r-mn .tradition-details').eq(canshu).stop().slideDown(200).siblings().stop().hide();
    }
    $('.industry-contain-l .left-hot li').click(function(e) {
        var index = $(this).index();
        effect(index);
    });
    $('.industry-contain-l .left-tradition li').click(function(e) {
        var index = $(this).index();
        effect1(index);
    });
    // 专业库分类左侧点击,右侧关联结束
    // 专业库分类右侧点击开始
    $('.industry-contain-r .classesr-mn').hide();
    $('.industry-contain-r .classes-hd').click(function(event) {
        $(this).toggleClass('act');
        $(this).next().toggle(300);
    });
    // 专业库分类右侧点击结束
















});






