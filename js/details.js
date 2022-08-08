// 下拉框
$('#mibo').mouseenter(function(){
    
    $(this).children('.app-float').slideDown()
})
$('#mibo').mouseleave(function(){
    $(this).children('.app-float').slideUp()
})

// 下拉框2
$('.box1 .l2').mouseenter(function(){
    $(this).children('.box1 .ll').slideDown()
})
$('.box1 .l2').mouseleave(function(){
    $(this).children('.box1 .ll').slideUp()
})

// 窗口滚动固定
$(window).scroll(function(){
    if($(window).scrollTop()>150){
        $('.head-fixed').css({'display':`block`})
    }else{
        $('.head-fixed').css({'display':`none`})
    }
})

// 投月票轮播
var num=0;
var timer;
function go(){
    if(num==0){
        $('#vioce ul').css({'bottom':`${num*48}px`})
        num=1
    }
    $('#vioce ul').animate({'bottom':`${num*48}px`},300)
}
function go1(){
    timer=setInterval(function(){
        num++;
        if(num==10)num=0
        go()
    },2000)
}
go1()