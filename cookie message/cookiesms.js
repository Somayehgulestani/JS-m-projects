const stars = document.querySelectorAll(".stars i");
const box = document.querySelector(".rating-box");



function givesorce() {
   window.addEventListener("scroll", scroll);
   if (!document.cookie.includes("score")) {
  box.style.display = "block";
}else{
    box.style.display = "none";
}


function scroll() {
if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100){

   window.removeEventListener("scroll", scroll); 
if (!document.cookie.includes("score")) {
   setTimeout(() =>{
  box.style.display="block";
  },1000);
}
}
}


 stars.forEach((star, index1) =>{

 star.addEventListener("click", ()=>{

  stars.forEach((star, index2)=>{
   
index1 >= index2?star.classList.add("active"):star.classList.remove("active");
document.cookie="score=given; path=/; max-age="+60*60*24*30*12;
    
setTimeout(()=>{
box.style.display ="none";
}, 3000);


  });
 });
 
});

}

window.addEventListener("load", givesorce);
 window.addEventListener("load",check);
