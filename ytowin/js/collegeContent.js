// JavaScript Document
$(function(){   
    //内容导航关联开始
    $('.cc-detail').not($('.cc-detail').first()).hide(); 
    $('.cc-nav .tab').click(function(event) {
        var index = $(this).index();
        $('.cc-nav .tab,.cc-nav .tab-nav').removeClass('on')
        $(this).addClass('on');
        $('.cc-detail').hide().eq(index).slideDown(300);
    });
    $('.cc-nav .tab-nav').eq(0).click(function(event) {
        $('.cc-nav .tab,.cc-nav .tab-nav').removeClass('on')
        $(this).addClass('on');
        $('.cc-detail').hide().eq(2).slideDown(300);
    });    
    //内容导航关联结束












});













