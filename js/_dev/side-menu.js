jQuery(document).ready(function($){
	$('#sideMenuOpener').on('click', function(){
		$('#sideMenu').toggleClass('sideMenuOpen');
		$('.entire-site').toggleClass('entire-site--hidden');
		$('.menu-icon').toggleClass('transformed');
		$('.menu-icon__container').toggleClass('transformed');
	});
	$('#sideMenu').on('click', function(){
		$('#sideMenu').removeClass('sideMenuOpen');
		$('.entire-site').removeClass('entire-site--hidden');
		$('.menu-icon').removeClass('transformed');
		$('.menu-icon__container').removeClass('transformed');
	});
	$(document).keyup(function(e) { 
	    if (e.keyCode == 27) {
	    	$('#sideMenu').removeClass('sideMenuOpen');
	    	$('.entire-site').removeClass('entire-site--hidden');
	    	$('.menu-icon').removeClass('transformed');
	    	$('.menu-icon__container').removeClass('transformed');
	    } 
	});
});