$(document).ready(function() {
	
	$("body").css("display", "none");
	$("body").fadeIn(1000);
	$(".occupy").css("height", $("footer").height());

	$("a.page").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(500, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
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
