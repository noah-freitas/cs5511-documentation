$(document).ready(function() {
   $('#one').bind('swipeleft', function(e){
	  $.mobile.changePage( "#two" );
   });  
   $('#two').bind('swipeleft', function(e){
	  $.mobile.changePage( "#three" );
   });
   $('#two').bind('swiperight', function(e){
	  $.mobile.changePage( "#one" );
   });
   $('#three').bind('swiperight', function(e){
	  $.mobile.changePage( "#two" );
   });
   $("#srmap").bind('vclick',function(e) {
	   window.open("http://maps.google.com/maps?q=santa+rosa+ca");
   });
  });  
  $("#three").live("pageinit",function(event, data) {
   navigator.geolocation.getCurrentPosition(getLocations);
  });
  function getLocations(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var geocoder = new google.maps.Geocoder();
	$('a.branch').each(function() {
		var that = this;
		var officeAddress = $(this).text();	    
		geocoder.geocode( { 'address': officeAddress}, function(results, status) {
			var officeLat = results[0].geometry.location.lat();
			var officeLng = results[0].geometry.location.lng();
			var officeDistance = calculateDistance(lat, lon, officeLat, officeLng);
			that.innerHTML = that.innerHTML + "<br>" + officeDistance + "miles as the crow flies";
		});	
	});
}
// Returns the distance between two points in miles rounded to the nearest tenth.
function calculateDistance(lat1, lon1, lat2, lon2) {
	var R =  3959;
	var dLat = toRad(lat2-lat1);
	var dLon = toRad(lon2-lon1);
	var lat1 = toRad(lat1);
	var lat2 = toRad(lat2);
	
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	return Math.round(R * c * 10)/10;
}
 
function toRad(deg) {
    return deg * Math.PI / 180;
}