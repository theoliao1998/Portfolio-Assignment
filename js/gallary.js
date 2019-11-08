$(document).ready(resize);

$(window).resize(resize);

function resize(){
    $(".preview").css("width", $(".preview").height());
    $(".preview_gallary").css("min-width",2*$(".preview").width())
    if($(window).width()>$(window).height() && $(window).width()>600){
        $("#image").css("width", $(window).width()-$(".preview_gallary").width());
        let h1 = $(".preview_gallary").height();
        let h2 = 0.93*($(window).height()-$(".navigation").height()-$("footer").height()-$("header").height()-$("#heading").height());
        let h = h1 > h2 ? h1 : h2;
        $("#image").css("height", h);
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





