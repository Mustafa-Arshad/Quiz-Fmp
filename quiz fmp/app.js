// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ-kQ5ML3-m87M5MW-P3fa-aCwc-1O42I",
  authDomain: "quizfmp.firebaseapp.com",
  projectId: "quizfmp",
  storageBucket: "quizfmp.appspot.com",
  messagingSenderId: "42890474058",
  appId: "1:42890474058:web:2056a098e749b681446cb3",
  measurementId: "G-LHNQMTZ2J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()



function getDataFromDatabase() {
  const reference = ref(db, 'question/')
  onChildAdded(reference, function (data) {
    console.log(data.val())
    questions.push(data.val())
    // renderquestion()
  })
}

getDataFromDatabase()

var question = document.getElementById("question");
var questionNum = document.getElementById("questionNum");
var ansParent = document.getElementById("ansParent");
var indexNum = 0;
var marks = 0;
var main = document.getElementById("main");

function renderquestion() {
  question.innerHTML = indexNum + 1
  questionNum.innerHTML = questions.length

  var obj = questions[indexNum]
  question.innerHTML = obj.question

  ansParent.innerHTML = ''

  for (var i = 0; i < obj.options.length; i++) {
    ansParent.innerHTML += `<div class="col-md-6 py-2">
    <button onclick="checkAns(${obj.options[i]},${obj})" class="btn btn-primary px-5 rounded-pill w-100">${obj.options[i]}</button>
</div>`
  }
}

var questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    Correctanswer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  // {
  //   numb: 2,
  //   question: "What does CSS stand for?",
  //   answer: "Cascading Style Sheet",
  //   options: [
  //     "Common Style Sheet",
  //     "Colorful Style Sheet",
  //     "Computer Style Sheet",
  //     "Cascading Style Sheet",
  //   ],
  // },
  // {
  //   numb: 3,
  //   question: "What does PHP stand for?",
  //   answer: "Hypertext Preprocessor",
  //   options: [
  //     "Hypertext Preprocessor",
  //     "Hypertext Programming",
  //     "Hypertext Preprogramming",
  //     "Hometext Preprocessor",
  //   ],
  // },
  // {
  //   numb: 4,
  //   question: "What does SQL stand for?",
  //   answer: "Structured Query Language",
  //   options: [
  //     "Stylish Question Language",
  //     "Stylesheet Query Language",
  //     "Statement Question Language",
  //     "Structured Query Language",
  //   ],
  // },
  // {
  //   numb: 5,
  //   question: "What does XML stand for?",
  //   answer: "eXtensible Markup Language",
  //   options: [
  //     "eXtensible Markup Language",
  //     "eXecutable Multiple Language",
  //     "eXTra Multi-Program Language",
  //     "eXamine Multiple Language",
  //   ],
  // },
  // {
  //   numb: 6,
  //   question: "What does CAD stand for?",
  //   answer: "Computer Aided Design",
  //   options: [
  //     "Compile Accumulated Design",
  //     "Computer Audio Drafting",
  //     "Computer Aided Design",
  //     "Complex Aided Design"
  //   ]
  // },
  // {
  //   numb: 7,
  //   question: "What does CC stand for?",
  //   answer: "Carbon Copy",
  //   options: [
  //     "Carbon Copy",
  //     "Computer Complexcity",
  //     "Compact Cycle",
  //     "Compact Clock"
  //   ]
  // },
  // {
  //   numb: 8,
  //   question: "What does DAT stand for?",
  //   answer: "Digital Audio Tape",
  //   options: [
  //     "Design Audio Tape",
  //     "Digital Access Timer",
  //     "Design Auxiliary Todo",
  //     "Digital Audio Tape"
  //   ]
  // },
  // {
  //   numb: 9,
  //   question: "What does DOC stand for?",
  //   answer: "Data Optimizing Computer",
  //   options: [
  //     "Digital Optimizing Command",
  //     "Disk Operating Clock",
  //     "Data Optimizing Computer",
  //     "Digital Optimizing Computer"
  //   ]
  // },
  // {
  //   numb: 10,
  //   question: "What does CMD stand for?",
  //   answer: "Command",
  //   options: [
  //     "Computerize Manufacturing Data",
  //     "Command",
  //     "Comment",
  //     "Complexcity"
  //   ]
  // },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  // {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

function showQuestion() {
  question.innerHTML = questions[indexNum].question;
  questionNum.innerHTML =
    "Question # " + (indexNum + 1) + "/" + questions.length;
  ansParent.innerHTML = "";
  for (var i = 0; i < questions[indexNum].options.length; i++) {
    ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns ('${questions[indexNum].options[i]}','${questions[indexNum].Correctanswer}')" class="btn btn-primary px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      </button>
  </div>`;
  }
}
// renderquestions();
showQuestion();


window.nextQuestion = function () {
  if (indexNum + 1 == question.length) {
    alert("your score is " + score)
  } else {

    indexNum++;
    showQuestion();
  }
}

window.checkAns = function (a, b) {
  if (a == b) {
    marks++;
  }
  if (indexNum + 1 == questions.length) {
    main.innerHTML = `YOUR MARKs is ${marks}`;
  } else {
    nextQuestion();
  }
}