const input = document.querySelector("input"),
item =document.getElementsByTagName("li");

input.addEventListener("input" ,() =>{

for (let i = 0; i < item.length; i++) {
  let check = item[i].innerHTML;
  console.log(check);
  
 if (check.includes(input.value) === true){
    item[i].style.display= "block";
} else {
  item[i].style.display= "none";

}
}
});



// const button =document.getElementById("sort")
// atems = document.querySelectorAll(".items"),
// list =document.getElementById("list");

// button.addEventListener("click", () =>{

// // for (let i = 0; i < atems.length; i++) {
// //     let result = atems[i].innerHTML;
// //     result.sort();

// //     
    
    
// // }

// result = [...atems];
// result.sort();
// console.log(result);
// });