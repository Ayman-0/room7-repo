function gameAction(message, delay, result) {
    return new Promise(resolve => {
        console.log(message);
        setTimeout(() => {
            console.log(result);
            resolve(result);
        }, delay);
    });
}

function initializeGame() {
    return gameAction("Initializing game...", 2000, "Game initialized successfully!");
}

function movePlayer(direction) {
    return gameAction(`Moving player ${direction}...`, 1500, `Player moved ${direction}`);
}

function calculateScore(points) {
    return gameAction("Calculating score...", 1000, `Score updated: ${points} points`).then(() => points);
}

function checkGameOver(score) {
    return gameAction("Checking if game is over...", 2000, score >= 100 ? "Game over!" : "Continue playing.");
}

module.exports = { initializeGame, movePlayer, calculateScore, checkGameOver };
