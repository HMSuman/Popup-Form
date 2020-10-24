let open=document.getElementById("myForm");
let openbtn=document.querySelector(".open-button");
let close=document.getElementById("myForm");
let closebtn=document.querySelector(".btn");
openbtn.addEventListener('click',()=>{
open.style.display = "block";
})
close.addEventListener('click',()=>{
open.style.display = "none";
})
