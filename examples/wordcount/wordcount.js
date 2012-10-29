var countries = [ // {country:"America",abbr:"US"},
        {country: "Egypt", abbr: "EG"},
        {country: "Afghanistan", abbr: "AF"},
        {country: "Iran", abbr: "IR"},
        {country: "Iraq", abbr: "IQ"},
        {country: "China", abbr: "CN"},
        {country: "Russia", abbr: "RU"},
        {country: "Greece", abbr: "GR"},
        {country: "Pakistan", abbr: "PK"},
        {country: "Libya", abbr: "LY"},
        {country: "Turk", abbr: "TR"},
        {country: "Mali", abbr: "ML"},
        {country: "Qatar", abbr: "QA"},
        {country: "Yemen", abbr: "YE"},
        {country: "Saudi", abbr: "SA"},
        {country: "North Korea", abbr: "KP"},
        {country: "Japan", abbr: "JP"},
        {country: "Syria", abbr: "SY"},
        {country: "Israel", abbr: "IL"}];
var text = "";
var ii = 0;
function drawMentionMap() {
	'use strict';
    var data = new google.visualization.DataTable(),
	    options = {colorAxis: {colors: ['pink', 'red']}},
		chart;
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Mentions');
    data.addRows(countries.length);
    for (ii = 0; ii < countries.length; ii += 1) {
	    if (text.match(new RegExp(countries[ii].country, "g"))) {
	        data.setCell(ii, 0, countries[ii].abbr);
	        data.setCell(ii, 1, text.match(new RegExp(countries[ii].country, "g")).length);
	    }
    }
    chart = new google.visualization.GeoChart(document.getElementById('mentionmap'));
    chart.draw(data, options);
}
google.load('visualization', '1', {'packages': ['geochart']});
$(".btn-primary").click(function () {
	'use strict';
	var fileName = $(this).attr('id') + ".html";
	$.ajax({
        url: fileName,
        success: function (data) {
		    $("#transcript").html("");
            $("#transcript").append(data);
		    text = $("#transcript").text();
		    drawMentionMap();
        }
    });
});





