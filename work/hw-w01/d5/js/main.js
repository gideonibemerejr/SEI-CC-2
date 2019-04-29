/*----- constants -----*/
const markers = {
    '1': 'X',
    '-1': 'O',
    '0': ''
}


/*----- app's state (variables) -----*/
let board, winner, turn;
/*----- cached element references -----*/
const feedback = document.getElementById('feedback');
/*----- event listeners -----*/
document.getElementById('game-board').addEventListener('click', handleClick);


/*----- functions -----*/

init();


function handleClick(event) {
    const marker = event.target;
    console.log(marker);
    // const rowIdx = parseInt(marker.id.replace('r',''));
    // const colIdx = board[rowIdx].indexOf(0);
    // console.log(colIdx);
    // board[colIdx][rowIdx] = turn;
    // turn *= -1;
    // render();
};

function render() {
    board.forEach(function (colArr, colIdx){
        console.log('column' + " " + colIdx)
        colArr.forEach(function(cell, rowIdx){
            console.log('rowIdx' + " " +rowIdx);
            // const div = document.getElementById(`r${colIdx}`);
            // div.textContent = `${markers[cell]}`;
        });
        
        if(winner) {
            
        } else {
            feedback.textContent = `${markers[turn]}'s turn!`
        }
    }); 
};

function init() {
    board = [
        [0, 0, 0], //column 0
        [0, 0, 0], //column 1
        [0, 0, 0], //column 2
    ];
    winner = null;
    turn = 1;
    render();
};