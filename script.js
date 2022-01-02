function draw() {
    let boxContainer = document.querySelector(".grid");
    let newboxes;
    const height = document.querySelector('.grid').offsetHeight;
    console.log(height);
    const width = document.querySelector('.grid').offsetWidth;
    console.log(width);

    for (i=0; i<920; i++) {
        newboxes = document.createElement("div");
        newboxes.classList.add("box");
        boxContainer.appendChild(newboxes);
    }
}

draw();

function sketch(){
    let divs =document.querySelectorAll('.grid>div');
    divs.forEach(div=>div.addEventListener("mouseenter",(e)=>{
        // console.log(e)
        div.style.backgroundColor="black";
    }))
}

function rainbow(){
    let divs =document.querySelectorAll('.grid>div');
    divs.forEach(div=>div.addEventListener("mouseenter",(e)=>{
        div.style.backgroundColor="rgb("+(Math.floor(Math.random() * 257)+","+(Math.random() * 257)+","+(Math.random() * 257)+")");
    }))
}

function erase(){
    let divs =document.querySelectorAll('.grid>div');
    divs.forEach(div=>div.addEventListener("mouseenter",()=>{
        div.style.backgroundColor="#b6b6b6";
    }))
}

function reset(){
    let divs =document.querySelectorAll('.grid>div');
    divs.forEach(div=>div.style.backgroundColor="#b6b6b6");
}


let sketchbutton = document.querySelector(".sketch");
sketchbutton.addEventListener("click", sketch);

let erasebutton = document.querySelector(".erase");
erasebutton.addEventListener("click", erase);

let resetbutton = document.querySelector(".reset");
resetbutton.addEventListener("click", reset);

let rainbowbutton = document.querySelector(".rainbow");
rainbowbutton.addEventListener("click", rainbow);