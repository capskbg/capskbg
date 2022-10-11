function nextFunc(){
$(".slideWrap").append($(".slideWrap li").first().clone()); //복사 붙여넣기
$(".slideWrap li").first().remove();

}







function prevFunc(){
    $(".slideWrap").prepend($(".slideWrap li").last().clone()); //복사 붙여넣기
    $(".slideWrap li").last().remove();

}

var slideAuto = setInterval(() => {nextFunc()},3000);

$("#slide").hover(
    function(){
        clearInterval(slideAuto);
    },
    
    function(){
        slideAuto = setInterval(() => {nextFunc()
            
        }, 1000);
    }
    );