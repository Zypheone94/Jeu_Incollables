import React from 'react'

const DisplayAnswer = ({answerList, score}) => {
    return (
        <div>
            <h5>QUIZ TERMINÉ</h5>
            {
                answerList.map(answer => (
                    <div>{answer.question} : {answer.answer}</div>
                ))
            }


                {/* Une fois mon quizz terminé je récupère ma liste de réponses et je fais une boucle pour en afficher le contenu de chacune */}

            <span className="resultat">Vous avez fais {score} points sur {answerList.length}</span>

                {/* Pour finir, une petite phrase avec notre score et le nombre total de point possible */}
        
        </div>
    )
}

export default DisplayAnswer

// ce Component sert à afficher les réponses une fois le quizz terminé
