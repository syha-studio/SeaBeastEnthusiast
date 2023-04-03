//Question bank
var questionBank = [
  {
    question: "Aku merupakan hewan yang terkenal sangat cerdas diantara hewan invertebrata, siapakah aku? ",
    option: ["Paus", "Gurita", "Lobster", "Udang"],
    answer: "Gurita",
  },
  {
    question: "Dibawah ini manakah yang bukan termasuk kedalam zona kedalaman laut?",
    option: ["Sunlight Zone", "Trenches Zone", "Rise Zone", "Twilight Zone"],
    answer: "Rise Zone",
  },
  {
    question: "Aku merupakah salah satu hewan yang berada di Twilight Zone, hewan apakah aku?",
    option: ["Belut Cusk", "Anjing laut", "Teripang", "Comb Jelly"],
    answer: "Comb Jelly",
  },
  {
    question: "Udang, Lobster dan Kepiting merupakan kumpulan hewan yang hidup di zona?",
    option: ["Midnight Zone", "Abyssal Zone", "Sunlight Zone", "Trenches Zone"],
    answer: "Sunlight Zone",
  },
  {
    question: "Aku adalah hewan yang memiliki bentuk tubuh seperti bintang, hewan apakah aku ?",
    option: ["Basket Starfish", "Cumi-cumi", "Cacing Tabung Raksasa", "Ubur-ubur"],
    answer: "Basket Starfish",
  },
  {
    question: "Dibawah ini manakah yang bukan merupakan ciri-ciri dari hewan Penyu ?",
    option: ["Berbentuk seperti kura-kura", "Memiliki tempurung", "Termasuk hewan yang dilindungi", "Memiliki antena besar dan panjang"],
    answer: "Memiliki antena besar dan panjang",
  },
  {
    question: "Tubuhku berbentuk silindris dan memanjang, gerakku lambat dan aku hidup di dasar pasir. Hewan apakah aku ?",
    option: ["Cumi-cumi Vampir", "Teripang", "Kepiting", "Udang"],
    answer: "Teripang",
  },
  {
    question: "Disebut zona apakah yang memiliki kedalaman laut hingga 13.125 kaki ?",
    option: ["Midnight Zone", "Sunlight Zone", "Twilight Zone", "Abyssal Zone"],
    answer: "Midnight Zone",
  },
  {
    question: " Dibawah ini manakah yang termasuk kedalam hewan yang hidup di Abyssal Zone ?",
    option: ["Basket Starfish & Cumi-cumi Kolosal", "Cumi-cumi Kolosal & Anjing Laut", "Basket Starfish & Belut Cusk", "Cumi-cumi Kolosal & Viperfish"],
    answer: "Basket Starfish & Cumi-cumi Kolosal",
  },
  {
    question: "Kuda laut termasuk kedalam kingdom apa ?",
    option: ["Plantae", "Animalia", "Protoctista", "Monera"],
    answer: "Animalia",
  },
];

var question = document.getElementById("question");
var quizContainer = document.getElementById("quiz-container");
var scorecard = document.getElementById("scorecard");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var next = document.querySelector(".next");
var points = document.getElementById("score");
var span = document.querySelectorAll("span");
var i = 0;
var score = 0;

//Function to display questions
function displayQuestion() {
  for (var a = 0; a < span.length; a++) {
    span[a].style.background = "none";
  }
  question.innerHTML = "No. " + (i + 1) + "    " + questionBank[i].question;
  option0.innerHTML = questionBank[i].option[0];
  option1.innerHTML = questionBank[i].option[1];
  option2.innerHTML = questionBank[i].option[2];
  option3.innerHTML = questionBank[i].option[3];
  stat.innerHTML = "Question" + " " + (i + 1) + " " + "of" + " " + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = "limegreen";
  } else {
    document.getElementById(e.id).style.background = "tomato";
  }
  setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
  } else {
    points.innerHTML = score + "/" + questionBank.length;
    quizContainer.style.display = "none";
    scoreboard.style.display = "block";
  }
}

//click events to next button
next.addEventListener("click", nextQuestion);

//Back to Quiz button event
function backToQuiz() {
  location.reload();
}

//Function to check Answers
function checkAnswer() {
  var answerBank = document.getElementById("answerBank");
  var answers = document.getElementById("answers");
  answerBank.style.display = "block";
  scoreboard.style.display = "none";
  for (var a = 0; a < questionBank.length; a++) {
    var list = document.createElement("li");
    list.innerHTML = questionBank[a].answer;
    answers.appendChild(list);
  }
}

displayQuestion();
