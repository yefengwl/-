// 下拉框1
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