var startButton = document.getElementById('str-btn')
var submitButton = document.getElementById('Submit-btn')
var tryAgainButton = document.getElementById('start-Over')
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
var endScore = document.getElementById('end-score')
var displayName = document.getElementById('display-name')
var displayScore = document.getElementById('display-score')
var startContainer= document.getElementById('start-btn')
var hightScores = []



var questions = [
    { questions: 'Arrays in JavaScript can be used to store _______',
    options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer:'all of the above'},
    
    { questions: 'What does HTML stand for ',
    options: ['Hypertext Markup Language', 'Hyper Mark up', 'Markup Language', 'I dont know'],
    answer:'Hypertext Markup Language'},
    { questions: 'What is a boolen',
    options: ['numbers and strings', 'only numbers', 'A result that can only be true or false', 'all of the above'],
    answer:'A result that can only be true or false'},
    { questions: 'local storage can only store?',
    options: ['strings', 'other arrays', 'booleans', 'all of the above'],
    answer:'strings'},
    { questions: 'Is javaScript different then java',
    options: ['Yes', 'No', 'maybe', 'sometimes'],
    answer:'Yes'},
]
function Correct(){
    showFeedbackCorrect.classList.remove('hide')
    setTimeout(function(){
        
        showFeedbackCorrect.classList.add('hide')
    },500)
    
}
function Incorrect(){
    showFeedbackIncorrect.classList.remove('hide')
    setTimeout(function(){
        
        showFeedbackIncorrect.classList.add('hide')
    },500)
}
var timeLeft = 30

function ShowScore(){
    scoreBoard.classList.remove('hide')

    scoreBoard.innerText = " Current score " + score
}
function showFinalScore(){
    finalScore.innerText = " Current score " + score
}

function startTimer(){
var timeInterval = setInterval(function () {
  
    timeLeft--
   timerEl.textContent = timeLeft + " seconds left."
   if (timeLeft <= 0 || questionsIndex >= 5){
    questionContainer.classList.add('hide')
    ShowScore()
    inputName.classList.remove('hide')
    tryAgainButton.classList.remove('hide')
    showFinalScore()
    clearInterval(timeInterval)
   
   

   }
  }, 1000);

}
startButton.addEventListener('click', startQuize)

function startQuize(){
    
startTimer()
startButton.classList.add('hide')
startContainer.classList.add('hide')
questionContainer.classList.remove('hide')
showQuestions()
showAnswer()
}

function setNextQuestion (){
  
}

function showAnswer(){
    if(questionsIndex >= 5){
        return
    }
    A.innerText = questions[questionsIndex].options[0]
    B.innerText = questions[questionsIndex].options[1]
    C.innerText = questions[questionsIndex].options[2]
    D.innerText = questions[questionsIndex].options[3]
    
}


function renderLastRegistered() {
    var name = localStorage.getItem("name");
    var score = localStorage.getItem("score");
    displayName.textContent = name;
  displayScore.textContent = score
}


function showQuestions(){
    if(questionsIndex >= 5){
        return
    }
    questionsElement.innerText = questions[questionsIndex].questions
    showFeedbackCorrect
    
}


A.addEventListener('click', function()
  
{
    var correctanswer = questions[questionsIndex].answer
       if (A.textContent === correctanswer){
        Correct()
       questionsIndex++
       correctanswer
       score = score + 10
      
        
       }
       else{
        Incorrect()
        setTimeout(Incorrect, 3000)
        questionsIndex++
        score--
        timeLeft = timeLeft - 10
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
        Correct()
       questionsIndex++
       correctanswer
       score = score + 10
      
        
       }
       else{
        Incorrect()
        questionsIndex++
        score = score - 10
        timeLeft = timeLeft - 10
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
            Correct()
           questionsIndex++
           score = score + 10
        
            
           }
           else{
            Incorrect()
            questionsIndex++
            score = score - 10
           timeLeft = timeLeft - 10
           }
           ShowScore()
           showQuestions()
           showAnswer()
        })
        
        D.addEventListener('click', function()
    
        {
             var correctanswer = questions[questionsIndex].answer

               if (D.textContent === correctanswer){
                Correct()
               questionsIndex++
               score = score + 10
                
               }
               
               else{
                Incorrect()
                questionsIndex++
                score = score - 10
               timeLeft = timeLeft - 10
               }
               ShowScore()
               showQuestions()
               showAnswer()
               
            })

            submitButton.addEventListener('click',function(){
                
                var name = document.querySelector('#users-name').value
                var usersScore = score
                localStorage.setItem('name', name)
                localStorage.setItem('score', usersScore)
                inputName.classList.add('hide')
                endScore.classList.remove('hide')
                tryAgainButton.classList.remove('hide')
                renderLastRegistered()


            } 
            )
            tryAgainButton.addEventListener('click',function(){
              
                inputName.classList.add('hide')
                startContainer.classList.remove('hide')
                startButton.classList.remove('hide')
                tryAgainButton.classList.add('hide')
                questionsIndex = 0
                endScore.classList.add('hide')
                timeLeft = 30
                score = 0
                scoreBoard.classList.add('hide')

                })