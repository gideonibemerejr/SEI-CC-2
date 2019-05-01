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

<<<<<<< HEAD
=======

>>>>>>> 4e13b3e5ec45e4edc885c40ab92aad506ae707aa
/*----- functions -----*/
init();

//when the user clicks 
function handleClick(evt) {
    const marker = evt.target;
    const colIdx = parseInt(marker.id.replace('col', ''));
<<<<<<< HEAD
    if (isNaN(colIdx) || winner) return;
=======
    if (isNaN(colIdx)) return;
>>>>>>> 4e13b3e5ec45e4edc885c40ab92aad506ae707aa
    const rowIdx = board[colIdx].indexOf(0);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    winner = getWinner();
<<<<<<< HEAD
=======
    console.log(winner);
>>>>>>> 4e13b3e5ec45e4edc885c40ab92aad506ae707aa
    turn *= -1;
    render();
}

function getWinner() {
    let winner = null;
<<<<<<< HEAD
    for (let colIdx = 0; colIdx < board.length; colIdx++) {
=======
    for(let colIdx = 0; colIdx < board.length; colIdx++){
>>>>>>> 4e13b3e5ec45e4edc885c40ab92aad506ae707aa
        winner = checkCol(colIdx);
        if (winner) break;
    }
    return winner;
}

<<<<<<< HEAD
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

=======
>>>>>>> 4e13b3e5ec45e4edc885c40ab92aad506ae707aa
// render the game to the DOM with this function
function render() {
    // display the board
    board.forEach(function(colArr, colIdx) {
        // update the markers 
        const marker = document.getElementById(`col${colIdx}`);
        marker.style.borderTopColor = colArr.includes(0) ? "gray" : "white";
        colArr.forEach(function(cell, rowIdx){
            // access the correct div in the section
            const div = document.getElementById(`c${colIdx}r${rowIdx}`);
            div.style.backgroundColor = `${colors[cell]}`;
        });
    });
    // display feedback
<<<<<<< HEAD
    if (winner) {
        if (winner === 'T') {
            feedback.textContent = "It's a Tie!";
        } else {
            feedback.innerHTML = `<span style="color:${colors[winner]}">${colors[winner].toUpperCase()}</span> Wins!`;
=======
    if(winner) {

        if(winner === 'T'){
            feedback.textContent = "LMAO that's wild, y'all tied...";
        } 
        if (winner === 1 || winner === -1){
            feedback.textContent = `${colors[turn].toUpperCase()} Wins!`
>>>>>>> 4e13b3e5ec45e4edc885c40ab92aad506ae707aa
        }
    } else {
        feedback.innerHTML = `<span style="color:${colors[turn]}">${colors[turn].toUpperCase()}</span>'s Turn`;
    }
};



function checkCol(colIdx) {
    // iterate through each column (board[colIdx]) to see if the absolute value of the first 4 elements is equal to four
      //if they're not return null if the sum is equal to for run colorCheck
    /*---- 
    let winner = null;
    sum = 0;
    board[colIdx].forEach(function(element, rowIdx){
        while (rowIdx <= 7)
            sum += element);
        }
        if (sum < 4) {
            return winner;
        } else if(sum ? 4 : -4 ){
            return winner = sum/4;
        } else {
            return winner = 'T';
        }
        change to absolute value

    });
    ---*/
    let winner = null;
    sum = 0;
    board[colIdx].forEach(function(element){
        console.log(element);
    });
          
};

// initialize the game with this function and render the board to the DOM
function init() {
    board = [
        [0, 0, 0, 0, 0, 0],//column 0
        [0, 0, 0, 0, 0, 0],//column 1
        [0, 0, 0, 0, 0, 0],//column 2
        [0, 0, 0, 0, 0, 0],//column 3
        [0, 0, 0, 0, 0, 0],//column 4
        [0, 0, 0, 0, 0, 0],//column 5
        [0, 0, 0, 0, 0, 0]//column 6
    ];
    winner = null;
    turn = 1;
    render();
}