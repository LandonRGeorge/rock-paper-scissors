let rps = ['rock', 'paper', 'scissors'];

const criteria = {
    'rock': {
        'rock': 'tie',
        'paper': 'lose',
        'scissors': 'win',
    },
    'paper': {
        'rock': 'win',
        'paper': 'tie',
        'scissors': 'lose',
    },
    'scissors': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'tie',
    }
}

let computerWinCount = 0;
let playerWinCount = 0;
let tieCount = 0;

function getComputerSelection() {
    let randomChoice = Math.floor(Math.random() * rps.length)
    return rps[randomChoice]
}

function getPlayerSelection() {
    return prompt('Enter `rock`, `paper`, or `scissors`', '').toLowerCase()
}


function playRound() {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerSelection();

    const result = criteria[playerSelection][computerSelection];

    let resultText;
    switch (result) {
        case 'win':
            resultText = `You Win! ${playerSelection} beats ${computerSelection}`;
            playerWinCount++
            break
        case 'lose':
            resultText = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerWinCount++
            break
        default:
            resultText = `You Tie! ${computerSelection} ties ${playerSelection}`;
            tieCount++
            break
    }

    return resultText

}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
    }
    console.log(`Player wins: ${playerWinCount} | Computer wins: ${computerWinCount} | Ties: ${tieCount}`)
}
