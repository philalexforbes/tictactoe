const rowSize = 3;

const gameBoard = document.querySelector('#game-board');
let squares;

function createBoard() {
    let squareCount = 0;
    for (let i = 0; i < rowSize; i++) {
        const row = document.createElement('div');
        row.classList.add('rows');
        row.setAttribute('id', `row${i}`);
        gameBoard.appendChild(row);

        for (let j = 0; j < rowSize; j++) {
            const square = document.createElement('div');
            square.classList.add('squares');
            square.setAttribute('id', `square${squareCount}`);
            squareCount++;
            square.textContent = '';
            square.addEventListener('click', setSquareValue);
            row.appendChild(square);
        }
    }
    squares = document.querySelectorAll('.squares');
}

function setSquareValue(node) {
    if (node.target.textContext !== '') {

    }
}

function player(name, marker) {
    this.name = name;
    this.marker = marker;
}

function determineWinner() {
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < rows.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
}

function resetSquareValues() {
    
}

function clearGameBoard() {
    const clearGameBtn = document.querySelector('#reset');
    clearGameBtn.addEventListener('click', resetSquareValues);
}


function playGame() {
    createBoard();
}

playGame();
