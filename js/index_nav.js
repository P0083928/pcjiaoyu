$(function () {
    

var nowimg = 0;
//$(".rightButton").click(
//    function () {
//        right();
//    });

//$(".leftButton").click(
//    function () {
//        if (!$(".pic ul li").is(":animated")) {
//            $(".pic ul li").eq(nowimg).fadeOut(600);
//            if (nowimg > 0) {
//                nowimg--;
//            } else {
//                nowimg = 4;
//            }
//            $(".pic ul li").eq(nowimg).fadeIn(600);
//            $(".circle li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
//        }
//    });

$(".navli").hover(function () {
    if (!$(this).children(".slideDown").is(":animated")) {
        $(this).children(".slideDown").slideDown();
        $(this).siblings().children(".slideDown").slideUp();
    }
}, function () {
    $(this).children(".slideDown").slideUp();
});
$(".circle li").mouseenter(
    function () {
       if (!$(".bannerUl li").is(":animated")) {
            if ($(this).index() != nowimg) {
                nowimg = $(this).index();
                $(".bannerUl li").eq(nowimg).fadeIn(500);
                $(".bannerUl li").eq(nowimg).siblings().fadeOut(500);
                //  $(".circle li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
                $(".circle li").eq(nowimg).animate({
                    "top": "-5px"
                }, 300);
                $(".circle li").eq(nowimg).siblings().animate({
                      "top":"0px" 
                },300);
				$(".circle li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
            }
     }
    });

var mytimer = window.setInterval(right, 1000);
function right() {
    if (!$(".bannerUl  li").is(":animated")) {
        $(".bannerUl li").eq(nowimg).fadeOut(500);
        if (nowimg < 2) {
            nowimg++;
        } else {
            nowimg = 0;
        }
        $(".bannerUl li").eq(nowimg).fadeIn(500);
       // $(".circle li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
        $(".circle li").eq(nowimg).animate({
            "top": "-5px"
        }, 300);
        $(".circle li").eq(nowimg).siblings().animate({
            "top": "0px"
        }, 300);
		$(".circle li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
    }
}
$(".page01").mouseenter(function () {
    window.clearInterval(mytimer);
});
$(".page01").mouseleave(function () {
    window.clearInterval(mytimer);
    mytimer = window.setInterval(right,1000);
});
});