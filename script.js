// declare some constants
let cellNum = 32;

const board = document.querySelector(".board");
const boardWidth = parseInt(window.getComputedStyle(board).width);

const cellSize = boardWidth / cellNum;
console.log(cellSize);

// board creation
function constructBoard() {
    for (let i = 0; i < (cellNum * cellNum); i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        board.appendChild(cell);
    }
};

constructBoard();

// draw on board
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        let op = cell.style.opacity;
        cell.style.opacity = op + 0.1;
        console.log(cell.style.opacity);
    });
});

// clear board function
function clearBoard() {
    cells.forEach((cell) => {
        cell.style.opacity = 0;
    });
};

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clearBoard);

// resize board 
const resizeButton = document.querySelector(".resize");
resizeButton.addEventListener('click', () => {
    // prompt user
    cellNum = parseInt(prompt("Enter a number between 8-64: ", "32"));
    // bounds
    cellNum = (cellNum > 64) ? 64 : cellNum;
    cellNum = (cellNum < 8) ? 8 : cellNum;

    cells.forEach((cell) => { board.removeChild(cell); })

    constructBoard();
    clearBoard();
});