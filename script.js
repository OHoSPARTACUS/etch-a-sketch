
////////// VARIABLES //////////

let divRow = 16;
let divGrid = divRow * divRow;
divSize = (500 / divRow) + "px";
let sketchBox = document.querySelector('.sketch-box');
let clearBtn = document.querySelector('.clear');
let rainbowBtn =document.querySelector(".rainbow");

////////// FUNCTIONS //////////

function makeDivs() {
    for (i = 0; i < divGrid; i++) {
        let div = document.createElement('div');
        div.classList.add("grid-box");
        div.style.width = divSize;
        div.style.height = divSize;
        sketchBox.appendChild(div);
    }
}

function setDivSize() {
    
}

function changeColor() {
    let divs = document.querySelectorAll(".sketch-box div");
    divs.forEach((div) => {
        div.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = 'black';
        });
    });
}

function clearGrid() {
    while (sketchBox.firstChild) {
        sketchBox.removeChild(sketchBox.firstChild);
    }
    newDivs();
}

function newDivs() {
    let num = prompt("Enter a number: 1 - 100");
    divRow = num;
    makeDivs();
    changeColor();
}

////////// INITIAL LOAD //////////

makeDivs();
changeColor();
console.log(divSize);
console.log;