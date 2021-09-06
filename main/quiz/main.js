var ques = document.getElementById('ques');
var opt = document.getElementById('opt');
var currentQuestion = document.getElementById('currentQuestion');
var totalQuestion = document.getElementById('totalQuestion');

var arr = [{
    question: "HTML stands for  ____________",
    option: ['Hyper Text Mark Up Language', 'Haaperr Tittle Marks Up Language', 'Hypar Text Merk Up Languege', 'Hidrogen Text Mark Up Language'],
    correctoption: 'Hyper Text Mark Up Language'
}, {
    question: "HTML stands for ____________",
    option: ['Hyper Text Mark Up Language', 'Haaperr Tittle Marks Up Language', 'Hypar Text Merk Up Languege', 'Hidrogen Text Mark Up Language'],
    correctoption: 'Hyper Text Mark Up Language'
}, {
    question: "HTML stands for  ____________",
    option: ['Hyper Text Mark Up Language', 'Haaperr Tittle Marks Up Language', 'Hypar Text Merk Up Languege', 'Hidrogen Text Mark Up Language'],
    correctoption: 'Hyper Text Mark Up Language'
}, {
    question: "HTML stands for ____________",
    option: ['Hyper Text Mark Up Language', 'Haaperr Tittle Marks Up Language', 'Hypar Text Merk Up Languege', 'Hidrogen Text Mark Up Language'],
    correctoption: 'Hyper Text Mark Up Language'
}, {
    question: "HTML stands for ____________",
    option: ['Hyper Text Mark Up Language', 'Haaperr Tittle Marks Up Language', 'Hypar Text Merk Up Languege', 'Hidrogen Text Mark Up Language'],
    correctoption: 'Hyper Text Mark Up Language'
}, {
    question: "HTML stands for ____________",
    option: ['Hyper Text Mark Up Language', 'Haaperr Tittle Marks Up Language', 'Hypar Text Merk Up Languege', 'Hidrogen Text Mark Up Language'],
    correctoption: 'Hyper Text Mark Up Language'
}, {
    question: "HTML stands for ____________",
    option: ['Hyper Text Mark Up Language', 'Haaperr Tittle Marks Up Language', 'Hypar Text Merk Up Languege', 'Hidrogen Text Mark Up Language'],
    correctoption: 'Hyper Text Mark Up Language'
}, {
    question: "HTML stands for ____________",
    option: ['Hyper Text Mark Up Language', 'Haaperr Tittle Marks Up Language', 'Hypar Text Merk Up Languege', 'Hidrogen Text Mark Up Language'],
    correctoption: 'Hyper Text Mark Up Language'
}, {
    question: "HTML stands for ____________",
    option: ['Hyper Text Mark Up Language', 'Haaperr Tittle Marks Up Language', 'Hypar Text Merk Up Languege', 'Hidrogen Text Mark Up Language'],
    correctoption: 'Hyper Text Mark Up Language'
}, {
    question: "HTML stands for ____________",
    option: ['Hyper Text Mark Up Language', 'Haaperr Tittle Marks Up Language', 'Hypar Text Merk Up Languege', 'Hidrogen Text Mark Up Language'],
    correctoption: 'Hyper Text Mark Up Language'
}]

var score = 0

function startQuiz() {
    currentQuestion.innerHTML = score + 1;
    totalQuestion.innerHTML = arr.length;
    ques.innerHTML = arr[score].question;
    opt.innerHTML = '';

    for (var i = 0; i < arr[score].option.length; i++) {
        opt.innerHTML += `<div class="col-md-6 text-center my-2 ">
     <button type="button" class="btn btn1 text-white darkBackground fs-4 py-3 mt-3" onclick="click(${arr[score].option[i]},${arr[score].correctoption})"> ${arr[score].option[i]} </button>
        </div>`
    }

}

startQuiz()

// console.log(arr[0]);

// var opt = document.getElementById('opt');

// opt.innerHTML = ''

// ques.innerText = arr[0].question;

// opt.innerHTML += `<div class="col-md-6 text-center my-2 ">
// <button type="button" class="btn btn1 text-white darkBackground fs-4 py-3 mt-3" onclick="click()"> ${arr[0].option[0]} </button>
// </div>` 


// function running() {

//     var ques = document.getElementById('ques');
//     var opt = document.getElementById('opt');
//     for (var i = 0; i < arr.length; i++) {

//         opt.innerHTML = '';
//         // ques.innerHTML = '';

//         // console.log(ques.innerHTML);
//         ques.innerHTML = arr[i].question;
//         console.log(ques.innerHTML);

//         for (var j = 0; j )
//             opt.innerHTML += `<div class="col-md-6 text-center my-2 ">
// <button type="button" class="btn btn1 text-white darkBackground fs-4 py-3 mt-3" onclick="click()"> ${arr[i].option[0]} </button>
// </div>`


//         // var ques = document.getElementById('ques');

//         // ques.innerText = arr[i].question;
//     }
// }


// function click() {
//     var disab = document.getElementById('next');

//     if (disab.disabled == true) {
//         disab.disabled = disab.enabled;
//     }

// }

// running()