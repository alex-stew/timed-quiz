// get page elements
const homeElement = document.getElementById("home");
const gameElement = document.getElementById("game");
const playBtnElement = document.getElementById("play-btn");
const viewHighScoresElement = document.getElementById("highscores-btn");
let countElement = document.getElementById("countdown").innerHTML;
let scoreElement = document.getElementById("score");
let questionTitleElement = document.getElementById("questionTitle").innerHTML;

let index = 0;
let timeLeft = 75;
let score = 0;
let timer;

// store array of questions, with corresponding choices and answer
const questions = [
    {
        title: "Commonly Used data types DO NOT include:",
        choices: ["stings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statment is enclosed within _____.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What javascipt method can we use to select an html element?",
        choices: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],
        answer: "Both 1 and 3"
    },
    {
        title: "What html tag is NOT included in the HEAD tag?",
        choices: ["link", "meta", "title", "header"],
        answer: "header"
    },
    {
        title: "What attribute is used in html to decorate content?",
        choices: ["css", "class", "src", "style"],
        answer: "style"
    }
];

let questionIndex = questions.length - 1;

// starts quiz and timer on click
playBtnElement.addEventListener("click", event => {
    console.log('working');
    homeElement.classList.add("d-none");
    gameElement.classList.remove("d-none");
    setCountdown();
    nextQuestion();
    timer = setInterval(setCountdown, 1000);
})


function setCountdown() {
    countElement = "Time: " + timeLeft + " sec left";
    timeLeft--;
    if (timeLeft == -1) {
      clearInterval(timer);
    }
    // gameOver();
}
  
// let timer = setInterval(() => {
//     if (countElement <= 0) {
//         clearInterval(timer);
//         gameOver();
//     }   
//     },1000);
// nextQuestion();



function nextQuestion() {  
    questionIndex++;
    if (index <= questionIndex) {
        questionTitleElement = questions[index].title;
    } else{
        // gameOver();
    }
};


// }

// function correctAnswer() {
//     score += 10;
//     nextQuestion();
// }

// function incorrectAnswer() {
//     countdown -= 15;
//     nextQuestion();
// }

// function gameOver() {

// }

// function setHighScore() {

// }

// function viewHighScores() {

// }

// function clearHighScore() {

// }

