jQuery(document).ready(function($){
	$('.wdd-page-loop__top').on('click', function() {
			
		var clicks = $(this).data('clicks');
		
		if (clicks) {
			$(this).siblings().addClass('closed');
			$(this).siblings().removeClass('open');
		} 

		else {
			$(this).siblings().addClass('open');
			$(this).siblings().removeClass('closed');
		}
		
		$(this).data("clicks", !clicks);

	});
});