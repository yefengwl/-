// 主轮播图
var wrap=document.getElementById('wrap')
var box=document.getElementById('box')
var list=document.getElementById('list').children
var timer;
var num=0;

function go(){
    timer=setInterval(function(){
        num++;
        if(num==5){
            num=0
        };
        box.style.transform='translateX('+-num*718+'px)';

        for(t=0;t<list.length;t++){
            list[t].removeAttribute('class')
        }
        list[num].setAttribute('class','current')
    },4000)
}
// 鼠标移入
wrap.onmouseenter=function(){
    clearInterval(timer)
}
// 鼠标移出
wrap.onmouseleave=function(){
    go()
}
go()
// 点击圆点
for(var i=0;i<list.length;i++){
    list[i].setAttribute('index',i)
    list[i].onclick=function(){
        num=this.getAttribute('index')
        for(t=0;t<list.length;t++){
            list[t].removeAttribute('class')
        }
        box.style.transform='translateX('+-num*718+'px)'
        this.setAttribute('class','current')
    }
}
// 左右按钮点击
left.onclick=function(){
    num--;
    if(num==-1){
        num=4
    }
    box.style.transform='translateX('+-num*718+'px)'
    for(t=0;t<list.length;t++){
        list[t].removeAttribute('class')
    }
    list[num].setAttribute('class','current')
}
right.onclick=function(){
    num++;
    if(num==5){
        num=0
    }
    box.style.transform='translateX('+-num*718+'px)'
    for(t=0;t<list.length;t++){
        list[t].removeAttribute('class')
    }
    list[num].setAttribute('class','current')
}


// 经典完本和男生频道轮播
var num1=0;
var timer1;
function go2(){
    if(num1==0){
        $('#ps ul').css({'left':`${-num1*100}px`})
        num1=1
    }
    $('#ps ul').animate({'left':`${-num1*100}px`},300)
}
function go3(){
    timer1=setInterval(function(){
        num1++;
        if(num1==6)num1=0
        go2()
    },1000)
}
go3()
$('#ps').hover(function(){
    clearInterval(timer1)
},function(){
    go3()
})


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