let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbi Williams",
    answer_2: "Chuck Noris",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Biber",
    right_answer: 3,
  },
  {
    question: "NajJaci covek?",
    answer_1: "strong Man",
    answer_2: "Chuck Noris",
    answer_3: "Brus Lee",
    answer_4: "Ibrahimovic",
    right_answer: 2,
  },
  {
    question: "Najbolji fudbaler",
    answer_1: "Ronaldo",
    answer_2: "Roberto Carlos",
    answer_3: "Mihailovic",
    answer_4: "Ivica Kralj",
    right_answer: 1,
  },
  {
    question: "De nema secer?",
    answer_1: "Vino",
    answer_2: "Coca Cola",
    answer_3: "voda",
    answer_4: "rakija",
    right_answer: 3,
  },
  {
    question: "Ruska Auto Marka?",
    answer_1: "Zastava",
    answer_2: "Zaporozec",
    answer_3: "Mercedes",
    answer_4: "Lada",
    right_answer: 4,
  },
  {
    question: "U Kom mesecu se pada bozic?",
    answer_1: "Jun",
    answer_2: "Septembar",
    answer_3: "Maj",
    answer_4: "Januar",
    right_answer: 4,
  },
  {
    question: "koj je izmislio struju",
    answer_1: "Mitar Miric",
    answer_2: "Ognjen Amidzic",
    answer_3: "Nikola Tesla",
    answer_4: "MiniMax",
    right_answer: 3,
  },
  {
    question: "Koje je boje More?",
    answer_1: "Plavo",
    answer_2: "Zeleno",
    answer_3: "Crveno",
    answer_4: "Sareno",
    right_answer: 1,
  },
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio("audio/erfolg.mp3");
let AUDIO_FAIL = new Audio("audio/error.mp3");

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScrean();
  } else {
    updateProgresBar();
    updateToNextQuestion();
  }
}

function gameIsOver() {
   return currentQuestion >= questions.length;
}

function showEndScrean() {
  document.getElementById("endScreen").style = "";
  document.getElementById("qustionBody").style = "display: none";
  document.getElementById("amountOfQuestions").innerHTML = questions.length;
  document.getElementById("amountOfRightQuestions").innerHTML = rightQuestions;
  document.getElementById("header-img").src = "img/win.jpg";
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("question-number").innerHTML = currentQuestion + 1;
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function updateProgresBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progress-bar").innerHTML = `${percent} %`;
  document.getElementById("progress-bar").style = `width: ${percent}%;`;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    // Richtige Frage beantwortet
    document.getElementById(selection).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
    AUDIO_FAIL.play();
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("header-img").src = "img/quiz.jpg";
  document.getElementById("qustionBody").style = ""; // questionbody wier anzeigen
  document.getElementById("endScreen").style = "display: none"; // Endscrean ausblenden
  rightQuestions = 0;
  currentQuestion = 0;
  init();
}
