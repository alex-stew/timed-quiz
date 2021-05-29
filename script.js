// get page elements
const homeEl = document.querySelector("#home");
const gameEl = document.querySelector("#game");
const highscoreEl = document.querySelector("#highscores");
const playBtnEl= document.querySelector("#play-btn");
const viewHighScoresEl = document.querySelector("#highscores-btn");
let savedNameEl = document.querySelector("#savedName");
let savedScoreEl = document.querySelector("#savedScore");
let gameScoreConEl = document.querySelector("#gameScore");
let countEl = document.querySelector("#countdown");
let scoreEl = document.querySelector("#score");
let questionIdEl = document.querySelector("#questionId");
let questionTitleEl = document.querySelector("#questionTitle");
let questionChoicesEl = document.querySelector("#questionChoices");
let questionContainerEl = document.querySelector("#questionContainer");
let playerNameEl = document.querySelector("#playerName");
let myScoreBtnEl = document.querySelector("#myScore-btn");
let userScoreEl = document.querySelector("#userscore");
let clearScoresBtnEl = document.querySelector("#clearScore-btn");

let questionIndex = -1;
let countdown = 75;
let score = 0;
let timer;

// store array of questions, with corresponding choices and answer
const questions = [
    {
        id: "1",
        title: "Commonly Used data types DO NOT include:",
        choices: ["strings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        id: "2",
        title: "The condition in an if / else statement is enclosed within _____.",
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
    countEl.innerHTML = "";
    gameScoreConEl.classList.remove("d-none");
    userScoreEl.innerHTML = score;
}

// references an index and displays new question each time it is called
function nextQuestion() { 
    questionIndex++;
    if (questionIndex > questions.length-1) {
        gameOver();
        return;
    }
    
    let currentQuestion = questions[questionIndex];
    questionChoicesEl.innerHTML = "";
    questionTitleEl.innerHTML = "<p class=\"mb-0\"> " + currentQuestion.title + "</p>";
    for (let selectedAnswer = 0; selectedAnswer < currentQuestion.choices.length; selectedAnswer++) {
        let buttonId = `<button class="p-2 m-1"onclick="[ANS]">[CHOICE]</button>`;
        buttonId = buttonId.replace("[CHOICE]", currentQuestion.choices[selectedAnswer]);
        if (currentQuestion.choices[selectedAnswer] == currentQuestion.answer){
            buttonId = buttonId.replace("[ANS]", "correctAnswer()");
        } else {
            buttonId = buttonId.replace("[ANS]", "incorrectAnswer()");
        }
        questionChoicesEl.innerHTML += buttonId
    }
};

function start() {  
    console.log();
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
    console.log(playerNameEl.value);
    localStorage.setItem("highscore", score);
    localStorage.setItem("initials", playerNameEl.value);
    viewHighScores();
}

function viewHighScores() {
    homeEl.classList.add("d-none");
    gameEl.classList.add("d-none");
    highscoreEl.classList.remove("d-none");
    savedNameEl.innerHTML = localStorage.getItem("initials");
    savedScoreEl.innerHTML = localStorage.getItem("highscore");
}

function clearHighScore() {

    localStorage.setItem("highscore", "");
    localStorage.setItem("initials",  "");
    location.reload();
}

// event listeners
playBtnEl.addEventListener("click", start);
viewHighScoresEl.addEventListener("click", viewHighScores);
myScoreBtnEl.addEventListener("click",setHighScore);
clearScoresBtnEl.addEventListener("click",clearHighScore);
