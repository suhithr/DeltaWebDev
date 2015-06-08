//Changes to a Random Color on Page Load
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
	leftbox = document.getElementById("leftbox");
	rightbox = document.getElementById("rightbox");
	
	//changes to a random RGB color
	function changeColor(box) {
		box.style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 256)) + ","  + (Math.floor(Math.random() * 256)) + ","  + (Math.floor(Math.random() * 256)) + ")";
	}

	//setting random colors on loading
	changeColor(leftbox);
	changeColor(rightbox);

	//setting random colors on click
	leftbox.addEventListener('click', function(event){
		changeColor(rightbox);
	}, false);
	rightbox.addEventListener('click', function(event){
		changeColor(leftbox);
	}, false);
}