$(document).ready(resize);

$(window).resize(resize);

function resize(){
    $(".preview").css("width", $(".preview").height());
    $(".preview_gallary").css("min-width",2*$(".preview").width())
    if($(window).width()>$(window).height() && $(window).width()>600){
        $("#image").css("width", $(window).width()-$(".preview_gallary").width());
        $("#image").css("height", 0.93*($(window).height()-$(".navigation").height()-$("footer").height()-$("header").height()));
    } else{
        $("#image").css("width",$(window).width()*0.9);
        $("#image").css("height",$(window).width()*0.9);
    }
    
}

for (let i=0; i<document.getElementsByClassName("preview").length; i++){
    document.getElementsByClassName("preview")[i].onmouseover = function () {
        document.querySelector("#image").style.backgroundImage = "url("+this["src"]+")";
        document.querySelector("#image").innerHTML=this["alt"];
        $("#image").addClass("show");
    }
}





