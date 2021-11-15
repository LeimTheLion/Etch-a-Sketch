const divContainer = document.querySelector('.container');

let n = prompt("Choose the number of squares per side. (Max. 100)");
let m = ((600 / n) - 2);
let i;
getGrid();

function addSquare() {
    const divContainer = document.querySelector('.container');
    function addColumn() {
        divContainer.style.setProperty('grid-template-columns', 'repeat(' + n + ',' + (m + 2 + "px") + ')');
        divContainer.style.setProperty('grid-template-rows', 'repeat(' + n + ',' + (m + 2 + "px") + ')');
    }
    addColumn();
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener("mouseover", mouseOver);
    function mouseOver() {
        square.style.background = "gray";
    }
    square.style.width = m + "px";
    square.style.height = m + "px";
    divContainer.appendChild(square);

    const restart = document.querySelector('.restart');
    restart.onclick = () => {
        remove();
    }

    function remove() {
        document.querySelector('.square');
        square.style.background = "";
    }

}

function getGrid() {
    if (n <= 100) {
        for (i = 0; i < (n * n); i++) {
            if (i <= (n * n - 1)) {
                addSquare();
            }
        }
    }
}



const change = document.querySelector('.change');
change.onclick = () => {
    
}



