import React, { useState, useContext } from 'react'

import CatSelector from './CatSelector'
import DisplayQuiz from './DisplayQuiz'
import DisplayAnswer from './DisplayAnswer'

import { GameContext } from './Context/GameContext'

const Game = () => {
    const [Question, setQuestion] = useState(null)
    const [noCatSelected, setNoCatSelected] = useState(false)
    const [gameDifficulty, setGameDifficulty] = useState(0)
    const [selectedDifficulty, setSelectedDifficulty] = useState(false)

    
    const {setGameLaunch} = useContext(GameContext)
    const {gameLaunch} = useContext(GameContext)

    const {setMesQuestion} = useContext(GameContext)
    const {mesQuestion} = useContext(GameContext)

    const {setAnswerList} = useContext(GameContext)
    const {answerList} = useContext(GameContext)


    const NB_QUESTION = 5
    var quizList = []
    var pastQuestions = []
    var answerArray = []
    var isPast = false

    function game() {
        if(Question == null){
            setNoCatSelected(true)
            if(gameDifficulty == 0){
                setSelectedDifficulty(true)
            }
            return noCatSelected
        }
        
        else{
            setNoCatSelected(false)
        }

        for(quizList.length; quizList.length < NB_QUESTION; ){
            isPast = false
            var randomQuestion = Math.floor(Math.random() * (Question.length - 0)) + 0;
            if(quizList.length > 0){
                pastQuestions.forEach((past) => {
                    if(past === Question[randomQuestion].ID || gameDifficulty < Question[randomQuestion].difficulte){
                        isPast = true
                    }
                    else{
                        null
                    }
                })
                if(!isPast){
                    if(gameDifficulty < Question[randomQuestion].difficulte){
                        game()
                    }
                    else{
                        quizList.push(Question[randomQuestion])
                        pastQuestions.push(Question[randomQuestion].ID)
                        answerArray.push({question: Question[randomQuestion].Question, answer: Question[randomQuestion].Answers[Question[randomQuestion].Right]})
                    }
                }
                else{
                    null
                }
            }
            else if (quizList.length == 0){
                quizList.push(Question[randomQuestion])
                pastQuestions.push(Question[randomQuestion].ID)
                answerArray.push({question: Question[randomQuestion].Question, answer: Question[randomQuestion].Answers[Question[randomQuestion].Right]})
            }
        }
        // Récupération de toutes les question pour les mettre dans une variable et ensuite pouvoir les afficher une par une
        // de plus, chaque question boucle pour ne pas pouvoir se répeter 2 fois
        setMesQuestion(quizList)
        setAnswerList(answerArray)

    }
    
    return (

        <div>
            <CatSelector Question={Question} setQuestion={setQuestion}></CatSelector>
            <section>
                <div style={{
                    display : Question != null ? 'block' : 'none'
                }}>
                    <button onClick={() => setGameDifficulty(1)} style={{
                        display: gameLaunch ? 'none' : "block"
                        }}>CP</button>
                    <button onClick={() => setGameDifficulty(2)} style={{
                        display: gameLaunch ? 'none' : "block"
                        }}>CE1</button>
                    <button onClick={() => setGameDifficulty(3)} style={{
                        display: gameLaunch ? 'none' : "block"
                        }}>CE2</button>
                    <button onClick={() => setGameDifficulty(4)} style={{
                        display: gameLaunch ? 'none' : "block"
                        }}>CM1</button>
                    <button onClick={() => setGameDifficulty(5)} style={{
                        display: gameLaunch ? 'none' : "block"
                        }}>CM2</button>
                    <button onClick={() => setGameDifficulty(6)} style={{
                        display: gameLaunch ? 'none' : "block"
                        }}>College</button>
                    <button onClick={() => setGameDifficulty(7)} style={{
                        display: gameLaunch ? 'none' : "block"
                        }}>Adulte</button>
                </div>
                <div style={{
                    display: gameDifficulty != 0 ? "block" :'none' 
                }}>
                    <button onClick={() => game()} style={{
                            display: gameLaunch ? 'none' : "block"
                        }}>Jouer</button>
                </div>

                <div className="gameContent">
                    <DisplayQuiz quizList={mesQuestion} answerList={answerList}></DisplayQuiz>
                </div>
            </section>
        </div>
    )
}

export default Game
