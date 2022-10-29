const  quizQuestions=[
    {
        question:"HTML stands for -",
        a:"HighText Machine Language",
        b:"HyperText Markup Langauge",
        c:"Hyperlink Markup Langauge",
        d:" None",
        rigthAns:"ans2"
    } ,
    {
        question:"The correct sequence of HTML tags for starting a webpage is - ",
        a:"Head, Title, HTML, body",
        b:"HTML, Body, Title, Head",
        c:"HTML, Head, Title, Body",
        d:"HTML, Title, Head, Body",
        rigthAns:"ans4"
    } ,
    {
        question:"Closing of a tag in HTML?",
        a:" - ",
        b:" ! ",
        c:" / ",
        d:" . ",
        rigthAns:"ans3"
    },
    {
        question:"Unordered list in HTML?",
        a:"<ul>",
        b:"<ol>",
        c:"<li>",
        d:"<i>",
        rigthAns:"ans1"
    } ,
    {
        question:"Line-break in HTML? ",
        a:"<br>",
        b:"<ba>",
        c:"<n>",
        d:"<b>",
        rigthAns:"ans1"
    } ,
    {
        question:"Largest heading in HTML? ",
        a:"h1",
        b:"h2",
        c:"h3",
        d:"h6",
        rigthAns:"ans1"
    } ,
    {
        question:"Text bold in HTML? ",
        a:"<bo>",
        b:"<b>",
        c:"<a>",
        d:"<br>",
        rigthAns:"ans2"
    } ,
    {
        question:"Ordered list in HTML?",
        a:"<ul>",
        b:"<oi>",
        c:"<ol>",
        d:"<i>",
        rigthAns:"ans3"
    } ,
    {
        question:"Text italic in HTML? ",
        a:"<italics>",
        b:"<ol>",
        c:"<oi>",
        d:"<i>",
        rigthAns:"ans4"
    } ,
    {
        question:"Underlined text?",
        a:"<ul>",
        b:"<ol>",
        c:"<u>",
        d:"<lu>",
        rigthAns:"ans3"
    } 
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");


const submit = document.querySelector("#submit");
const showScore = document.querySelector("#ViewScore");
let questionCount = 0;
let score=0;

const loadQuestion = ()=>{
   
    let list = quizQuestions[questionCount];
    question.innerText = list.question;
    option1.innerText = list.a;
    option2.innerText = list.b;
    option3.innerText = list.c;
    option4.innerText = list.d;
}

loadQuestion();


const getCheckedAnswer = ()=>{
    let ans;
    answers.forEach((y)=>{
        if(y.checked){
            ans = y.id;
        }
    });
    return ans;
};



const uncheckAnswers = ()=>{
    answers.forEach((y)=>{ y.checked=false;})
} 



submit.addEventListener("click" , ()=>{
    const x = getCheckedAnswer();
    if(x === quizQuestions[questionCount].rigthAns){
        score++;
     }
     questionCount++;
     uncheckAnswers();
     if(questionCount<quizQuestions.length){
         loadQuestion();
     }
     else{
        showScore.innerHTML = 
        `
        <h3 class="h3">Your Score is  ${score}/${quizQuestions.length}    </h3>
        <button class="btn" onClick="location.reload()">Try Again</button>
      `
      showScore.classList.remove("score");
     }
})