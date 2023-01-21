// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, set, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
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

var question = document.getElementById('Question')
var Option = document.getElementById('Option')
var optionsparent = document.getElementById('optionsparent')
var CorrectAnswerEt = document.getElementById('Correctanswer')

var options = []
var Correctanswer
function renderOptions() {
    optionsparent.innerHTML = ''
    for (var i = 0; i < options.length; i++) {
        optionsparent.innerHTML += `<li onclick="setCorrectanswer('${options[i]}')" class='p-2 bg-light fs-5 rounded shadow my-2'>${options[i]}</li>`
    }
}

window.AddOption = function () {
    options.push(Option.value)
    console.log(options)
    renderOptions()
}
window.setCorrectanswer = function (a) {
    Correctanswer = a
    CorrectAnswerEt.innerHTML = Correctanswer
}

window.SubmitQuestion = function () {
    var obj = {
        question: question.value,
        options: options,
        Correctanswer: Correctanswer
    }
    obj.id = push(ref(db, 'question/')).key

    const reference = ref(db, `question/${obj.id}`)
    set(reference, obj)

    console.log(obj)
}
