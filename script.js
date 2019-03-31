
////////// VARIABLES //////////

let divRow = 16;
let divGrid = divRow * divRow;
divSize = 495 / divRow - 1;
let sketchBox = document.querySelector('.sketch-box');
let clearBtn = document.querySelector('.clear');
let rainbowBtn =document.querySelector(".rainbow");

////////// FUNCTIONS //////////

function makeDivs() {
    for (i = 0; i < divGrid; i++) {
        let div = document.createElement('div');
        div.classList.add("grid-box");
        sketchBox.appendChild(div);
    }
    setDivSize();
}

function setDivSize() {
    let divs = document.querySelectorAll(".sketch-box divs");
    divs.forEach((div) => {
        div.setAttribute("style", "height: 20px");
        div.setAttribute("style", "width: 20px");
    });
}

function changeColor() {
    let divs = document.querySelectorAll(".sketch-box div");
    divs.forEach((div) => {
        div.addEventListener("mouseover", function(e) {
            e.target.setAttribute("style", "background: black");
        });
    });
}

function clearGrid() {
    while (sketchBox.firstChild) {
        sketchBox.removeChild(sketchBox.firstChild);
    }
    newDivs();
}

function newDivs(num) {
    num = prompt("Enter a number: 1 - 100");
    divRow = num;
    makeDivs();
    changeColor();
}

////////// INITIAL LOAD //////////

makeDivs();
changeColor();
console.log(divSize);
console.log