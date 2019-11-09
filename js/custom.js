$(document).ready(function() {
	reshape();
	let pref = window.matchMedia('(prefers-reduced-motion: no-preference)');
	if (pref.matches==true || pref.media =="not all"){
		$("body").css("display", "none");
		$("body").fadeIn(1000);
	
		$("a.page,a.flip-card-back").click(function(event){
			event.preventDefault();
			linkLocation = this.href;
			$("body").fadeOut(500, redirectPage);		
		});
	}
		
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
	if (($(window).width() < 600)){
		$("img:not(.preview)").css("max-width", "100%");
		$("img:not(.preview)").css("height", ($(window).width()/$(window).height()*100).toString(10)+"vh");
	} else {
		$("img:not(.preview)").css("height", "50vh");
		$("img:not(.preview,#overview)").css("max-width","55vh");
		// if ($("#widest").width() / $(window).width() > 0.8){
		// 	$("#widest").css("flex-direction","column");
		// } else {
		// 	$("#widest").css("flex-direction","row");
		// }
	}
}

$(window).scroll(function () {
	if ($(window).width()> 1050){
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

// $("a.contenttabel-body").click(function(event){
// 	// location.href = $(this)[0]['href'];
// 	$($(this)[0]['href'].slice($(this)[0]['href'].search('#'))).focus();
	
// 	$('html, body').animate({
// 		scrollTop: target.offset().top
// 	  }, 1000, function() {
// 		$($(this)[0]['href'].slice($(this)[0]['href'].search('#'))).focus();}
// 		)
// 	event.preventDefault();
// })
