/*----- constants -----*/
const colors = {
    '1': 'lime',
    '-1': 'purple',
    '0': 'white'
};


/*----- app's state (variables) -----*/

let board, winner, turn;

/*----- cached element references -----*/
const feedback = document.getElementById('feedback');



/*----- event listeners -----*/
document.getElementById('col-markers').addEventListener('click',handleClick);

/*----- functions -----*/
init();

//when the user clicks 
function handleClick(evt) {
    const marker = evt.target;
    const colIdx = parseInt(marker.id.replace('col', ''));
    if (isNaN(colIdx) || winner) return;
    const rowIdx = board[colIdx].indexOf(0);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    winner = getWinner();
    turn *= -1;
    render();
}

function getWinner() {
    let winner = null;
    for (let colIdx = 0; colIdx < board.length; colIdx++) {
        winner = checkCol(colIdx);
        if (winner) break;
    }
    return winner;
}

function checkCol(colIdx) {
    let winner = null;
    for (let rowIdx = 0; rowIdx < board[colIdx].length; rowIdx++) {
        winner = checkUp(colIdx, rowIdx) || checkRight(colIdx, rowIdx) || checkDiag(colIdx, rowIdx, 1) || checkDiag(colIdx, rowIdx, -1);
        if (winner) break;
    }
    return winner;
}

function checkUp(colIdx, rowIdx) {
    if (rowIdx > 3) return null;
    const colArr = board[colIdx];
    return (Math.abs(colArr[rowIdx] + colArr[rowIdx + 1] + colArr[rowIdx + 2] + colArr[rowIdx + 3]) === 4) ? colArr[rowIdx] : null;
}

function checkRight(colIdx, rowIdx) {
    if (colIdx > 3) return null;
    return (Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx] + board[colIdx + 2][rowIdx] + board[colIdx + 3][rowIdx]) === 4) ? board[colIdx][rowIdx] : null;
}

function checkDiag(colIdx, rowIdx, vertOffset) {
    if (colIdx > 3 || (vertOffset > 0 && rowIdx > 2) || (vertOffset < 0 && rowIdx < 3)) return null;
    return (Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx + vertOffset] + board[colIdx + 2][rowIdx + (vertOffset * 2)] + board[colIdx + 3][rowIdx + (vertOffset * 3)]) === 4) ? board[colIdx][rowIdx] : null;
}

// render the game to the DOM with this function
function render() {
    // display the board
    board.forEach(function(colArr, colIdx) {
        // update the markers 
        const marker = document.getElementById(`col${colIdx}`);
        marker.style.borderTopColor = colArr.includes(0) ? "gray" : "white"
        colArr.forEach(function(cell, rowIdx){
            // access the correct div in the section
            const div = document.getElementById(`c${colIdx}r${rowIdx}`);
            div.style.backgroundColor = `${colors[cell]}`;
        });
    });
    // display feedback
    if (winner) {
        if (winner === 'T') {
            feedback.textContent = "It's a Tie!";
        } else {
            feedback.innerHTML = `<span style="color:${colors[winner]}">${colors[winner].toUpperCase()}</span> Wins!`;
        }
    } else {
        feedback.innerHTML = `<span style="color:${colors[turn]}">${colors[turn].toUpperCase()}</span>'s Turn`;
    }
};


// initialize the game with this function and render the board to the DOM
function init() {
    board = [
        [0, 0, 0, 0, 0, 0],//column 1
        [0, 0, 0, 0, 0, 0],//column 2
        [0, 0, 0, 0, 0, 0],//column 3
        [0, 0, 0, 0, 0, 0],//column 4
        [0, 0, 0, 0, 0, 0],//column 5
        [0, 0, 0, 0, 0, 0],//column 6
        [0, 0, 0, 0, 0, 0]//column 7
    ];
    winner = null;
    turn = 1;
    render();
}