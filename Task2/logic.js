
var graphhgt = 400; //Height of the graph div
var max = 0;
var ctr = 0;
var lshift = 30;
var val;

function addCol() {

	val = window.prompt("Value?", 2);
	val = Number(val);

	var change = 0;
	if( val > max ) {
		max = val;
		change = 1; //To inform that a change needs to happen
	}

	//Calculating Div height
	var divhgt;
	var ratio;

	ratio = val / max;
	divhgt = ratio * graphhgt;

	//Incrementing the column number
	ctr++;

	//Creating the new Div and configuring it
	var newDiv = document.createElement("div");
	
	newDiv.style.height = divhgt + 'px';
	newDiv.textContent = val;
	var shift = graphhgt - divhgt;
	//for aesthetic purposes
	shift--;
	newDiv.style.transform = "translate("+lshift+ "px, "+ shift + "px)";

	newDiv.setAttribute("id", "col" + ctr);
	newDiv.className += "bar";
	
	lshift+=30;

	//Inserting the Div
	var outerDiv = document.getElementById("graph");
	var theFirstChild = outerDiv.firstChild;
	var prevDiv = outerDiv.lastChild;
	
	if( ctr > 1) {
		outerDiv.insertBefore( newDiv, prevDiv.nextSibling);
	}
	else {
		outerDiv.insertBefore( newDiv, theFirstChild );
	}

	//If resizing is required
	if(change > 0) {
		resize(val, newDiv, lshift-30);
	}

}

//Resize function
function resize(newBig, newDiv, preslshift) {


	var xshift = preslshift;
	var beforeDiv = newDiv.previousSibling;
	var newhgt;
	var temp;
	var colNo = ctr -1;
	

	while( ctr > 0 ) {

		xshift -=30;

		//Setting the new, adjusted heights of the elements
		newhgt = graphhgt;
		temp = beforeDiv.textContent / newBig;
		newhgt *= temp;
		var yshift = graphhgt - newhgt;
		//For aesthetic purposes
		yshift--;

		beforeDiv.style.height = newhgt + 'px';
		beforeDiv.style.transform = 'translate(' + xshift + 'px, ' + yshift +'px)';

		colNo--;
		beforeDiv = document.getElementById("col" + colNo);

	}
}

function srt() {
	var prnt = document.getElementById("graph");
	var bar = prnt.lastChild;


	var barhgt = [];
	var bartext = [];

	//Populating the height and text arrays
	barhgt.push(parseFloat(bar.style.height));
	bartext.push(parseInt(bar.textContent));

	while( bar.previousSibling != null) {
		barhgt.push(parseFloat(bar.previousSibling.style.height));
		bartext.push(parseInt(bar.previousSibling.textContent));
		bar = bar.previousSibling;
	}

	//Sorting the arrays
	barhgt.sort(function(a, b) {
		return a-b;
	});
	bartext.sort( function(a, b) {
		return a-b;
	});

	var i=0;
	var xshift = 30;
	//Sorting the divs by modifying them according to the arrays
	while( barhgt[i] != undefined){
		bar.style.height = barhgt[i] + 'px';

		var yshift = graphhgt - barhgt[i];
		yshift--;

		bar.style.transform = "translate(" + xshift + "px, " + yshift +"px)";
		bar.textContent = bartext[i];

		i++;
		xshift +=30;
		bar = bar.nextSibling;

	}
}