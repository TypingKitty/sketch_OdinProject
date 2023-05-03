let n,isdown;
let canvas = document.querySelector(".sketch");
let root =  document.querySelector(":root");
let style = getComputedStyle(root);
selection(); // changing the color of the selected button
//adding event listener to new canvas button
document.querySelector(".new").addEventListener("click",()=>{
   n =parseInt(prompt("enter dimensions"));
   create(n);
});
//adding event listener to clear button
document.querySelector(".clear").addEventListener("click",()=>{
    create(n);
});
//adding event listener to color picker
let color_picker = document.querySelector('.color_picker');
color_picker.addEventListener("change",()=>{
    if(document.querySelector(".pen").classList.contains("selected"))
    root.style.setProperty('--current_color',color_picker.value);
});

function create(n)
{
    canvas.innerHTML="";
    canvas.style.gridTemplateRows = `repeat(${n},1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${n},1fr)`;
    for(let i=0;i<n*n;i++){
        let div = document.createElement("div");
        canvas.appendChild(div);
    }
    let content = document.querySelector(".content");
    content.addEventListener("mousedown", ()=>{
        isdown = true;
    });
    content.addEventListener("mousemove",(e)=>{
        if(isdown && e.target.parentElement.className === "sketch"){
            if(document.querySelector(".selected").classList.contains("random"))
            {
                const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                e.target.style.backgroundColor = randomColor;
            }
            else
                e.target.style.backgroundColor = style.getPropertyValue('--current_color');
    }
    });
    content.addEventListener("mouseup",()=>{
        isdown = false;
    });
}

function selection(){
    let select = document.querySelectorAll(".color");
    select.forEach(button=>{
        button.addEventListener("click",()=>{
            select.forEach(button=>{
                button.classList.remove('selected');
            });
            button.classList.add('selected');
            if(button.classList.contains("pen")) {
                root.style.setProperty('--current_color',color_picker.value);
                canvas.style.cursor = "url(./images/pen.cur)-35 35,auto";
            }
            else if(button.classList.contains("eraser")){ root.style.setProperty('--current_color','aliceblue');
            canvas.style.cursor = "url(./images/eraser.cur)-30 30,auto";
        }
        else{
            canvas.style.cursor = "url(./images/pen.cur)-35 35,auto";
        }
        });
    });
}