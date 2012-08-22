$(document).ready(function(){
   $('#spinner').click(function(){
    rotate(0);
    function rotate(degree) {	
		if (degree!=361) {
          // For webkit browsers: e.g. Chrome
        $('#container').css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
          // For Mozilla browser: e.g. Firefox
        $('#container').css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
          // Animate rotation with a recursive call
        setTimeout(function() { rotate(++degree); },.01);
		}
    }	  
	   });
});
