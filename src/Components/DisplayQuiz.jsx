import React, { useState } from 'react'

import DisplayAnswer from './DisplayAnswer'

import '../Styles/DisplayQuiz.css'

const DisplayQuiz = ({quizList, answerList}) => {

    const [selectedAnswer, setSelectedAnswer] = useState(-1)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [isError, setIsError] = useState(false)
    const [score, setScore] = useState(1)
    const [isQuizOver, setIsQuizOver] = useState(false)

    // dans l'ordre déclaration de : 
    // - une variable qui va contenir le nombre la réponse sélectionné (si elle est égal à -1 c'est qu'aucune réponse n'est sélectionné)
    // - Une variable qui va s'incrémentée pour chaque question répondu
    // - une variable qui va permettre de retourner une erreur si on fais "vérifier la question" sans avoir sélectionné de réponse
    // - Une variable qui va s'incrémenté pour chaque bonne réponse et se décrémenter pour chaque mauvaise
    // - Une variable qui va permettre de définir si le quizz est terminé ou non
    
    const nextQuestion = () => {
        console.log(score)
        if(selectedAnswer == -1){
            setIsError(true)
        }
        // si pas de réponse sélectionné alors retourne une erreur
        else{
            setIsError(false)
            if(questionNumber + 1 >= quizList.length){
                console.log('quiz terminé')
                setIsQuizOver(true)
            }
            // Si un réponse est sélectionné et que le bouton question suivante est appuyé 2 choses possible : 
                // - Si le nombre de question est supérieur ou égal à la longueur du quizz, alors le quizz est terminé et on affiche les réponses
            else {
                setQuestionNumber(questionNumber + 1)
                if(quizList[questionNumber].Right === selectedAnswer){
                    setScore(score + 1)
                }
                else{
                    if(score == 0){
                        null
                    }
                    else{
                        setScore(score - 1)
                    }
                }

                // - Sinon, on vérifie si la réponse est bonne et on donne en conséquence 1 point en plus ou en moins
            setSelectedAnswer(-1)
            // Pour finir on repase la réponse sélectionné à -1 pour éviter de pouvoir spammer les question suivante

            }
        }
    }

    return (
        
        <div className="gameContent">
            {
                quizList.length > 0 &&
                <>

                {/* affiche le contenu de la question à savoir dans l'ordre :
                    - La question
                    - les proposition de réponse
                    - un bouton pour passer à la question suivante */}

                <div className="questionName">
                    { quizList[questionNumber] != undefined && quizList[questionNumber].Question}
                </div>

                {/* Au dessus la question */}

                <div className="answerList">

                { quizList[questionNumber].Answers == undefined ? null : quizList[questionNumber].Answers.map((answer, index) => (
                    <span className="answer" id={index} key={index} onClick={() => setSelectedAnswer(index)} style={{
                        border: selectedAnswer == index ? "10px solid black" : 'none',
                        padding: selectedAnswer == index ? "5px" : 'none'
                    }}>{answer}</span>
                ))}
                </div>

                {/* Au dessus la liste des réponses */}

                <div>
                    <button className="boutonNext" onClick={nextQuestion}>Question Suivante</button>
                </div>

                    {/* Au dessus le bouton pour passer à la question Suivante
                    Et ci dessous, une excepetion, qui permet d'afficher un message si on souhaite passer à la question suivante sans avoir choisi de réponse */}

                { isError && <div className="error">ATTENTION, merci de sélectionner une réponse avant de passer à la question suivante</div> }

                </>
            }
            
            {/* ici, il s'agit pour la plupart de code conditionel, erreur etc.. afin que ce dernier
            ne s'affiche que lorsque c'est necéssaire */}

            
            {isQuizOver ? <div> <DisplayAnswer answerList={answerList} score={score}></DisplayAnswer> <br /> <button><a href="/">Rejouer ?</a></button> </div> : null}
        </div>
    )
}

export default DisplayQuiz