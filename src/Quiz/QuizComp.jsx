import React, { useState } from 'react'
import './quiz.css'
const QuizComp = () => {

    var QuestionBank=[
        {
            Question:"What is the capital of Bangladesh?",
            AnswerText:[
                {Answer:"Dhaka",isCorrect: true},
                {Answer:"Chittagong",isCorrect: false},
                {Answer:"Barisal",isCorrect: false},
                {Answer:"Pabna",isCorrect: false},
            ]
        },
        {
            Question:"Who is the prime minister of Bangladesh?",
            AnswerText:[
                {Answer:"Fazlul Haque",isCorrect: false},
                {Answer:"Motiur Rahman",isCorrect: false},
                {Answer:"Sheikh Hasina",isCorrect: true},
                {Answer:"Abdul Bhashani",isCorrect: false},
            ]
        },
        {
            Question:"what is 2+5 ?",
            AnswerText:[
                {Answer:"8",isCorrect: false},
                {Answer:"10",isCorrect: false},
                {Answer:"11",isCorrect: false},
                {Answer:"7",isCorrect: true},
            ]
        },
        {
            Question:"RAM = ? ?",
            AnswerText:[
                {Answer:"Random Assess Memory",isCorrect: false},
                {Answer:"Random Active Memory",isCorrect: false},
                {Answer:"Random Access Memory",isCorrect: true},
                {Answer:"Random await Memory",isCorrect: false},
            ]
        },
        {
            Question:"How many divisions are there in Bangladesh",
            AnswerText:[
                {Answer:"7",isCorrect: false },
                {Answer:"10",isCorrect: false},
                {Answer:"8",isCorrect: true},
                {Answer:"2",isCorrect: false},
            ]
        },
      
      

    ]

    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [currentScore,setCurrentScore]=useState(0);
    const [showScore,setShowScore]=useState(false);

    const handleAnswerResponse=(isCorrect)=>{
        if(isCorrect){
            setCurrentScore(currentScore+1);
        }

        const nextQuestion = currentQuestion+1;
        if(nextQuestion < QuestionBank.length){
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowScore(true)
        }
    }

    const resetQuiz=()=>{
        setCurrentQuestion(0);
        setCurrentScore(0);
        setShowScore(false);
    }
  return (

    <>
    <h1>Welcome to the QUIZ APP</h1>
    <div className='app'>
        
        {showScore ? (
             <div className='score-section'>
                You Have Scored {currentScore} out of {QuestionBank.length}
            <br />
                <div >
                    <br /><br /><br />
                    <button type='submit' onClick={resetQuiz}>Play Again</button>
                </div>

             </div>

        ) : (
            <>
                <div className='question-section'>
                    <div className="question-count">
                        <span>{currentQuestion+1}/{QuestionBank.length}</span>

                    </div>
                    <div className="question-text">
                        {
                            QuestionBank[currentQuestion].Question
                        }
                         
                    </div>

                    <div className="answer-section">
                        
                        {
                            QuestionBank[currentQuestion].AnswerText.map((answer)=>(
                                 <button onClick={()=>handleAnswerResponse(answer.isCorrect)} >{answer.Answer}</button> 
                            ))
                            
                        }
                    </div>

                </div>
            </>
        )}
    </div>
    
    </>
    
  )
}

export default QuizComp