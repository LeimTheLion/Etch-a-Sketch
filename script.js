function addSquare() {
    const divContainer = document.querySelector('.container');
    const square = document.createElement('div');
    //square.setAttribute('id', 'square');
    square.classList.add('square');
    square.addEventListener("mouseover", mouseOver);
    function mouseOver() {
        square.style.background = "gray";
      }
    divContainer.appendChild(square);
}

for (let n = 0; n < 256; n++) {
    if (n <= 255) {
        addSquare();
    };
}

