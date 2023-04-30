let n;
document.querySelector(".new").addEventListener("click",()=>{
   n =parseInt(prompt("enter dimensions"));
   create(n);
});
let canvas = document.querySelector(".sketch");
function create(n){
    for(let i=0;i<n*n;i++)
    canvas.appendChild(document.createElement("div"));
    canvas.style.gridTemplateRows = `repeat(${n},1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${n},1fr)`;
}