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
function handleClick(event) {
    const marker = event.target;
    const colIdx = parseInt(marker.id.replace('col', ''));
    if (isNaN(colIdx)) return;
    const rowIdx = board[colIdx].indexOf(0);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    winner = getWinner();
    console.log(winner);
    turn *= -1;
    render();
}

function getWinner() {
    let winner = null;
    for(let colIdx = 0; colIdx < board.length; colIdx++){
        winner = checkCol(colIdx);
        if (winner) break;
    }
    return winner;
}

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
    if(winner) {

        if(winner === 'T'){
            feedback.textContent = "LMAO that's wild, y'all tied...";
        } 
        if (winner === 1 || winner === -1){
            feedback.textContent = `${colors[turn].toUpperCase()} Wins!`
        }
    } else {
        feedback.textContent = `${colors[turn].toUpperCase()}'s turn!`
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