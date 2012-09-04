var timer = new Date();
var seconds = document.getElementById('seconds');
var dashboard = document.getElementById('dashboard');
var wakeup = document.getElementById('wakeup');
var start = document.getElementById('start');
var audioElement = document.getElementById('audiotag1');
var onOff = document.getElementById("toggle");
start.addEventListener('click', takeNap);
onOff.addEventListener('click', pausePlay);
audioElement.addEventListener('ended', playMusic);
function playMusic() {
	audioElement.play();
}
function pausePlay() {
	if (onOff.getAttribute("value") === "Pause Music") {
		audioElement.pause();
		onOff.setAttribute("value","Resume Music");
	} else {
		audioElement.play();
		onOff.setAttribute("value","Pause Music");
	}
}
function alarm() {
	timer.setSeconds(timer.getSeconds()-1);
	seconds.value = timer.getSeconds();
	if (timer.getSeconds() === 0) {
		audioElement.pause();
		wakeup.style.display = "block";
		dashboard.style.display = "none";			
	}
}
function takeNap() {
	 timer.setSeconds(seconds.value);
	 setInterval(alarm, 1000);
	 start.style.display = "none";
	 onOff.style.display = "inline";
     playMusic();
}