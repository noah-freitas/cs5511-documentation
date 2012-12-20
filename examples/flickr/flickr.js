$(document).ready(function() {	
  $("#searchPix").bind("vclick",function(e) {
	  $(".flickr").remove();
	   var terms = $("#term").val();
	   var flickrURL = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&method=flickr.photos.search&tags="+ terms +"&jsoncallback=?";
	   $.getJSON(flickrURL,function(data) {
		   $.each(data.items,function(i, photo) {
			   pageHTML="<div class=flickr data-role=page id=page"+i+"><div data-role=header><h1>"+photo.title+"</h1></div><p>photo"+(i+1)+"</p><img width=260 height=260 src="+photo.media.m+" /><p>"+photo.tags+"</p><a data-role=button href=#one>Home</a></div>";
			   $("body").append(pageHTML);
			   if (i>0) {
			   $("#page"+i).bind("swiperight",function() {
				   $.mobile.changePage("#page"+(i-1),
	                {transition: "pop"} );
			   });
			   } else {
				$("#page"+i).bind("swiperight",function() {
				   $.mobile.changePage("#one",
	                {transition: "pop"} );
			   });   
			   }
			   if (i<data.items.length) {
			   $("#page"+i).bind("swipeleft",function() {
				   $.mobile.changePage("#page"+(i+1) ,
	                {transition: "pop"});
			   });
			   }
		   });
		    $.mobile.changePage("#page0",
	                {transition: "pop"});
	   });	   
  });
  $("#one").bind("swipeleft",function() {
	   $.mobile.changePage("#page0",
	                {transition: "pop"});
  });
});