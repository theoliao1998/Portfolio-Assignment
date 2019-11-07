$(document).ready(function() {
	
	$("body").css("display", "none");
	$("body").fadeIn(1000);
	reshape();
	// $("li").css("line-height",$("a.page").height());

	$("a.page,a.flip-card-back").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(500, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});

$(window).resize(function(){
	reshape();
});

function reshape(){
	$(".occupy").css("height", $("footer").height());
	$("#bottom").css("height", $(window).height()-$("header").height()-$(".navigation").height()-$("#main").height());
	if ($(window).width() < 1000){
		$("img:not(.preview)").css("height", ($(window).width()/$(window).height()*100).toString(10)+"vh");
	} else {
		$("img:not(.preview)").css("height", "50vh");
	}
}

$(window).scroll(function () {
	if ($(window).width()> 1000){
	 if ($(window).scrollTop() >= $('.navigation').offset().top) {
	 $('.navigation').addClass('isFixed');
	 } 
	 if ($(window).scrollTop() <$('header').height() ) {
	 $('.navigation').removeClass('isFixed');
	 }
	} else {
		$('.navigation').removeClass('isFixed');
	}
   });


$("*").focus(function() {

	if($(this).hasClass("form-control") || $(this).hasClass("btn")){
		$(".contact").addClass("focused");
	}
	else{
		$(".contact").removeClass("focused");
	}

	if($(this).parent().hasClass("reference")){
		$(".ref-box").addClass("focused");
	}
	else{
		$(".ref-box").removeClass("focused");
	}

});

