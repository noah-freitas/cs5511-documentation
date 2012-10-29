// JavaScript Document
var courses = [];
var mySchedule = new Object();
var courseNumber = 0;
var loadSchedule = function () {
	 var that = this;	
	  $.getJSON('classes.json',function(data) {           
	      that.courses = data;
	 });
 } 
var showSchedule = function() {
	var html = "<select size="+courses.course.length+ ">";
	for (ii = 0; ii < courses.course.length; ii += 1)	 {
		 html += "<option value="+ ii +">"+ courses.course[ii].title +"</option>"
	}
    html += "</select>";
	$("#courseList").append(html);
	$("#courseList select").change(function(e) {
		 $("#sectionList").html("");
		 courseNumber = e.target.value;
		 var html = "<select size="+courses.course[courseNumber].section.length+ ">";
		 for (ii = 0; ii < courses.course[courseNumber].section.length; ii += 1)	 {
			 html += "<option value="+ ii +">"+ courses.course[courseNumber].section[ii].instructor +"</option>"
		 };
		 html += "</select>";
	    $("#sectionList").append(html);
		});
	$("#schedule").show();
}
loadSchedule();
$("#schedule").hide();

$("#getStudent").click(function(e) {
	mySchedule.studentName = $("#inputName").val();
	mySchedule.studentEmail = $("#inputEmail").val();	
	showSchedule();	
});
