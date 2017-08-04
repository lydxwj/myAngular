// JavaScript Document
$(function(){   
    // 内容与导航关联开始
    $('.forget-tab').not($('.forget-tab').first()).hide();
    // 确认账号下一步按钮点击;邮箱验证，其他方式验证点击 
    $('#submit1,.other-way').click(function(event) {
        $('.forget-tab').hide().eq(1).fadeIn(300)
        $('.forget-nav .tab').eq(1).addClass('on').siblings().removeClass('on')
    });
    // 选择方式短信验证方式点击
    $('.totest-message').click(function(event) {
        $('.forget-tab').hide().eq(2).fadeIn(300)
        $('.forget-nav .tab').eq(2).addClass('on').siblings().removeClass('on')
    });
    // 选择方式邮箱验证方式点击
    $('.totest-mail').click(function(event) {
        $('.forget-tab').hide().eq(3).fadeIn(300)
        $('.forget-nav .tab').eq(2).addClass('on').siblings().removeClass('on')
    });
    //验证修改短信方式，下一步按钮 
    $('#submit3').click(function(event) {
        $('.forget-tab').hide().eq(4).fadeIn(300)
        $('.forget-nav .tab').eq(3).addClass('on').siblings().removeClass('on')
    });







    // 内容与导航关联结束




























});
