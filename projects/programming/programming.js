// JavaScript Document
// access the grid element - returns a single object
var grid = document.getElementById("grid");
// access the classes within grid - returns a set of objects
var spans = grid.getElementsByClassName("span1");
var rows = grid.getElementsByClassName("row");
// add a paragraph of text within each block of the grid
for (x in spans)
    {
		spans[x].innerHTML="<p>"+ x +"</p>";
	}
var content = grid.getElementsByTagName("p");
var x = 0;
do {
	
	content[x].style.width = "20px";
	content[x].style.margin = "10px auto 10px auto";
	content[x].style.textAlign = "right";
	
	
	x++;
} while (x < spans.length);
	
for (x in rows) {
	if (x%2)  {
		rows[x].style.backgroundColor = "#EEE";	
	}	
};	

