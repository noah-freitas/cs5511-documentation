// All the code is wrapped in a self-executing, anonymous function to keep
// the global namespace clean.

(function () {
	// Tell the browser to parse the JavaScript as ECMAScript 5 Strict.
	// This is somewhat like a DOCTYPE for js.
	'use strict';

	// access the grid element - returns a single object
	// access the grid rows and cells elements - each returns a set of objects
	var grid = document.getElementById("grid"),
		spans = grid.getElementsByClassName("span1"),
		rows = grid.getElementsByClassName("row"),
		x,
		len,
		content;

	// Iterate over each span, adding a paragraph and index number.
	for (x = 0, len = spans.length; x < len; x += 1) {
		spans[x].innerHTML = "<p>" + x + "</p>";
	}

	// Assign our content variable, since the <p> tags did not exist on the page 
	// until now.
	content = grid.getElementsByTagName("p");

	// Set up the helper variables for the DO WHILE loop.
	x = 0;
	len = content.length;

	// Iterate over each <p> that we added, and adjust its styles.
	do {
		content[x].style.width = "20px";
		content[x].style.margin = "10px auto 10px auto";
		content[x].style.textAlign = "right";
		x += 1;
	} while (x < len);

	// Iterate over the rows, adding a background color to odd rows.
	for (x = 0, len = rows.length; x < len; x += 1) {
		if (x % 2 === 0) {
			rows[x].style.backgroundColor = "#EEE";
		}
	}

	// Iterate over the spans, adding a class to even spans.
	for (x = 0, len = spans.length; x < len; x += 1) {
		if (x % 2) {
			spans[x].firstChild.setAttribute("class", "label label-inverse");
		}
	}
}());