const prev = document.getElementById("prev");
const next = document.getElementById("next");
const info = document.querySelector(".content");

next.addEventListener("click", ()=>{
let images = document.querySelectorAll(".images");
 let slider = document.querySelector(".slider").appendChild(images[0]);

 localStorage.setItem("image",slider);
 

});

prev.addEventListener("click", ()=>{
let images = document.querySelectorAll(".images");
 document.querySelector(".slider").prepend(images[images.length-1]);


});