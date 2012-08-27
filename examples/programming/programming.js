// JavaScript Document
var grid = document.getElementById("grid");
var spans = grid.getElementsByClassName("span2");
var rows = grid.getElementsByClassName("row");
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
	console.log(x);
} while (x < spans.length);
