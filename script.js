let divRow = 16;
let divGrid = divRow * divRow;
let sketchBox = document.querySelector('.sketch-box');

function makeDivs() {
    for (i = 0; i < divGrid; i++) {
        let div = document.createElement('div')
        div.classList.add("grid-box");
        sketchBox.appendChild(div);
    }
}

function changeColor() {
    let divs = document.querySelectorAll(".sketch-box div");
    divs.forEach((div) => {
        div.addEventListener("mouseover", function(e) {
            e.target.setAttribute("style", "background: black");
        });
    });
}

makeDivs();
changeColor();