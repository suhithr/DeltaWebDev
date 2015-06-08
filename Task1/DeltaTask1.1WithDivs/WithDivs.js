//Changes to a Random Color on Page Load
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
	leftbox = document.getElementById("leftbox");
	rightbox = document.getElementById("rightbox");
	
	//changes to a random RGB color
	function changeColor(box) {
		box.style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 256)) + ","  + (Math.floor(Math.random() * 256)) + ","  + (Math.floor(Math.random() * 256)) + ")";
	}

	//changes height and width randomly, however it checks the size
	//of the other div so neither of them leave the screen
	function changeSize(otherbox, clickedbox) {
		var h = Math.floor(Math.random() * (window.innerHeight - clickedbox.clientHeight));
		otherbox.style.height = h + 'px';
		var w = Math.floor(Math.random() * (window.innerWidth - clickedbox.clientWidth));
		otherbox.style.width = w + 'px';
	}

	//setting random colors on loading
	changeColor(leftbox);
	changeColor(rightbox);

	//setting random colors on click
	leftbox.addEventListener('click', function(event){
		changeColor(rightbox);
		changeSize(rightbox, leftbox);
	}, false);
	rightbox.addEventListener('click', function(event){
		changeColor(leftbox);
		changeSize(leftbox, rightbox);
	}, false);
}