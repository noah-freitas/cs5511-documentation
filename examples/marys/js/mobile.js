/*
* jQuery TinySort - A plugin to sort child nodes by (sub) contents or attributes.
* Copyright (c) 2008-2011 Ron Valstar http://www.sjeiti.com/
*/
(function(b){b.tinysort={id:"TinySort",version:"1.1.0",copyright:"Copyright (c) 2008-2011 Ron Valstar",uri:"http://tinysort.sjeiti.com/",defaults:{order:"asc",attr:null,useVal:false,data:null,place:"start",returns:false,cases:false,sortFunction:null}};b.fn.extend({tinysort:function(h,d){if(h&&typeof(h)!="string"){d=h;h=null}var j=b.extend({},b.tinysort.defaults,d);if(!j.sortFunction){j.sortFunction=j.order=="rand"?function(){return Math.random()<0.5?1:-1}:function(z,w){var i=!j.cases&&z.s&&z.s.toLowerCase?z.s.toLowerCase():z.s;var A=!j.cases&&w.s&&w.s.toLowerCase?w.s.toLowerCase():w.s;if(c(z.s)&&c(w.s)){i=parseFloat(z.s);A=parseFloat(w.s)}return(j.order=="asc"?1:-1)*(i<A?-1:(i>A?1:0))}}var u={};var l=!(!h||h=="");var m=!(j.attr===null||j.attr=="");var q=j.data!==null;var e=l&&h[0]==":";var f=e?this.filter(h):this;this.each(function(x){var y=b(this);var A=l?(e?f.filter(this):y.find(h)):y;var z=q?A.data(j.data):(m?A.attr(j.attr):(j.useVal?A.val():A.text()));var w=y.parent();if(!u[w]){u[w]={s:[],n:[]}}if(A.length>0){u[w].s.push({s:z,e:y,n:x})}else{u[w].n.push({e:y,n:x})}});for(var n in u){var r=u[n];r.s.sort(j.sortFunction)}var g=[];for(var n in u){var r=u[n];var s=[];var v=b(this).length;switch(j.place){case"first":b.each(r.s,function(w,x){v=Math.min(v,x.n)});break;case"org":b.each(r.s,function(w,x){s.push(x.n)});break;case"end":v=r.n.length;break;default:v=0}var p=[0,0];for(var t=0;t<b(this).length;t++){var k=t>=v&&t<v+r.s.length;if(a(s,t)){k=true}var o=(k?r.s:r.n)[p[k?0:1]].e;o.parent().append(o);if(k||!j.returns){g.push(o.get(0))}p[k?0:1]++}}return this.pushStack(g)}});function c(e){var d=/^\s*?[\+-]?(\d*\.?\d*?)\s*?$/.exec(e);return d&&d.length>0?d[1]:false}function a(e,f){var d=false;b.each(e,function(h,g){if(!d){d=g==f}});return d}b.fn.TinySort=b.fn.Tinysort=b.fn.tsort=b.fn.tinysort})(jQuery);

// Analytics

var _gaq = _gaq || [];
_gaq.push(['_setAccount', '{{UA_NUMBER}}']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function setNonMobileCookie() {
	var date = new Date();
	date.setTime(date.getTime()+(1*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
    document.cookie = "mobile=no"+expires+"; path=/;domain={{DOMAIN_NAME(example.com)}}";
}

function findNearestOffice() {
	navigator.geolocation.getCurrentPosition(setDistances, locationError);
}

function locationError(error)  {
	var findOfficeBtn = $('#findClosestOffice');
	findOfficeBtn.before('<h3>We could not determine your location.  Please browse our offices below.</h3>');
	findOfficeBtn.remove();
	browseOffices();
}  

function setDistances(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	$('section.office').each(function() {
		var officeLat = $(this).jqmData('lat');
		var officeLon = $(this).jqmData('lon');
		var officeDistance = calculateDistance(lat, lon, officeLat, officeLon);
		$(this)
			.jqmData('distance', officeDistance)
			.find('.distance')
			.html(officeDistance + " mi &mdash; ");
	});
	showNearestOffice();
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

function showNearestOffice() {
	sortOfficesByDistance();
	$('#findClosestOffice').remove();
	var nearestOffice = $('section.office:first');
	nearestOffice.slideDown(500);
}

function sortOfficesByDistance() {
	$('section.office').tsort({data: 'distance'});
}

function browseOffices() {
	$('section.office:hidden').slideDown(500);
	$('#browseOffices').remove();
}