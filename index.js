
var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What's your name?");

var highScores=[{
  name:"Varshith",
  score:5
},{
  name:"Tanay",
  score:3
}]

console.log("Welcome " + userName + " to DO YOU KNOW RVK? ")


function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  console.log(question, answer)

  if (userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log("right");
    score = score + 1;

  } else {
    console.log("wrong");
  }
  console.log("Current score :", score);
  console.log("-------------------")

}
var questionList = [{
  question: "Where do I live?",
  answer: "Mangalore"
}, {
  question: "My favourite superhero would be?", answer: "Superman"
}
  , {
  question: "Where do I study?", answer: "NMAMIT"
}, {
  question: "What is my branch?", answer: "Electrical"
}, {
  question: "What is my surname?", answer: "Kumar"
}
];

for (var i = 0; i < questionList.length; i++) {
  var currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! Your final score is ",score);

console.log("*****Leader Board*****");
for(var i=0;i<highScores.length;i++){
console.log(highScores[i].name+" : "+highScores[i].score);

}

