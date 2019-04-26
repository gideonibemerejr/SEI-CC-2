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
    console.log(colIdx);
    const rowIdx = board[colIdx].indexOf(0);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    //TODO:  winner = getWinner();
    turn *= -1;
    render();
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
    if(winner) {
        if(winner === 'T'){
            feedback.textContent = "LMAO that's wild, y'all tied...";
        }
    } else {
        feedback.textContent = `${colors[turn].toUpperCase()}'s turn!`
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