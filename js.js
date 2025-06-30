const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Computer Style Sheets",
    d: "Creative Style System",
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "None of the above",
    correct: "a"
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b"
  },
  {
    question: "Which company developed JavaScript?",
    a: "Mozilla",
    b: "Netscape",
    c: "Google",
    d: "Microsoft",
    correct: "b"
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEls = document.getElementsByName("answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");

function loadQuiz() {
  deselectAnswers();
  const current = quizData[currentQuiz];
  questionEl.innerText = current.question;
  a_text.innerText = current.a;
  b_text.innerText = current.b;
  c_text.innerText = current.c;
  d_text.innerText = current.d;
}

function getSelected() {
  let answer = undefined;
  answersEls.forEach(el => {
    if (el.checked) answer = el.value;
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach(el => el.checked = false);
}

nextBtn.addEventListener("click", () => {
  const selected = getSelected();
  if (selected) {
    if (selected === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      document.querySelector(".quiz-container").innerHTML = `
        <h2>You answered ${score} out of ${quizData.length} correctly.</h2>
        <button onclick="location.reload()">Play Again</button>
      `;
    }
  } else {
    alert("Please select an answer!");
  }
});

loadQuiz();
