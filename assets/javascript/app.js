// variable and array for the questions
var questionBank = [{
    question: 'What is Dwight\'s middle name?',
    correctAnswer: 'Kurt',
    choices: ["Kurt", "Danger", "Gary"]
  },
  {
    question: 'How much did Angela pay for Princess Lady?',
    correctAnswer: "$7000",
    choices: ["$10000", "$7000", "$500"]
  },
  {
    question: 'Where is Dunder Mifflin located?',
    correctAnswer: "Scranton",
    choices: ["Buffalo", "Scranton", "Utica"]
  },
  {
    question: 'What is Michael Scott\'s great lost film?',
    correctAnswer: 'Threat Level: Midnight',
    choices: ['Threat Level: Midnight', 'Somehow I Manage', 'Pie']
  },
  {
    question: 'Who spray painted butts on Pam\'s Mural?',
    correctAnswer: 'Frank',
    choices: ["Kevin", "Toby", "Frank"]
  },
  {
    question: 'What character does Michael Scott marry in real life?',
    correctAnswer: 'Carol',
    choices: ['Carol', 'Jan', 'Holly'],
  }
];

//variable for the number correct
var totalRight = 0;
//variable for the number wrong
var totalWrong = 0;
//counter
var counter = 30;
//timer
var timer;

function done() {

  // alert("Game has ended fam.");

  clearInterval(timer);


  console.log("interval has been cleared")

  for (var i = 0; i < questionBank.length; i++) {
    // grab answered value out of question
    var answer = $("[name=question-" + i + "]:checked").val();
    console.log(answer);
    if (answer === questionBank[i].correctAnswer) {
      totalRight++;
      console.log(totalRight);
    }
  }

  $(".display").empty();

};

//a function for the countdown timer
function countdown() {
  // console.log(counter);

  counter--;

  console.log(counter);

  $(".timer").text(counter);

  if (counter === 0) {

    done();
    $(".display").html("<h2>You got  <span class='res'>" + totalRight + " out of " + questionBank.length + " right");
  }
}

//function that will display the questions
function displayQuestions(questionBank) {
  // console.log(questionBank);

  for (var i = 0; i < questionBank.length; i++) {
    console.log(questionBank[i].question);

    var question = questionBank[i].question;
    $('.display').append("<h3>" + question + "</h3>");

    for (var j = 0; j < questionBank[j].choices.length; j++) {
      console.log(questionBank[i].choices[j]);

      var choice = questionBank[i].choices[j];
      $('.display').append("<input type='radio' name='question-" + i + "' value='" + questionBank[i].choices[j] + "' >" + questionBank[i].choices[j]);

    }
  }
  //creating the button for finishing the game
  $(".display").append("<br><br><button class='button1'> How'd I do?</button>");

}


$(document).on("click", ".start", function () {
  console.log("ready to start");

  $(".display").empty();

  // countdown(counter);

  $(".display").prepend("<h3> Timer: <span class='timer'>" + counter + "</span></h3>");

  timer = setInterval(countdown, 1000)

  displayQuestions(questionBank);




});

$(document).on("click", ".button1", function () {
  console.log("game has ended");

  done();

  $(".display").html("<h2>You got  <span class='res'>" + totalRight + " out of " + questionBank.length + " right");



});
