
$(document).ready(function(){
    document.addEventListener('touchstart',function(){},false);

    
    
    // 语言控制
    $('.header-right .img').click(function(event) {
        $('.language').show(200);
    });
    $('.language').click(function(event) {
        $('.language').hide(200);
    });
/*搜索弹窗*/
	$('.search-in').click(function(e) {
		$('.search-bg').fadeIn(300)
	});
	$('.search-bg .to-search').click(function(e) {
		$('.search-bg').fadeOut(300)
	});

  
    // 返回顶部
    $('.toTop').click(function() {
        $('html,body').animate({ scrollTop : 0 },200);
        
    });
	//导航
	$('.nav').click(function(e) {
		$('.nav-tap li').hide()
		$('.nav-tap').removeClass('hide')
		$('.nav-tap').toggle()
		$('.nav-tap li:eq(0)').show(100)
		$('.nav-tap li:eq(1)').show(200)
		$('.nav-tap li:eq(2)').show(300)
		$('.nav-tap li:eq(3)').show(400)
		$('.nav-tap li:eq(4)').show(500)
		$('.nav-tap li:eq(5)').show(600)
	
	});
	$('.hidded').click(function() {
		$('.nav-tap').attr({style:''})
		$('.nav-tap').addClass('hide')
	});
	
	
});