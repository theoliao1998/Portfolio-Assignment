$(document).ready(function() {
	
	$("body").css("display", "none");
	$("body").fadeIn(1000);
	$(".occupy").css("height", $("footer").height());
	$("#bottom").css("height", $(window).height()-$("header").height()-$(".navigation").height()-$("#main").height());
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


$(window).scroll(function () {
	if ($(window).width()> 1000){
	 if ($(window).scrollTop() >= $('.navigation').offset().top) {
	 $('.navigation').addClass('isFixed');
	 } 
	 if ($(window).scrollTop() <$('header').height() ) {
	 $('.navigation').removeClass('isFixed');
	 }
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

