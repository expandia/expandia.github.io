jQuery(document).ready(function($){
	
	// Set the count to 1
	var count = 1;
	// Count slides
	var slideCount = $('.work__right--looped').length;

	// Animation Function
	$.fn.extend({
	    animateCss: function (animationName, showHide) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	            if (showHide == "hide") {
	            	$(this).addClass('hidden');
	            } else if (showHide == "show") {
	            	$(this).removeClass('hidden');
	            }
	        });
	    }
	});

	// Create next function
	function next(){
		$('#work__left-container-looped--' + count).animateCss('bounceOutLeft', 'hide');
		$('#work__right--looped--' + count).animateCss('bounceOutLeft', 'hide');
		
		// if count equals slideCount then it's the last slide so set count to 1
		if (count === slideCount) {
			count = 1;
			console.log(count);
		} else {
			// Up the count by 1
			count++;
			console.log(count);
		}
		
		// Set new count item to visible
		$('#work__left-container-looped--' + count).removeClass('hidden');
		$('#work__left-container-looped--' + count).animateCss('bounceInRight', 'show');
		$('#work__right--looped--' + count).removeClass('hidden');
		$('#work__right--looped--' + count).animateCss('bounceInRight', 'show');
	}

	// Create previous function
	function prev(){
		$('#work__left-container-looped--' + count).animateCss('bounceOutRight', 'hide');
		$('#work__right--looped--' + count).animateCss('bounceOutRight', 'hide');
		// if count equals 1 then it's the first slide so set count to slideCount
				if (count === 1) {
					count = slideCount;
					// console.log(count);
				} else {
					// Up the count by 1
					count--;
					// console.log(count);
				}
		// Set new count item to visible
		$('#work__left-container-looped--' + count).removeClass('hidden');
		$('#work__left-container-looped--' + count).animateCss('bounceInLeft', 'show');
		$('#work__right--looped--' + count).removeClass('hidden');
		$('#work__right--looped--' + count).animateCss('bounceInLeft', 'show');
	}

	// When right arrow is clicked, fire next() function.
	$('#work__control--next').on('click', function() {
		if ('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend') {
			next();
		}
		else {

		}
		
	});

	// When left arrow is clicked, fire next() function.
	$('#work__control--prev').on('click', function() {
		prev();
	});

	// Detect keyup
	$(document).keyup(function(e) {
		// If key is right (39), fire next()
		if (e.keyCode === 39) {
			next();
		}
		// Else if key is left (37) fire prev
		else if (e.keyCode === 37) {
			prev();
		}
	});

});