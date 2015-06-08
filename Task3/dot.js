window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
	canvasApp();
}

function canvasApp() {

	var x;
	var y;
	var storage = window.localStorage;

	//Setting the initial value of x
	if(!storage.getItem('x') || storage.getItem('y') == undefined || !isFinite(storage.getItem('x'))) {
		x = 200;
	}
	else {
		x = storage.getItem('x');
	}

	//Setting the initial value of y
	if(!storage.getItem('y') || storage.getItem('y') == undefined || !isFinite(storage.getItem('y'))) {
		y = 200;
	}
	else {
		y = storage.getItem('y');
	}

	var r = 10;
	var cx = 0;
	var cy = 0;
	var canvas;
	var context;

	//Draws the circle
	function circle( x, y, r) {
		
		context.beginPath();
		context.arc(x, y, r, 0, Math.PI*2, false);
		context.fill();
	}

	function wipe() {
		context.clearRect(0, 0, 400, 400);
	}

	//Draws the initial circle and controls the drawing
	function init() {
		canvas = document.getElementById("canvas");
		context = canvas.getContext("2d");
		window.onkeydown = ctl; //The bug was that onkeypress and onkeyup events were clashing in chrome browser
		window.onkeyup = rls;

		return setInterval(draw, 10);
	}
	
	//Draws the ball in the new location,note: the ball will not bounce off the walls
	function draw() {
		
		wipe();
		circle(x, y, r);
		
		//Made sure everything was a number when comparing because leaving it to the interpreter to decide led to some weirdness
		if(Number(x) + Number(cx)> 400 ) {
			x = 0;
		}
		if(Number(x) + Number(cx) < 0) {
			x = 400;
		}
		if(Number(y) + Number(cy) > 400) {
			y = 0;
		}
		if(Number(y) + Number(cy) < 0) {
			y = 400;
		}

		//Updating the local storage along with the values of x and y
		x = Number(x) + Number(cx);
		storage.setItem('x', Number(x));

		y = Number(y) + Number(cy);
		storage.setItem('y', Number(y));

	}

	//Makes sure the ball stops moving after the key is released for full control
	function rls() {
		cx=0;
		cy=0;
	}

	//Adjusts the direction the ball is to move in according ot the key pressed
	function ctl(e) {
		if(e.keyCode==37) {
			cx = -2;
			cy = 0;
		}
		if(e.keyCode==38) {
			cx = 0;
			cy = -2;
		}
		if(e.keyCode==39) {
			cx = 2;
			cy = 0;
		}
		if(e.keyCode==40) {
			cx = 0;
			cy = 2;
		}
	}
	
	init();

}

