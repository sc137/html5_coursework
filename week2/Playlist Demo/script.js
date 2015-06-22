var audio;
var myAudio;
var currentAudio = 0;
var sources = [
	"audio/PSA%20-%20Close%20the%20Tap%20or%20Take%20the%20Rap.mp3",
	"audio/PSA%20-%20Older%20Americans%20Month.mp3",
	"audio/PSA-%20Friedman%20-%20AAAPIHM.wav"
];

function loadNextAudio() {
	myAudio.src = sources[currentAudio % sources.length]
	myAudio.load();
	currentAudio++;
}

//listener plays the audio
function loadAndPlayNextAudio() {
	loadNextAudio();
	myAudio.play();
}

//called on page load
function init() {
	//get the audio element
	myAudio = document.querySelector("#myAudio");
	
	//define a callback function each time audio ends
	myAudio.addEventListener('ended', loadAndPlayNextAudio, false);
	
	//load the first audio when the page is loaded
	loadNextAudio();
}
