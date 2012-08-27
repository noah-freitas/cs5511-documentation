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
for (x in rows) {
	if (x%2) {
		rows[x].style.backgroundColor = "#DDD";
	}
};
	for (x in spans) {
	if (x%2 == 0)  {
		spans[x].style.backgroundColor = "black";
		
	}
	
};
var x = 0;
do {
	
	spans[x].style.padding = "10px auto;";
	spans[x].style.color = "white";
	x++;
} while (x < spans.length);
