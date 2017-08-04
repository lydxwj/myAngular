$(document).ready(function(){
    document.addEventListener('touchstart',function(){},false);

    $('.header .row').click(function(event) {
        $('.line').toggleClass('on');
        $('.header .nav').stop().slideToggle(300);
    });
    
    // 语言控制
    $('.section1-right .img').click(function(event) {
        $('.language').show(200);
    });
    $('.language').click(function(event) {
        $('.language').hide(200);
    });

    // 新闻动态
    $('.section4 .more').click(function(event) {
        $('.news').stop().slideToggle(300);
        $('.section4-zong').toggleClass('on');
        $('.news').toggleClass('on');
    });

    // 返回顶部
    $('.toTop').click(function() {
        $('html,body').animate({ scrollTop : 0 },200);
        
    });
});