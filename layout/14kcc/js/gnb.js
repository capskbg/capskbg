$(document).ready(function(){
    $(".gnb>li>a").click(function(){
        var submenu = $(this).next("ul");
        // submenu 화면상에 보일시 부드럽게 펼치기
        if(submenu.is(":visible")){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    }).mouseover(function(){
        $(this).next("ul").slideDown();
    });
});