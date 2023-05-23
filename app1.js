// Adding Questions and options
const dataSet = [
    {
     questionData:"Who is the PM of India?",
     answer:[
         {value:"Narendra Modi" , correct:true},        
         {value:"Amit Shah" , correct:false},        
         {value:"Yogi Aditya Nath" , correct:false},        
         {value:"Dr S Jaishankar" , correct:false},        
     ]
    },
    {
     questionData:"In which year, Telangana was carved out of erstwhile unified Andhra Pradesh?",
     answer:[
         {value:"2014", correct:true},
         {value:"2017", correct:false},
         {value:"2012", correct:false},
         {value:"2009", correct:false},
     ]
    },
    {
     questionData:"Who chairs the National Disaster Management Authority (NDMA)?",
     answer:[
         {value:"Persident", correct:false},
         {value:"Finance Minister", correct:false},
         {value:"Home Minister", correct:false},
         {value:"Prime Minister", correct:true},
     ]
    },
    {
     questionData:"Where is the Central Institute of Fisheries Technology (ICAR CIFT) located?",
     answer:[
         {value:"Kochi", correct:true},
         {value:"Chennai", correct:false},
         {value:"Mumbai", correct:false},
         {value:"Visakhapatnam", correct:false},
     ]
    },
    {
     questionData:"Which PSU signed pacts to develop green hydrogen technology in Leh and Kargil?",
     answer:[
         {value:"BHEL", correct:false},
         {value:"NHPC", correct:true},
         {value:"GAIL", correct:false},
         {value:"NTPC", correct:false},
     ]
    },
    {
     questionData:"India first brain health clinic was inaugurated in which city?",
     answer:[
         {value:"Bengaluru", correct:true},
         {value:"New Delhi", correct:false},
         {value:"Pune", correct:false},
         {value:"Chennai", correct:false},
     ]
    },
]
let currentQuestionindex=0;
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('option-container');
const nextButton = document.getElementById('next');
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click',resart)
nextButton.addEventListener('click',setNextquestion)
setNextquestion();
function setNextquestion(){
    resetState();
   showQuestion(currentQuestionindex);
   currentQuestionindex++;
   document.body.style.backgroundColor = "rgb(54, 54, 125)";
   if(currentQuestionindex > dataSet.length-1){
    nextButton.classList.add('hide');
    resetButton.classList.remove('hide');
   }
}
function showQuestion(question){
    questionElement.innerHTML = dataSet[currentQuestionindex].questionData;
    dataSet[currentQuestionindex].answer.forEach(answer => {
        const button = document.createElement('button');
        button.addEventListener('click',selectAnswer);
        button.innerText = answer.value;
        button.classList.add('btn');
        answerButton.appendChild(button);
        function selectAnswer(){
            if(answer.correct){
                button.classList.add("right");
                document.body.style.backgroundColor = "green";
            }
            else{
                button.classList.add("wrong");
                document.body.style.backgroundColor = "red";
            }
    }
    })
}
function resetState(){
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild)
  }
}
function resart(){
    currentQuestionindex=0;
    setNextquestion();
    nextButton.classList.remove('hide');
    resetButton.classList.add('hide')
}
