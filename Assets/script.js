// store array of questions, with corresponding choices and answer
const questions = [];

// set primary page elements
let score = 0;
let currentQuestion = 0;
let countdown = 0;
const timer;

// starts quiz and timer on click
function play() {
    countdown = 50;
    let countdown = document.getElementById('countdown').innerHTML;

    timer = setInterval(() => {
        if (countdown <= 0) {
            clearInterval(timer);
            // gameOver();
        }   

    },1000);
    nextQuestion();
}


function nextQuestion() {

}

function correctAnswer() {
    
}

function incorrectAnswer() {

}

function gameOver() {

}

function setHighScore() {

}

function getHighScore() {

}

function clearHighScore() {

}

