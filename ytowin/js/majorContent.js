// JavaScript Document
$(function(){   
    //内容导航关联开始
    $('.mc-nav .tab').click(function(event) {
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab-details').hide().eq(index).slideDown(300);
    });    
    //内容导航关联结束












});

