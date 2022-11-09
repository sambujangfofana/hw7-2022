var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1")
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function(){
	video.play()
	document.getElementById("volume").textContent = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = 0.9 * video.playbackRate
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate / 0.9
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function(){
	if ((video.currentTime + 10) > video.duration){
		video.currentTime = 0
	} else {
		video.currentTime = video.currentTime + 10;
	}
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function(){
	if (document.getElementById("mute").textContent == "Mute"){
		video.muted = true;
		document.getElementById("mute").textContent = "Unmute"
	} else {
		video.muted = false;
		document.getElementById("mute").textContent = "Mute"
	}
});

document.querySelector("#slider").addEventListener("click", function(){
	video.volume = document.getElementById("slider").value / 100
	document.getElementById("volume").textContent = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function(){
	document.getElementById("player1").classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	document.getElementById("player1").classList.remove("oldSchool")
});