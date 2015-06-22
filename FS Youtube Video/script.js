var video;

function init() {
	// called on page load
	
	video = document.querySelector("#myVideo");
	
	// set initial height and width values
	video.width = window.innerWidth;
	video.height = window.innerHeight;
	
	// change size when browser is resized
	window.onresize = function() {
		video.width = window.innerWidth;
		video.height = window.innerHeight;
	}
}