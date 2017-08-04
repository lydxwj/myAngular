// JavaScript Document
$(function(){   
    // 试题点击选中效果开始;试题进度与进度条关联开始
    $('.test-mn .choice').click(function(event) {
        //试题点击选中效果开始
        $(this).addClass('current').siblings().removeClass('current');
        //试题进度与进度条关联开始
        var choiceL=($('.test-mn .choice').length)/2;
        var currentL=$('.test-mn .choice.current').length;
        var num= parseInt((currentL/choiceL)*100);
        $('.evaluation-rate .rate-mn span').html(num+'%').animate({width:num+'%'},200);
    });
    // 试题点击选中效果结束;试题进度与进度条关联结束
	
	





















});
