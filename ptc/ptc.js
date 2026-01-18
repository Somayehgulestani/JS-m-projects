const theme = document.getElementById("theme");
const body = document.querySelector("body");
const div = document.getElementById("mian-div");
let fclick = true;

function dark() {
   body.style.backgroundColor = "#222121";
     theme.textContent = "Light";
     body.classList.add("ch-color");
     localStorage.setItem("theme", "dark");  
}

function light() {
 body.style.backgroundColor = "#ffffff";
    theme.textContent = "Dark";
         body.classList.remove("ch-color");

     localStorage.removeItem("theme");
     localStorage.setItem("theme", "light");   
}

theme.addEventListener("click", ()=>{
if (fclick) {
    dark();

}else{
     light();
}
fclick = !fclick;
});

window.addEventListener("DOMContentLoaded", ()=>{
    const themes = localStorage.getItem("theme");
if (themes === "dark") {
     body.style.backgroundColor = "#222121";
     theme.textContent = "light";
          body.classList.add("ch-color");
     localStorage.setItem("theme", "dark");
}else{
     body.style.backgroundColor = "#ffffff";
    theme.textContent = "Dark";
    body.classList.remove("ch-color");
     localStorage.removeItem("theme");
     localStorage.setItem("theme", "light");
}
fclick = !fclick;
});

const like = document.getElementById("btn-like");
const count = document.getElementById("count");



window.addEventListener("DOMContentLoaded", ()=>{

     const savedata = localStorage.getItem("count");
     if (savedata !== null) {
          count.value = savedata;
     }
     const liked = localStorage.getItem("liked")
     if (liked === "true") {
        like.classList.add("color") ; 
     }
});
like.addEventListener("click", ()=>{

like.classList.toggle("color");

let current = +(count.value);

    if (like.classList.contains("color")) {
count.value = current + 1;
localStorage.setItem("liked", "true");

    } else{
count.value = current - 1;
localStorage.setItem("liked", "false")
}
     localStorage.setItem("count", count.value);
    


});


