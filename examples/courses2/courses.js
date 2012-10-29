var schedule = {};
var courses = [];
schedule.courses = [];
var html = '';
var ii;
var iii;
var displaySchedule = function () {
    'use strict';
    $('#studentForm').hide();
    $('#studentNameDisplay').html(schedule.studentName);
    html = "";
	for (ii = 0; ii < courses.course.length; ii += 1) {
		html += "<h3>" + courses.course[ii].title + "</h3>";
		html += "<select size=3>";
		for (iii = 0; iii < courses.course[ii].section.length; iii += 1) {
			html += "<option value=" +  iii + ">" + courses.course[ii].section[iii].instructor + "</option>";
		}
		html += "</select>";
	}
	$("#scheduleDisplay").append(html);
	$("#scheduleDisplay select").change(function (e) {
		var newSection = courses.course[$("#scheduleDisplay select").index($(this))].section[$(this).val()];
		newSection.course = courses.course[$("#scheduleDisplay select").index($(this))];
		schedule.courses.push(newSection);
		$(this).hide();
	});
}
$().getJSON('classes.json', function (data) {
    'use strict';
    courses = data;
});
$('#studentForm').submit(function () {
    'use strict';
    schedule.studentName = $('#inputName').val();
    schedule.studentEmail = $('#inputEmail').val();
    displaySchedule();
    return false;
});
$('#inputName').blur(function () {
    'use strict';
    if (this.validity.patternMismatch === true) {
        this.setCustomValidity('First Middle and Last Names only please');
	} else {
	    this.setCustomValidity('');
	}
});
$('#scheduleForm').submit(function () {
    'use strict';
    html = '';
	html += schedule.studentName + schedule.studentEmail;
	for (ii = 0; ii < schedule.courses.length; ii += 1) {
		html += "<br>" + schedule.courses[ii].instructor + schedule.courses[ii].room;
		if ( schedule.courses[ii].day.length >0 ) {
		for (iii=0; iii < schedule.courses[ii].day.length; iii += 1) {
			html +=  "  " + schedule.courses[ii].day[iii];
	     }
		} else {
			html += "  " + schedule.courses[ii].day;
		}
	}
	$("#outputSchedule").append(html);
	$(this).hide();
    return false;
});
