var questions = [
    {
        prompt: "How"
        answer: ""
    },
    {
        prompt: ""
        answer: ""
    },
    {

    }

]
var score = 0;

for (var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("WRONG!");
        
    }
}

alert("You scored " + score + "/" + questions.length);
