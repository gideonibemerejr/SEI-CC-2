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
/*----- functions -----*/
init();
// render the game to the DOM with this function
function render() {
    // display feedback
    if(winner) {
        if(winner === 'T'){
            feedback.textContent = "LMAO that's wild, y'all tied...";

        }
    } else {
        feedback.textContent = `${colors[turn].toUpperCase()}'s turn!`
    }

}
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