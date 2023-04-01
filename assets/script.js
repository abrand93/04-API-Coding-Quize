var startButton = document.getElementById('start-btn')
var questionContainer = document.getElementById('questions-container')
var questionsElement = document.getElementById('questions')
var answer = document.getElementById('answer-buttons')
var showFeedbackCorrect = document.getElementById('feedback-correct')
var showFeedbackIncorrect = document.getElementById('feedback-wrong')
var score = 0
var scoreBoard = document.querySelector('.current-score')
var finalScore = document.querySelector('.final-score')
var timerEl = document.getElementById('countdown');
var inputName = document.getElementById('name')
var questionsIndex = 0
var A = document.getElementById('A')
var B = document.getElementById('B')
var C = document.getElementById('C')
var D = document.getElementById('D')
var optionIndex = 0

var questions = [
    { questions: 'Arrays in JavaScript can be used to store _______',
    options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer:'all of the above'},
    
    { questions: 'next question 1',
    options: ['numbers and strs-1ing', 'other arrays', 'booleans', 'all of the above'],
    answer:'numbers and strs-1ing'},
    { questions: 'next question 2',
    options: ['numbers and strings-2', 'other arrays', 'booleans', 'all of the above'],
    answer:'other arrays'},
    { questions: 'next question 3',
    options: ['numbers and strings-3', 'other arrays', 'booleans', 'all of the above'],
    answer:'booleans'},
    { questions: 'next question -4',
    options: ['numbers and strings-4', 'other arrays', 'booleans', 'all of the above'],
    answer:'all of the above'}

    
]   
var timeLeft = 20

function ShowScore(){
    scoreBoard.innerText = " Current score " + score
}
function showFinalScore(){
    finalScore.innerText = " Current score " + score
}

function startTimer(){
var timeInterval = setInterval(function () {
    //
    // YOUR CODE HERE
    timeLeft--
   timerEl.textContent = timeLeft + " second(s) left."
   if (timeLeft === 0 ){
    questionContainer.classList.add('hide')
    ShowScore()
    inputName.classList.remove('hide')
    showFinalScore()
   

   }
  }, 1000);

}
startButton.addEventListener('click', startQuize)

function startQuize(){
    
startTimer()
startButton.classList.add('hide')
questionContainer.classList.remove('hide')
showQuestions()
showAnswer()
}

function setNextQuestion (){
  
}

function showAnswer(){
    A.innerText = questions[questionsIndex].options[0]
    B.innerText = questions[questionsIndex].options[1]
    C.innerText = questions[questionsIndex].options[2]
    D.innerText = questions[questionsIndex].options[3]
    
}


function showQuestions(){
    questionsElement.innerText = questions[questionsIndex].questions
    showFeedbackCorrect
}


A.addEventListener('click', function()
  
{
    var correctanswer = questions[questionsIndex].answer
       if (A.textContent === correctanswer){
        showFeedbackCorrect.innerText = 'Correct'
       questionsIndex++
       correctanswer
       score++
      
        
       }
       else{
        showFeedbackIncorrect.innerText ='Incorrect'
        questionsIndex++
        score--
    }
      showQuestions()
       showAnswer()
       ShowScore()
       console.log(score)
    })
       //break
    B.addEventListener('click', function()
  
{
    var correctanswer = questions[questionsIndex].answer

       if (B.textContent === correctanswer){
        showFeedbackCorrect.innerText = 'Correct'
       questionsIndex++
       correctanswer
       score = score + 10
      
        
       }
       else{
        showFeedbackIncorrect.innerText ='Incorrect'
        questionsIndex++
        timeLeft = timeLeft + 10
       }
       showQuestions()
       showAnswer()
       ShowScore()
    })
    //break
    C.addEventListener('click', function()
  
    {
        var correctanswer = questions[questionsIndex].answer
           if (C.textContent === correctanswer){
            showFeedbackCorrect.innerText = 'Correct'
           questionsIndex++
          score ++
          timeLeft = timeLeft + 10
            
           }
           else{
            showFeedbackIncorrect.innerText ='Incorrect'
            questionsIndex++
           score--
           }
           ShowScore()
           showQuestions()
           showAnswer()
        })
        //break
        D.addEventListener('click', function()
    
        {
             var correctanswer = questions[questionsIndex].answer

               if (D.textContent === correctanswer){
                showFeedbackCorrect.innerText = 'Correct'
               questionsIndex++
              
               console.log(score)
               timeLeft = timeLeft + 10
               score = score + 10
                
               }
               else{
                showFeedbackIncorrect.innerText ='Incorrect'
                questionsIndex++
                score--
               
               }
               ShowScore()
               showQuestions()
               showAnswer()
               
            })

