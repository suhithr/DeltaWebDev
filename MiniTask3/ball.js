window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
	canvasApp();
}

function canvasApp() {

	var x = 200;
	var y = 200;
	var r = 10;
	var cx = 0;
	var cy = 0;
	var canvas;
	var context;

	//Draws the circle
	function circle(x, y, r) {
		context.beginPath();
		context.arc(x, y, r, 0, Math.PI*2, false);
		context.fill();
	}

	function clear() {
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
		clear();
		circle(x, y, r);
		if(x+cx > 400 ) {
			x = 0;
		}
		if(x+cx < 0) {
			x = 400;
		}
		if(y+cy > 400) {
			y = 0;
		}
		if(y+cy < 0) {
			y = 400;
		}
		x += cx;
		y += cy;
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

