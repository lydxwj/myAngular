/**
 * Created by Administrator on 2015/6/1.
 */
<!--banner图片轮播-->
$(function(){
  // 支持 png24
DD_belatedPNG.fix('.new-logo img,#thisMenu');
// 省份选择
    $('.province').mouseenter(function() {
        $('.province .province-mn').stop().fadeIn(300);
    }).mouseleave(function() {
       $('.province .province-mn').stop().fadeOut(300);
    });
    $('.popup-province .mn a').click(function() {
        $('.popup-province,.popup').hide();
        var Text=$(this).text();
        $('.province-hd').text(Text);
        for (var i=0; i<=$('.province-mn a').length;i++) {
            if($('.province-mn a').eq(i).text()==Text){
               $('.province-mn a').removeClass('active').eq(i).addClass('active'); 
            }          
        };
    });
    $('.province-mn a').click(function(event) {
        var Text=$(this).text();
        $('.province-hd').text(Text);
        $(this).addClass('active').siblings().removeClass('active');
		$('.province-mn').hide();
    });
    //克隆第一张焦点图
    var tag=$('.slider ul li').eq(0).clone(true)
    $('.slider ul').append(tag)
    
    
    //左翻页无缝
    var speed = 300;
    var sliderTime = 2000; 
    var ulNum=0
    var olNum = 0;
    $('.slider .next').click(function(e) {
        ulNum++
        if(ulNum>5){
            ulNum=1
            $('.slider  ul').css({left:0})
        }
        $('.slider  ul').stop().animate({left:ulNum*(-100)+'%'},speed);
        olNum ++;
            if(olNum > 4){  
                olNum = 0;
            }
        $('.slider ol li').eq(olNum).addClass('current').siblings().removeClass('current');
    });
    //右翻页无缝
    $('.slider  .prev').click(function(e) {
        ulNum--
        if(ulNum<0){
            ulNum=4
            $('.slider ul').css({left:(-100)*5+'%'})
        }
        $('.slider ul').stop().animate({left:ulNum*(-100)+'%'},speed)
        olNum --;
            if(olNum <0){  
                olNum = 4;
            }
        $('.slider ol li').eq(olNum).addClass('current').siblings().removeClass('current');
        
    });
    //点击圆点
        $('.slider ol li').click(function(e) {
            var index = $(this).index();
            $('.slider  ul').stop().animate({left:index*(-100)+'%'},speed);
            $('.slider ol li').eq(index).addClass('current').siblings().removeClass('current');
            olNum = index;
            ulNum = index;
        });
        

    //自动播放
    var timer=null
    var sliderFn=function(){    
        $('.slider .next').click()
    }
    timer=setInterval(sliderFn,sliderTime)
    //清除定时器
    $('.slider,.n-login ').hover(function(){    
        clearInterval(timer)
        $('.slider .next,.slider .prev').show()
    },function(){   
        clearInterval(timer)
        timer=setInterval(sliderFn,sliderTime)
        $('.slider .next,.slider .prev').hide()
    })
    
    /*加颜色*/
    var colors = ['#0e091d','#0e091d','#680420','#e28015','#0e091d'];
    $('.slider ul li').each(function(index, el) {
        $(el).css({ backgroundColor:colors[index] })
    });
    
});
$(function () {
// 注册会员区、VIP会员区
    //点击左右切换	
    var n = 0;
    var iow = $('#Iqie1 ul li').length;
    var pertInt = $('#Iqie1 ul').width()
    var Liwidth = $('#Iqie1 ul li').width();
    var bhtIbbs = iow * Liwidth;
    if (iow > 5) {
        $('#Iqie1 ul').css({ width: bhtIbbs });
        $('#left1').click(function () {
            if (n <= 0) {
                n = iow - 4;
            }
            n--;
            $('#Iqie1 ul').animate({ left: -Liwidth * n }, 300);

        })
        $('#right1').click(function () {
            if (n >= iow - 5) {
                n = -1;
            }
            n++;
            $('#Iqie1 ul').animate({ left: -Liwidth * n }, 300);
        })
    }
    $('#Qchu1').mouseover(function () {
        $('#left1').css('opacity', '1')
        $('#right1').css('opacity', '1')


    })

    $('#Qchu1').mouseout(function () {
        $('#left1').css('opacity', '0.2')
        $('#right1').css('opacity', '0.2')
    })
	
	
	
	

    var n = 0;
    var iow = $('#Iqie2 ul li').length;
    var pertInt = $('#Iqie2 ul').width()
    var Liwidth = $('#Iqie2 ul li').width();
    var bhtIbbs = iow * Liwidth;
    if (iow > 5) {
        $('#Iqie2 ul').css({ width: bhtIbbs });
        $('#left2').click(function () {
            if (n <= 0) {
                n = iow - 4;
            }
            n--;
            $('#Iqie2 ul').animate({ left: -Liwidth * n }, 300);

        })
        $('#right2').click(function () {
            if (n >= iow - 5) {
                n = -1;
            }
            n++;
            $('#Iqie2 ul').animate({ left: -Liwidth * n }, 300);
        })
    }
    $('#Qchu2').mouseover(function () {
        $('#left2').css('opacity', '1')
        $('#right2').css('opacity', '1')


    })

    $('#Qchu2').mouseout(function () {
        $('#left2').css('opacity', '0.2')
        $('#right2').css('opacity', '0.2')
    })

    // 免费视频区底部
    $('.video ul li a').hover(function(){   
        $(this).find('.v-title').stop().animate({bottom: 0},500);
    },function(){
        $(this).find('.v-title').stop().animate({bottom:-40},500);
    })

});
<!--限时免费视频、新增视频等顶部切换-->
function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
  if (i == Num)
  {
   thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
}




