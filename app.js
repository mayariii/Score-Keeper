const p1 = {
    score: 0,
    button: document.querySelector('#btnPlayer1'),
    display: document.querySelector('#scoreDisplayP1')
}

const p2 = {
    score: 0,
    button: document.querySelector('#btnPlayer2'),
    display: document.querySelector('#scoreDisplayP2')
}
const animationSources = {
    playing: "./images/animation-playing.gif",
    winner: "./images/animation-trophy.gif"
}

const animation = document.querySelector('#animation');

const inputPointsToWin = document.querySelector('#sets');

// initialise game status
let winningScore = 3;
let isWinner = false;



function updateScores(player, opponent) {
    if (!isWinner) {
        player.score++;
        if (player.score === winningScore) {
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            isWinner = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            animation.setAttribute('src', animationSources.winner);
        }
        player.display.textContent = player.score;
    }
}


// set number of sets
inputPointsToWin.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
})

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})

// reset button
const btnReset = document.querySelector('#btnReset');

btnReset.addEventListener('click', resetGame)

function resetGame() {
    // status is game over
    isWinner = false;
    for (let p of [p1, p2]) {
        // reset the score
        p.score = 0;
        // reset the content
        p.display.textContent = 0;
        // remove the classes
        p.display.classList.remove('winner', 'loser');
        // enable buttons again
        p.button.disabled = false;
        // reset animation
        animation.setAttribute('src', animationSources.playing);
    }

}