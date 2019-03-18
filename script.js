let divRow = 16;
let divGrid = divRow * divRow;
let sketchBox = document.querySelector('.sketch-box');

function makeDivs() {
    for (i = 0; i < divGrid; i++) {
        let div = document.createElement('div');
        div.classList.add("grid-box");
        sketchBox.appendChild(div);
    }
}

makeDivs();