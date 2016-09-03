jQuery(document).ready(function($){
	function svgSource(svg, element, AppOrIa){
		var elementStripped = element.replace('.', '');
		var svgCode = '<svg class="' + elementStripped + '__after"><use xlink:href="#svg-' + svg + '" /></svg>';
		
		if (AppOrIa == "after") {
			return $(element).append(svgCode);
		}
		else if (AppOrIa == "append") {
			return $(svgCode).insertAfter(element);
		}
	}

	// List 
	svgSource('triangle', '.more', 'after');
	svgSource('triangle', '.work__control-body--prev', 'after');
	svgSource('triangle', '.work__control-body--next', 'after');
	// svgSource('expandia__dash-icon', '.global__title', 'append');
});