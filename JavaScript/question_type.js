$(document).ready(function(){
	$("#who_list li, #what_list li, #when_list li, #where_list li, #why_list li, #how_list li").hide();

	$("#who").click(function(){
		$("#who_list li").toggle();

		var height = $(this).height();

		if (height === 50) {
			$(this).css("height", 100);
		}
		else if (height === 100) {
			$(this).css("height", 50);
		}
	});

	$("#what").click(function(){
		$("#what_list li").toggle();

		var height = $(this).height();

		if (height === 50) {
			$(this).css("height", 100);
		}
		else if (height === 100) {
			$(this).css("height", 50);
		}
	});

	$("#when").click(function(){
		$("#when_list li").toggle();

		var height = $(this).height();

		if (height === 50) {
			$(this).css("height", 100);
		}
		else if (height === 100) {
			$(this).css("height", 50);
		}
	});

	$("#where").click(function(){
		$("#where_list li").toggle();

		var height = $(this).height();

		if (height === 50) {
			$(this).css("height", 100);
		}
		else if (height === 100) {
			$(this).css("height", 50);
		}
	});

	$("#why").click(function(){
		$("#why_list li").toggle();

		var height = $(this).height();

		if (height === 50) {
			$(this).css("height", 100);
		}
		else if (height === 100) {
			$(this).css("height", 50);
		}
	});

	$("#how").click(function(){
		$("#how_list li").toggle();

		var height = $(this).height();

		if (height === 50) {
			$(this).css("height", 100);
		}
		else if (height === 100) {
			$(this).css("height", 50);
		}
	});
});