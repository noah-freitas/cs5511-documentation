// JavaScript Document
 $(document).ready(function() {
	 var ii=0,
	 len=0,
	 classes = [],
	 mySchedule = [],
	 courseNumber;	 
	 $("#sections").hide();	 
     loadClasses("classes.json");
	 console.log(this);
	
	 displayCourses();
	
	 /*$("#courses").change(function(e) {
		$("#sections").html("<option>Choose a Section</option>");
		 len = classes.course[e.target.value].section.length;
		 ii=0;
		  for (ii=0;ii<len;ii++) {
	           $("#sections").append("<option value="+ii+" >"+classes.course[e.target.value].section[ii].instructor+"</option>");
	      }	
		  courseNumber=e.target.value;
		  mySchedule.push(classes.course[e.target.value]);
		  
	    $("#sections").show();	
	 });
	  $("#sections").change(function(e) {
		  mySchedule[mySchedule.length-1].section = classes.course[courseNumber].section[e.target.value];
		   $('#schedule > tbody').append('<tr><td>'+mySchedule[mySchedule.length-1].description+'</td><td>'+mySchedule[mySchedule.length-1].section.day   +'</td> </tr>');
	  });*/
	  

 function displayCourses() {
	     len = classes.course.length;
	     for (ii=0;ii<len;ii++) {			 
	           $("#courses").append("<option value="+ii+" >"+classes.course[ii].description+"</option>");
	      } 
 }
 function loadClasses(CSSchedule) {
	 var that = this;
	
	  $.getJSON(CSSchedule,function(data) {           
	      that.classes = data;
		 
	 });
 } 
 });