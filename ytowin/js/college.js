// JavaScript Document
$(function(){  
// 筛选部分开始
    // 点击弹出选框
    var popupFn=function(e){
        $('.popup').fadeIn(100);
        $(e).fadeIn(400);
    };
    $('.choose .province').click(function(){    
        popupFn('.popup-province');
    });
    $('.choose .type').click(function(){    
        popupFn('.popup-type');
    });
    $('.choose .batch').click(function(){    
        popupFn('.popup-batch');
    });
    $('.choose .level').click(function(){    
        popupFn('.popup-level');
    });
    // 点击关闭
    var closeFn=function(e){
        $('.popup').fadeOut(400);
        $(e).fadeOut(100);
    };
    $('.popup-province .hd i').click(function() {
        closeFn('.popup-province');
    });
    $('.popup-type .hd i').click(function() {
        closeFn('.popup-type');
    });
    $('.popup-batch .hd i').click(function() {
        closeFn('.popup-batch');
    });
    $('.popup-level .hd i').click(function() {
        closeFn('.popup-level');
    });
    // 点击选择，并关闭
    $('.popup-province .mn a').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
        closeFn('.popup-province');
        $('.choose .province span').html($(this).html());
    });
    $('.popup-type .mn a').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
        closeFn('.popup-type');
        $('.choose .type span').html($(this).html());
    });
    $('.popup-batch .mn a').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
        closeFn('.popup-batch');
        $('.choose .batch span').html($(this).html());
    });
    $('.popup-level .mn a').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
        closeFn('.popup-level');
        $('.choose .level span').html($(this).html());
    });
    // 点击背景关闭
    $('.popup').click(function(){   
        closeFn('.popup-province');
        closeFn('.popup-type');
        closeFn('.popup-batch');
        closeFn('.popup-level');
    });

// 筛选部分结束
// 点击收藏开始
    $('.college-collect').click(function(){  
        $(this).toggleClass('current');
        if($(this).html()=='收藏'){   
            $(this).html('取消')
        }else{  
            $(this).html('收藏')
        }                                    
    });
// 点击收藏结束













});

