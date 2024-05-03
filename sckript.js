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

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  
  showQuestion()
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById('questiontext').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];

}
