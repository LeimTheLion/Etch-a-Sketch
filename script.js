let n = 16;
let m = ((600 / n) - 2);
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
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        square.style.background = "#" + randomColor;
    }

    square.style.width = m + "px";
    square.style.height = m + "px";
    divContainer.appendChild(square);

    const restart = document.querySelector('.restart');
    restart.onclick = () => {
        const toRemove = document.querySelectorAll('.square');
        toRemove.forEach(square => square.style.backgroundColor = "");
    }

    const change = document.querySelector('.change');
    change.onclick = () => {
        n = prompt("Choose the number of squares per side. (Max. 100)");
        m = ((600 / n) - 2);
        if (n >= 1 && n <= 100) {
            const step1 = document.querySelectorAll('.square');
            step1.forEach(square => divContainer.removeChild(square));
            getGrid();
        }
        else alert("The value you entered was invalid. Please try again.");
    }
}

function getGrid() {
    if (n <= 100) {
        for (let i = 0; i < (n * n); i++) {
            if (i <= (n * n - 1)) {
                addSquare();
            }
        }
    }
}
