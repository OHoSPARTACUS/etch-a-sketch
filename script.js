
////////// VARIABLES //////////

let divRow = 16;
let divGrid = divRow * divRow;
divSize = (500 / divRow) + "px";
const sketchBox = document.querySelector('.sketch-box');
const clearBtn = document.querySelector('.clear');
const rainbowBtn =document.querySelector('.rainbow');

////////// FUNCTIONS //////////

function makeDivs() {           
    /// Creates a grid of squares that change color when hovered over using CSS sketchbox ///
    for (i = 0; i < divGrid; i++) {
        let div = document.createElement('div');
        div.classList.add("grid-box");
        div.style.width = divSize;
        div.style.height = divSize;
        sketchBox.appendChild(div);
    }
}

function drawBlack() {
    /// Uses event listeners to change grid squares to black when the cursor hovers over ///
    let divs = document.querySelectorAll(".sketch-box div");
    divs.forEach((div) => {
        div.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = 'black';
        });
    });
}

function clearGrid() {
    /// Clears the grid upon activation and triggers the newDivs function to create a new grid ///
    while (sketchBox.firstChild) {
        sketchBox.removeChild(sketchBox.firstChild);
    }
    newDivs();
}

function newDivs() {
    /// Triggers a prompt to enter a number to set the size of the new grid - Only allows input of grid sizes 1-100 ///
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
        return console.log("Follow Directions!");
    }else if (num == 0) {
        alert("Invalid selection value, try again!");
        newDivs();
        return console.log("Follow Directions!");
    }else{
        alert("Invalid selection value, try again!");
        newDivs();        
        return console.log("ERROR");
    }
}

function randomColor(){
    /// chooses a random color value from a short and simple array of colors ///
    let options = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randOpt = options[Math.floor(Math.random()*options.length)];
    return randOpt;
}

function drawColors() {
    /// uses event listeners and the randomColor function to change the colors of grid squares randomly when hovered over ///
    let divs = document.querySelectorAll(".sketch-box div");
    divs.forEach((div) => {
        div.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = randomColor();
        });
    });
}

////////// INITIAL LOAD //////////

makeDivs(); // uses divRow variable to create a grid of 16x16 by default //
drawBlack(); 
console.log(divSize);