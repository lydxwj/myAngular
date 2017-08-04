// JavaScript Document
$(function(){   

    //内容导航关联开始
    $('.query').not($('.query').first()).hide(); 
    $('.admission-nav .tab').click(function(event) {
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.query').eq(index).slideDown(300).siblings().hide();
    });    
    //内容导航关联结束
    //提交检验文字显示开始
        //院校
    $('#submit-1').click(function(event) {
        if($('#province-1').val()==''){ 
            $('.error-tip').eq(0).html('请选择你要查询的省份')
        }else if ($('#batch-1').val()=='') {    
            $('.error-tip').eq(0).html('请选择你要查询的批次')
        }else if ($('#college-1').val()=='') {    
            $('.error-tip').eq(0).html('请选择你要查询的学校')
        }else{    
            $('.error-tip').eq(0).html('')
        };
    });
        //类型
    $('#submit-2').click(function(event) {
        if($('#type-2').val()==''){ 
            $('.error-tip').eq(1).html('请选择你要查询的学校类型')
        }else if ($('#batch-2').val()=='') {    
            $('.error-tip').eq(1).html('请选择你要查询的批次')
        }else{    
            $('.error-tip').eq(1).html('')
        };
    });
        //分数
    $('#submit-3').click(function(event) {
        if($('#batch-3').val()==''){ 
            $('.error-tip').eq(2).html('请选择你要查询的批次')
        }else if ($('#year-3').val()=='') {    
            $('.error-tip').eq(2).html('请选择你要查询的对比年份')
        }else if ($('#score-text3').val()=='') {    
            $('.error-tip').eq(2).html('请填写你要查询的分数/位次')
        }else if ($('#province-3').val()=='') {    
            $('.error-tip').eq(2).html('请选择你要查询的院校所在地')
        }else{    
            $('.error-tip').eq(2).html('')
        };
    });
	   //专业
    $('#submit-4').click(function(event) {
        if($('#batch-4').val()==''){ 
            $('.error-tip').eq(3).html('请选择你要查询的批次')
        }else if ($('#major-4').val()=='') {    
            $('.error-tip').eq(3).html('请选择你要查询的专业大类')
        }else if ($('#majores-4').val()=='') {    
            $('.error-tip').eq(3).html('请选择你要查询的具体专业')
        }else{    
            $('.error-tip').eq(3).html('')
        };
    });
	   //同分
    $('#submit-5').click(function(event) {
        if($('#score-text5').val()==''){ 
            $('.error-tip').eq(4).html('请填写你要查询的分数/位次')
        }else{    
            $('.error-tip').eq(4).html('')
        };
    });




    // 提交检验文字显示结束






});





