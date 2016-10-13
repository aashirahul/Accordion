

var toggleAccordion = function(event){
	$(".section").removeClass("open");
	$(".section").addClass("close");
	var target = event.target;
	var parent = $(target).parent();
	parent.removeClass("close");
	parent.addClass("open");
	
}
$(".title").click(toggleAccordion);

