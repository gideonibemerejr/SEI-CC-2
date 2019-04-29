/*----- constants -----*/
const markers = {
    '1': 'red',
    '-1': 'blue',
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
    const colIdx = marker.id.replace('r', '').slice(1, 2);
    if (isNaN(colIdx)) return;
    const rowIdx = marker.id.replace('c','').slice(-1);
    if (rowIdx === 1) return;
    board[colIdx][rowIdx] = turn;
    turn *= -1;
    render();
};

function render() {
    board.forEach(function (colArr, colIdx){
        colArr.forEach(function(cell, rowIdx){
            const div = document.getElementById(`c${colIdx}r${rowIdx}`);
            div.style.backgroundColor = `${markers[cell]}`;
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