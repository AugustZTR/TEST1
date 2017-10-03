jQuery(document).ready(function() 
	{ 
		var topmenu = jQuery("#nav_box"); 
		var topmenu_top = topmenu.offset().top; 
		reset_topmenu_top(topmenu, topmenu_top);

		jQuery(window).scroll(function() 
		{ 
			reset_topmenu_top(topmenu, topmenu_top); 
		}); 
	});

function reset_topmenu_top(topmenu, topmenu_top) 
	{ 
		var document_scroll_top = jQuery(document).scrollTop(); 
		if (document_scroll_top > topmenu_top) 
		{ 
			topmenu.css('top', document_scroll_top); 
		} 
		if (document_scroll_top <= topmenu_top) 
		{ 
			topmenu.css('top', topmenu_top); 	
		} 
	} 
