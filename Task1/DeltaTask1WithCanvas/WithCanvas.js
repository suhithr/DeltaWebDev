//make two boxes appear with random color on loading
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
	canvasApp();
}

function canvasApp() {

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	function changeColor(context) {
		context.fillStyle = "rgb(" + (Math.floor(Math.random() * 256)) + ","  + (Math.floor(Math.random() * 256)) + ","  + (Math.floor(Math.random() * 256)) + ")";
	}
			
	function drawScreenLoad() {

		//left rectangle
		changeColor(context);
		context.fillRect(0, 0, 50, 50);

		//right rectangle
		changeColor(context);
		context.fillRect(60, 0, 50, 50);
	}

	drawScreenLoad();
	
	
	//Required for firefox
	var event = new Event('click');

	//Make the boxes change colors accordingly on click
	canvas.addEventListener('click', function(event){

			//Assigns the coordinates of the click to x, y
			var canvas = document.getElementById("canvas");
			var x = new Number();
			var y = new Number();

			//for most modern browsers except firefox
			if(event.x != undefined && event.y != undefined) {
				x = event.x;
				y = event.y;
			}
			//for firefox
			else {
				x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}

			x = x - canvas.offsetLeft;
			y = y - canvas.offsetTop;

			//The conditions to check which box it's clicked in
			if( x <= 50 && y <=50 ) {
				//right rectangle
				changeColor(context);
				context.fillRect(60, 0, 50, 50);
			}
			else if( x <= 110 && x >= 60 && y <= 50) {
				//left rectangle
				changeColor(context);
				context.fillRect(0, 0, 50, 50);
			}
	}, false);
}