$(document).ready(function(e) {
	for (ii=0;ii < wineries.length;ii=ii+1) {
		
		$("#wineries").append();
		
	}
	
	
    $("#getWineries").bind('vclick',function(e) {
	    $.mobile.changePage( "#two" );
		listWineries();
   });
});

function listWineries() {
	var map;
    var service;
    var infowindow;
	var city = $("#textinput1").val() + ", CA";
	var geoCity = new google.maps.LatLng();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': city}, function(results, status) {
		 geoCity = results[0].geometry.location;
	});
  

    map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: geoCity,
      zoom: 15
    });

  var request = {
    location: geoCity,
    radius: '500',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);


function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
	  var request = {
          reference: results[i].id
      };
      service.getDetails(request, callback);

   function callback(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          $("#placeResults").append(place.name);
	
  }
}
    }
  }
}
}