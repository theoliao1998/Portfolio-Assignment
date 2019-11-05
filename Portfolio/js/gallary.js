$(document).ready(function() {
    $("#image").css("height", $(window).height()-$(".occupy").height()*2.5);
    $("#image").css("width", $(window).width()-$(".preview_gallary").width());
    $(".preview").css("width", $(".preview").height());
});

for (let i=0; i<document.getElementsByClassName("preview").length; i++){
    document.getElementsByClassName("preview")[i].onmouseover = function () {
        document.querySelector("#image").style.backgroundImage = "url("+this["src"]+")";
        document.querySelector("#image").innerHTML=this["alt"];
        $("#image").addClass("show");
    }
}





