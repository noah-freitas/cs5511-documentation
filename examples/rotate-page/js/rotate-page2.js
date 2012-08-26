$(document).ready(function(){
   $('#spinner').click(function(){
	  
		do {
          // For webkit browsers: e.g. Chrome
        $('#container').css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
          // For Mozilla browser: e.g. Firefox
        $('#container').css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
          // Animate rotation with a recursive call
        setTimeout(function() { },.01);
		} 
		while (degree < 361);
    	  
	   });
});
