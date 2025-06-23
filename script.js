// declare some constants
const cellNum = 16;

const board = document.querySelector(".board");
const boardWidth = parseInt(window.getComputedStyle(board).width);

const cellSize = Math.floor(boardWidth / cellNum);
console.log(cellSize);

// board creation
for (let i = 0; i < (cellNum * cellNum); i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

    board.appendChild(cell);
}

// draw on board
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = "black";
    });
});

// clear board
const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
});