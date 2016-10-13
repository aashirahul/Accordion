

var toggleAccordion = function(event){
	$(".section").removeClass("open");
	var target = event.target;
	var parent = $(target).parent();
	parent.addClass("open");
	
}
$(".title").click(toggleAccordion);

