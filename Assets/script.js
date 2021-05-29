// get page elements
const homeEl = document.querySelector("#home");
const gameEl = document.querySelector("#game");
const playBtnEl= document.querySelector("#play-btn");
const viewHighScoresEl = document.querySelector("#highscores-btn");
let countEl = document.querySelector("#countdown");
let scoreEl = document.querySelector("#score");
let questionIdEl = document.querySelector("#questionId");
let questionTitleEl = document.querySelector("#questionTitle");
let questionChoicesEl = document.querySelector("#questionChoices");

let questionIndex = -1;
let countdown = 75;
let score = 0;
let timer;

// store array of questions, with corresponding choices and answer
const questions = [
    {
        id: "1",
        title: "Commonly Used data types DO NOT include:",
        choices: ["stings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        id: "2",
        title: "The condition in an if / else statment is enclosed within _____.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        id: "3",
        title: "What javascipt method can we use to select an html element?",
        choices: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],
        answer: "Both 1 and 3"
    },
    {
        id: "4",
        title: "What html tag is NOT included in the HEAD tag?",
        choices: ["link", "meta", "title", "header"],
        answer: "header"
    },
    {
        id: "5",
        title: "What attribute is used in html to decorate content?",
        choices: ["css", "class", "src", "style"],
        answer: "style"
    }
];


function correctAnswer() {
    score += 10;
    scoreEl.innerHTML = "<p>" + score + "</p>";
    nextQuestion();
}

function incorrectAnswer() {
    countdown -= 15;
    countEl.innerHTML = "<p>" + countdown + "</p>";
    nextQuestion();
}

function gameOver() {
    clearInterval(timer);
}

// references an index and displays new question each time it is called
function nextQuestion() { 
    questionIndex++;
    if (questionIndex > questions.length-1) {
        gameOver();
        return;
    }
    let currentQuestion = questions[questionIndex];
    questionIdEl.innerHTML = "<p>" + currentQuestion.id + ":</p>";
    questionTitleEl.innerHTML = "<p> " + currentQuestion.title + "</p>";
    for (let selectedAnswer = 0; selectedAnswer < currentQuestion.choices.length; selectedAnswer++) {
        let buttonId = "<button onclick=\"[ANS]\">[CHOICE]</button>";
        buttonId = buttonId.replace("[CHOICE]", currentQuestion.choices[selectedAnswer]);
        if (currentQuestion.choices[selectedAnswer] == currentQuestion.answer){
            buttonId = buttonId.replace("[ANS]", "correct()");
        } else {
            buttonId = buttonId.replace("[ANS]", "incorrect()");
        }
        questionChoicesEl.innerHTML += buttonId
    }
};

function start() {  
    homeEl.classList.add("d-none");
    gameEl.classList.remove("d-none");
    console.log('working');     
    timer = setInterval(function() {
        countdown--;
        countEl.innerHTML = `<p>Time: ${countdown} sec left</p>`;
        if (countdown <= 0) {
            clearInterval(timer);
            gameOver();
          }
    }, 1000);
    nextQuestion();
};


function setHighScore() {

}

// function viewHighScores() {

// }

// function clearHighScore() {

// }

// event listeners
// starts quiz and timer on click
playBtnEl.addEventListener("click", start());
