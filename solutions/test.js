  var grid = document.getElementById("grid");
   
    var spans = grid.getElementsByClassName("span1");
    var rows = grid.getElementsByClassName("row");

   
    for (var ii = 0; ii < spans.length; ii++) {
    spans[ii].innerHTML = "<p>" + ii + "</p>";
    }



    var content = grid.getElementsByTagName("p"),
    x = 0,
    len = content.length;
    do {
    content[x].style.width = "20px";
    content[x].style.margin = "10px auto ";
    content[x].style.textAlign = "right";
	content[x].style.textDecoration = "underline";
	content[x].style.fontSize = "22px";
    x++;
    } while (x < len);
	
	

    for (var x = 0, len = rows.length; x < len; x++) {
    if (x % 2 === 0) {
    rows[x].style.backgroundColor = "#A3D2D9";
    }
    }
	
	for (var ii = 0; ii < spans.length; ii++) {
    if (ii % 6 == 0) {
    spans[ii].style.backgroundColor = "#EEE";
    }
    }
	
	

    for (q = 0, len = spans.length; q < len; q++) {
    if (q % 2) {
    spans[q].firstChild.setAttribute("class", "label label-info");
    }
    };


	
	

    



