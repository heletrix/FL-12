const ATTEMPTS = 3;
const DIFF = 2;
const ONE = 1;
let initMaxRandomNumber = 8;
let maxRandomNumber = initMaxRandomNumber;
let initMaxPrize = 100;
let maxPrize = initMaxPrize;
let stepRandomNumber = 4;
let score = 0;
let isGame = confirm('Do you want to play a game?');
if (!isGame) {
    alert('You did not become a billionaire, but can.');
} else {
    while (isGame) {
        let randomNumber = Math.floor(Math.random() * (maxRandomNumber + ONE));
        let currentPrize = maxPrize;
        let isGuessed = false;
        for (let i = 0; i < ATTEMPTS; i++){
            if (randomNumber === Number(prompt('Choose a roulette pocket number from 0 to ' + maxRandomNumber + 
            '\nAttempts left: ' + (ATTEMPTS - i) + '\nTotal prize: ' + score + '$' + 
            '\nPossible prize on current attempt: ' + currentPrize + '$'))) {
                score += currentPrize;
                isGuessed = true;
                break;
            } 
            currentPrize = currentPrize / DIFF;
        }
        if (!isGuessed) {
            alert('Thank you for your participation. Your prize is: ' + score +' $');
            if (confirm('Do you want to play again?')) {
                maxPrize = initMaxPrize;
                maxRandomNumber = initMaxRandomNumber;
                score = 0;
                continue;
            } else {
                break;
            }
        } else {
            if (!confirm('Congratulation, you won! Your prize is: ' + score +' $. Do you want to continue?')) {
                alert('Thank you for your participation. Your prize is: ' + score +' $');
                if (confirm('Do you want to play again?')) {
                    maxPrize = initMaxPrize;
                    maxRandomNumber = initMaxRandomNumber;
                    score = 0;
                    continue;
                } else {
                    break;
                }
            } else {
                maxRandomNumber += stepRandomNumber;
                maxPrize *= DIFF;
            }
        }
    }
}