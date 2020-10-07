let rounds = parseInt(prompt('Hello new gamer! Insert below how many rounds you would like to play.'));
let gamerScore = 0;
let computerScore = 0;
let userSelection
let computerSelection
let tie = 0;
let options = ['r', 'p', 's']
let computer = options[Math.floor(Math.random()*2)]
console.log(computer)

for (let i = 0; i <= rounds; i++) {
    prompt('Choose r, p, or s.');
    if (userSelection==='r' && computer ==='r' ) {
    alert('Its a tie!');
    tie++;
    prompt('Choose r, p, or s');
    }else if (userSelection ==='s' && computer ==='s') {
        alert('Its a tie!');
        tie++;
        prompt('Choose r, p, or s');
    }else if (userSelection ==='p' && computer ==='p') {
        alert('Its a tie!');
        tie++;
        prompt('Choose r, p, or s');
    }else if (userSelection ==='r' && computer ==='s') {
        alert('You won this round! Congratulations!');
        gamerScore++;
        prompt('Choose r, p, or s');
    }else if (userSelection ==='p' && computer ==='r') {
        alert('You won this round! Congratulations!');
        gamerScore++;
        prompt('Choose r, p, or s');
    }else if (userSelection ==='s' && computer ==='p') {    
        alert('You won this round! Congratulations!');
        gamerScore++;
        prompt('Choose r, p, or s');
    }else if (gamerScore + computerScore + tie === rounds) {
        alert('Congratulations! You won ' + gamerScore + " games. You lost " + computerScore + " games. You tied " + tie + " games. Thanks for Playing!");
    }else {
    alert('You lost this round. Better luck next time.');
    computerScore++;
    prompt('Choose r, p, or s.');
    }
}
