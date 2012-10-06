// JavaScript Document
 $(document).ready(function() {
	 var ii=0,
	 len=0,
	 classes = [];
  $("#sections").hide();	 
  $.ajax({
      url: "classes.json"
     }).done(function(data) { 
	 classes = JSON.parse(data);	
	 len = classes.course.length;
	 for (ii=0;ii<len;ii++) {
	 $("#courses").append("<option value="+ii+" >"+classes.course[ii].description+"</option>");
	 }  
	 });
	 $("#courses").change(function(e) {
		 $("#sections").html("<option>Choose a Section</option>");
		 len = classes.course[e.target.value].section.length;
		 ii=0;
		  for (ii=0;ii<len;ii++) {
	 $("#sections").append("<option value="+ii+" >"+classes.course[e.target.value].section[ii].instructor+"</option>");
	 }	
	  $("#sections").show();	
	 });
 });