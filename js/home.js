// 头部划过显示二维码
function showApp(){
    var $a = document.querySelector('.left-a-app');
    var $span = document.querySelector('.app-img-box');
    $a.onmouseenter = function(){
        $span.style.display = "block";
    }
    $a.onmouseleave = function(){
        $span.style.display = "none";
    }
}