const audio = document.getElementById('audio'),
prev = document.getElementById('prev'),
next = document.getElementById('next'),
play = document.getElementById('play'),
playi = document.querySelector('#play > i'),
image = document.getElementById('cover'),
musiccontainer = document.querySelector(".music-container"),
title = document.getElementById("title");



const songs = [
  {
    title:'ukulele',
  src:'ukulele.mp3',
  cover:'ukulele.jpg'
},
{
  title:'summer',
  src:'summer.mp3',
  cover:'summer.jpg'
},
{
  title:'hey',
  src:'hey.mp3',
  cover:'hey.jpg'
}
  
];



function player(){
  const isplay = playi.classList.contains('fa-play');
  console.log(isplay);
  if (isplay) {
    playi.classList.remove('fa-play');
    playi.classList.add('fa-pause');
    cover.style.animationPlayState = "running";
    musiccontainer.classList.add("play");

    audio.play();
  } else {
  playi.classList.remove('fa-pause');
  playi.classList.add('fa-play');
  cover.style.animationPlayState = "paused";
  audio.pause();
  }
}

let currentsong = 0;
function song(i) {
  audio.src = songs[i].src;
  image.src = songs[i].cover;
  title.innerHTML = songs[i].title
}

play.addEventListener('click', ()=>{
player();
});


next.addEventListener('click', ()=>{
     currentsong++;
  if (currentsong >= songs.length) {
    currentsong=0;
    
  }
song(currentsong);
  playi.classList.remove('fa-play');
  playi.classList.add('fa-pause');
  image.style.animationPlayState = "running";
  audio.play();
});

prev.addEventListener('click', ()=>{
    currentsong--;
    if (currentsong < 0) {
    currentsong = songs.length -1;
  }
  song(currentsong);
  playi.classList.remove('fa-play');
  playi.classList.add('fa-pause');
  image.style.animationPlayState = "running";
  audio.play();
});


const progress = document.getElementById("progress");
const progresscontainer = document.getElementById("progress-container");

audio.addEventListener("timeupdate", ()=>{
const saved = (audio.currentTime / audio.duration) * 100;
progress.style.width= saved + "%";
});

