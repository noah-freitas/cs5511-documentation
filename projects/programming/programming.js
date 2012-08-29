// JavaScript Document
// access the grid element - returns a single object
var grid = document.getElementById("grid");
// access the classes within grid - returns a set of objects
var spans = grid.getElementsByClassName("span1");
var rows = grid.getElementsByClassName("row");
// add a paragraph of text within each block of the grid
for (var ii = 0, len = spans.length; ii < len; ii++)
    {
		spans[ii].innerHTML = "<p>" + ii + "</p>";
	}
var content = grid.getElementsByTagName("p");
var x = 0;
do {
	
	content[x].style.width = "20px";
	content[x].style.margin = "10px auto 10px auto";
	content[x].style.textAlign = "right";
	
	
	x++;
} while (x < content.length);
	
for (var ii = 0, len = rows.length; ii < len; ii++) {
	if (ii%2 == 0)  {
		rows[ii].style.backgroundColor = "#EEE";	
	}	
};	
for (var ii = 0, len = spans.length; ii < len; ii++) {
	if (ii%2)  {
		
		spans[ii].firstChild.setAttribute("class","label label-inverse");	
	}	
};	

