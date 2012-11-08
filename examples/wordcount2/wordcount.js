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
		chart,
		mentions,
		resultsTable,
		pchart;
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Mentions');
    for (ii = 0; ii < countries.length; ii += 1) {	
	    mentions = text.match(new RegExp(countries[ii].country, "g"));	
	    if (mentions) {
			data.addRow([countries[ii].abbr + ":" + countries[ii].country,mentions.length]);
        }
    }
	data.sort([{column: 1, desc:true}]);
    chart = new google.visualization.GeoChart(document.getElementById('mentionmap'));
    chart.draw(data, options);
	resultsTable = new google.visualization.Table(document.getElementById('mentiontable'));
	resultsTable.draw(data);
	
	pchart = new google.visualization.PieChart(document.getElementById('mentionpie'));
	pchart.draw(data);
}
google.load('visualization', '1', {'packages': ['geochart','table','corechart']});
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





