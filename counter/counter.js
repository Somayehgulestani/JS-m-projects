const counter = document.querySelector(".text-feild");
const uper = document.getElementById("up");
const downer = document.getElementById("down");
const reset = document.getElementById("reset");



let value = 0;
if (sessionStorage.getItem("value") !== null) {
     counter.textContent = sessionStorage.getItem("value");
}

uper.addEventListener("click", ()=>{
value++;
sessionStorage.setItem('value', value);
counter.textContent = sessionStorage.getItem("value");
});


downer.addEventListener("click", ()=>{
value--;
sessionStorage.setItem('value', value);
counter.textContent = sessionStorage.getItem("value");
});

reset.addEventListener("click", ()=>{
value = 0;
sessionStorage.setItem('value', value);
counter.textContent = sessionStorage.getItem("value");
});
