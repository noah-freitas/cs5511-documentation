var schedule = new Object();
var courses = [];
schedule.courses = [];
var html = '';
var ii;
var iii;
$.getJSON('classes.json',function(data) {           
	      courses = data;
	 });
$('#studentForm').submit(function() {
  schedule.studentName = $('#inputName').val();
  schedule.studentEmail = $('#inputEmail').val();
  displaySchedule();
  return false;
});
var displaySchedule = function() {
	$('#studentForm').hide();
	$('#studentNameDisplay').html(schedule.studentName);
    html = "";
	for (ii = 0; ii < courses.course.length; ii += 1)	 {
		 html += "<h3>"+ courses.course[ii].title +"</h3>"
		 html += "<select size=3>";
		 for (iii = 0; iii < courses.course[ii].section.length; iii += 1) {
			html += "<option value="+  iii +">"+ courses.course[ii].section[iii].instructor +"</option>";
		 }
		 html += "</select>";
	}
	$("#scheduleDisplay").append(html);
	$("#scheduleDisplay select").change(function(e) {
		schedule.courses.push($(this).val());
		$(this).hide();
	});
}
