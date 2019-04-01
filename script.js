
////////// VARIABLES //////////

let divRow = 16;
let divGrid = divRow * divRow;
divSize = (500 / divRow) + "px";
const sketchBox = document.querySelector('.sketch-box');
const clearBtn = document.querySelector('.clear');
const rainbowBtn =document.querySelector('.rainbow');

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

function drawBlack() {
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
    if (num <= 100) {
        divRow = num;
        divGrid = divRow * divRow;
        divSize = (500 / divRow) + "px";
        makeDivs();
        drawBlack();
        return console.log(divSize);
    }else if (num > 100) {
        alert("Invalid selection value, try again!");
        newDivs();
        return console.log("Learn to follow directions, idiot.");
    }else if (num == 0) {
        alert("Invalid selection value, try again!");
        newDivs();
        return console.log("Learn to follow directions, idiot.");
    }else{
        alert("Invalid selection value, try again!");
        newDivs();        
        return console.log("ERROR");
    }
}

function randomColor(){
    let options = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randOpt = options[Math.floor(Math.random()*options.length)];
    return randOpt;
}

function drawColors() {
    let divs = document.querySelectorAll(".sketch-box div");
    divs.forEach((div) => {
        div.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = randomColor();
        });
    });
}

////////// INITIAL LOAD //////////

makeDivs();
drawBlack();
console.log(divSize);