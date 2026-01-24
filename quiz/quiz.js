// const options = document.querySelectorAll(".option");
// let correctAnswer = "B. 8 billions";

// options.forEach(option =>{
//     option.addEventListener("click", ()=>{
//      options.forEach(btn => btn.classList.add("disabled"));
     
//         if (option.textContent.trim() ===  correctAnswer) {
//             option.classList.add("correct");

//         }else{
//            option.classList.add("wrong"); 

//            options.forEach(btn =>{
//           if (btn.textContent.trim() ===  correctAnswer) {
//             btn.classList.add("correct");
//         }
//         });
//         }

//     });
//     });

const options = document.querySelectorAll(".option");

  window.addEventListener("DOMContentLoaded", ()=>{
options.forEach(btn =>{
btn.addEventListener("click", ()=>{
options.forEach(option =>{
option.classList.add("disabled");

})
 const correctAnswer = btn.dataset.correct === "true";
 if (correctAnswer) {
    btn.classList.add("correct");
    // const correct = btn.classList.add("correct");
    // localStorage.setItem("answer", "true");
    // localStorage.setItem("status",correct );

 }else if (!correctAnswer) {
    btn.classList.add("wrong");
    // const wrong = btn.classList.add("wrong");
    // localStorage.setItem("answer", "false");
    // localStorage.setItem("status",wrong);

    options.forEach(option =>{
    if (option.dataset.correct === "true") {
       option.classList.add("correct"); 
    }
    });

 }
 

});
});

});






















