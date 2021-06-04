const scoreDisplayP1 = document.querySelector('#scoreDisplayP1');
const scoreDisplayP2 = document.querySelector('#scoreDisplayP2');

const btnPlayer1 = document.querySelector('#btnPlayer1');
const btnPlayer2 = document.querySelector('#btnPlayer2');

const inputPointsToWin = document.querySelector('#sets');

// initialise score and game status
let scoreP1 = 0;
let scoreP2 = 0;
let winningScore = 3;
let isWinner = false;


// set number of sets
inputPointsToWin.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
})

btnPlayer1.addEventListener('click', function () {
    if (!isWinner) {
        if (scoreP1 !== winningScore) {
            scoreP1++;
            scoreDisplayP1.textContent = scoreP1;

        }
        if (scoreP1 === winningScore) {
            showWinner(scoreDisplayP1, scoreDisplayP2);
        }
    }
})

btnPlayer2.addEventListener('click', function () {
    if (!isWinner) {
        if (scoreP2 !== winningScore) {
            scoreP2++;
            scoreDisplayP2.textContent = scoreP2;

        }
        if (scoreP2 === winningScore) {
            showWinner(scoreDisplayP2, scoreDisplayP1);
        }
    }
})

// adds styling to show winner vs loser and sets game status to show there is a winner
function showWinner(winningDisplay, losingDisplay) {
    winningDisplay.classList.add('winner');
    losingDisplay.classList.add('loser');
    isWinner = true;
}


// reset button
const btnReset = document.querySelector('#btnReset');

btnReset.addEventListener('click', resetGame)

function resetGame() {
    // reset the score
    scoreP1 = 0;
    scoreP2 = 0;
    // reset the content
    scoreDisplayP1.innerText = scoreP1;
    scoreDisplayP2.innerText = scoreP2;
    // remove the classes
    scoreDisplayP1.classList.remove('winner', 'loser');
    scoreDisplayP2.classList.remove('winner', 'loser');
    // reset bool 
    isWinner = false;
}