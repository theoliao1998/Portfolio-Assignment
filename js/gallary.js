$(document).ready(resize);

$(window).resize(resize);

function resize(){
    
    if($(window).width()>$(window).height()){
        $("#image").css("width", $(window).width()-3*$(".preview").width());
        $("#image").css("height", $(window).height()-$(".navigation").height()-$("footer").height());
    } else{
        $("#image").css("width",$(window).width());
        $("#image").css("height",$(window).width());
    }
    $(".preview").css("width", $(".preview").height());
}

for (let i=0; i<document.getElementsByClassName("preview").length; i++){
    document.getElementsByClassName("preview")[i].onmouseover = function () {
        document.querySelector("#image").style.backgroundImage = "url("+this["src"]+")";
        document.querySelector("#image").innerHTML=this["alt"];
        $("#image").addClass("show");
    }
}





