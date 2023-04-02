
//Variables for my buttons setting them using there ID 
var startButton = document.getElementById('str-btn')
var submitButton = document.getElementById('Submit-btn')
var tryAgainButton = document.getElementById('start-Over')
// variables for the containers 
var questionContainer = document.getElementById('questions-container')
var questionsElement = document.getElementById('questions')
var answer = document.getElementById('answer-buttons')
var showFeedbackCorrect = document.getElementById('feedback-correct')
var showFeedbackIncorrect = document.getElementById('feedback-wrong')
var score = 0
var scoreBoard = document.querySelector('.current-score')
var finalScore = document.querySelector('.final-score')
//variable for the timer 
var timerEl = document.getElementById('countdown');
var inputName = document.getElementById('name')
var questionsIndex = 0
//variables for the container for the anwers buttons 
var A = document.getElementById('A')
var B = document.getElementById('B')
var C = document.getElementById('C')
var D = document.getElementById('D')
var optionIndex = 0
var endScore = document.getElementById('end-score')
var displayName = document.getElementById('display-name')
var displayScore = document.getElementById('display-score')
var startContainer= document.getElementById('start-btn')
var localStorageContent = localStorage.getItem('scores')
let heighScore 
if(localStorageContent === null){
    heighScore = []
} else{
    heighScore = JSON.parse(localStorageContent)
}



// array I'm not using yet. 

//number of secons to start the time with 
var timeLeft = 30

//The array of the anwsers and questions 
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
// Function for display is the anwers selected is correct for half a second 
function Correct(){
    showFeedbackCorrect.classList.remove('hide')
    setTimeout(function(){
        
        showFeedbackCorrect.classList.add('hide')
    },500)

}
//Function for display if you got the anwers incorrect 
function Incorrect(){
    showFeedbackIncorrect.classList.remove('hide')
    setTimeout(function(){
        
        showFeedbackIncorrect.classList.add('hide')
    },500)
}

// this function shows the score
function ShowScore(){
    scoreBoard.classList.remove('hide')

    scoreBoard.innerText = " Current score " + score
}
// this function is for showing the Final score at the end 
function showFinalScore(){
    finalScore.innerText = " Current score " + score
}
// this funcing starts the timer
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
// this is an event listener when you click the start quize button 
startButton.addEventListener('click', startQuize)

function startQuize(){
    
startTimer()
startButton.classList.add('hide')
startContainer.classList.add('hide')
questionContainer.classList.remove('hide')
showQuestions()
showAnswer()
}


/// this changes the innertext to the options based on the question
function showAnswer(){
    if(questionsIndex >= 5){
        return
    }
    A.innerText = questions[questionsIndex].options[0]
    B.innerText = questions[questionsIndex].options[1]
    C.innerText = questions[questionsIndex].options[2]
    D.innerText = questions[questionsIndex].options[3]
    
}

// this is for the local storage for the users name and scroe 

//This functions show the questings 
function showQuestions(){
    if(questionsIndex >= 5){
        return
    }
    questionsElement.innerText = questions[questionsIndex].questions
    showFeedbackCorrect
    
}

//This event listener is for options A when you click on it 
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
        
        questionsIndex++
        score = score - 10
        timeLeft = timeLeft - 10
    }
      showQuestions()
       showAnswer()
       ShowScore()
       console.log(score)
       
    })
       // this for whn you click on options B 
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
    // this is for when you click on options C 
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
        // this for when you select options D 
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
            //This event listener is for when you want to upload your score 
            submitButton.addEventListener('click',function(){
                
                var name = document.querySelector('#users-name').value
                var usersScore = score + name

                heighScore.push(usersScore)
                localStorage.setItem('scores' , JSON.stringify(heighScore))
                var nameScores = localStorage.getItem("scores")
              localStorage.setItem('name', name)
                displayName.textContent = nameScores;
                localStorage.setItem('score', usersScore)
                inputName.classList.add('hide')
                endScore.classList.remove('hide')
                tryAgainButton.classList.remove('hide')
            })
            
            // this lets you start the quize over 
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
             