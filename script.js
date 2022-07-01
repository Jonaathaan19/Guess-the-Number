'use strict';

// DOM Manipulation

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

//Select score and current number

// document.querySelector('.number').textContent =13;
// document.querySelector('.score').textContent = 10;

//Read value from the input field
// document.querySelector('.guess').value = 22;

//Variables

const message = document.querySelector('.message');
const scoreDiv = document.querySelector('.score');
const number = document.querySelector('.number');
const highScoreDiv = document.querySelector('.highscore');
let score = 20;
let highScore = 0;

//Implementation of game logic

//Define secret number
let secretNumber = Math.trunc(Math.random()*20+1);

//Handling click events
document.querySelector('.check').addEventListener('click', () => {
    //Save the guess value
    const guess = Number(document.querySelector('.guess').value);

    //Check if the guess is empty
    if(!guess) {
        message.textContent = 'Please enter a number ⛔';
    }
    //Checks if the number is correct
    else if(guess === secretNumber) {
        message.textContent = 'Correct Number 🎊';
        number.textContent = secretNumber;

        //Change the background
        document.querySelector('body').style.backgroundColor = '#60b347';

        //Save high score
        if(score >= highScore ) {
            highScoreDiv.textContent = score;
        }
    }

     //Checks if the number is wrong
    else if (guess < secretNumber || guess > secretNumber) {

        //If score is 0, game over, else continues the game until correct or score reaches 0.
        if(score > 0) {
            message.textContent = 'Try again 🚫';
            score--;
            scoreDiv.textContent = score;
        }

        else {
            message.textContent = 'Game Over ⛔';
            number.textContent = secretNumber;
        }
    }

})

//Coding Challenge #1 

document.querySelector('.again').addEventListener('click', () => {
    scoreDiv.textContent = 20;
    secretNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('.guess').value = '';
    message.textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    number.textContent = '?';
})