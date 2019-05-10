/*----- constants -----*/
const beepAudio = new Audio(
  "http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3"
);
const shootAudio = new Audio(
  "http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3"
);

const rps = {
  r: {
    img: "imgs/rock.png",
    beats: "s"
  },
  p: {
    img: "imgs/paper.png",
    beats: "r"
  },
  s: {
    img: "imgs/scissors.png",
    beats: "p"
  }
};

/*----- app's state (variables) -----*/
let results, scores, winner;

/*----- cached element references -----*/
const playerScoresEl = document.querySelector("#player > h2");
const computerScoresEl = document.querySelector("#computer > h2");
const tieScoresEl = document.querySelector("#tie > h2");
const playerResultEl = document.querySelector("#player > div > div");
const computerResultEl = document.querySelector("#computer > div > div");

/*----- event listeners -----*/
document.querySelector("button").addEventListener("click", handleGo);

/*----- function declarations and invocations -----*/
// Invocations
init();

// Declarations
function handleGo() {
  console.log(scores);
  results.p = getRandomResult();
  results.c = getRandomResult();
  winner = getWinner();
  scores[winner]++;
  render();
}

function getWinner() {
  return results.p === results.c
    ? "t"
    : // does what the player beats equal to what the computer has?
    rps[results.p].beats === results.c
    ? "p"
    : "c";
}

function getRandomResult() {
  return "rps".charAt(Math.floor(Math.random() * 3));
}

function render() {
  // render scores
  playerScoresEl.textContent = scores.p;
  computerScoresEl.textContent = scores.c;
  tieScoresEl.textContent = scores.t;

  // render the results
  playerResultEl.style.backgroundImage = `url(${rps[results.p].img})`;
  computerResultEl.style.backgroundImage = `url(${rps[results.c].img})`;

  playerResultEl.parentElement.style.border =
    winner === "p" ? "10px solid darkgrey" : "10px solid white";
  computerResultEl.parentElement.style.border =
    winner === "c" ? "10px solid darkgrey" : "10px solid white";
}

function init() {
  winner = null;
  results = {
    p: "r",
    c: "r"
  };
  scores = {
    p: 0,
    c: 0,
    t: 0
  };
  render();
}
