const video = document.getElementById("vd");
const player = document.getElementById("play");
const stoper = document.getElementById("stop");
const ranger =document.getElementById("range");
const timer = document.getElementById("time");


player.addEventListener("click", videostatus);
video.addEventListener("click", videostatus);
function videostatus(){
    if (video.paused) {
        video.play();
    }else{
        video.pause();
    }
}


stoper.addEventListener("click", playicon);
video.addEventListener("play", playicon);
video.addEventListener("pause", playicon);
function playicon() {
    if (video.paused) {
        player.innerHTML = '<i class="fa fa-play fa-2x"></i>';
       
    }else{
        player.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

stoper.addEventListener("click", stopVideo);
video.addEventListener("stop", stopVideo);
function stopVideo() {
    video.time = 0;
    video.pause();
}


 video.addEventListener("timeupdate", updateTime);
function updateTime() {
    ranger.value = (video.currentTime / video.duration)* 100;

    let minute = Math.floor(video.currentTime / 60);
    if (minute < 10) {
        minute = "0" + String(minute);
    }

    let second = Math.floor(video.currentTime % 60);
    if (second < 10) {
        second = "0" + String(second);
    }
    
    timer.innerHTML = `${minute}:${second}`;
}

ranger.addEventListener("input", setupdate);
function setupdate() {
    video.currentTime = (+ranger.value * video.duration)/ 100;
}