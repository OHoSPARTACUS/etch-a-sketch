let gridRow = 20;
let grid = gridRow * gridRow;
let sketchBox = document.querySelector('.sketch-box')

function makeGrid(gridRow, grid) {
    for(let b = 0; b < grid; b++){
        let div = document.createElement('div');
        div.setAttribute('id', 'gridBox');
        sketchBox.appendChild(div);
    }
    sketchBox.setAttribute('style', 'grid: repeat(' + gridRow + ',auto) / repeat(' + gridRow + ',auto)');
}