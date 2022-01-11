import {useState} from 'react'

import  {CategorieContext } from './Components/Context/CategorieContext'
import { GameContext } from './Components/Context/GameContext'

// Import des deux contexte, il vont permettre de passer les donner dans toutes notre application, j'expliquerais son fonctionnement plus loin

import Header from "./Components/Header"
import Game from './Components/Game'

// import des composants Header et Game
  // le premier va permettre d'afficher toutes les catégories
  // le second sera le composant qui fera tourner le jeu, il contient toutes les difficultés mais aussi les composant d'affichage du Quizz et des réponses

function App() {

const [selectedCat, setSelectedCat] = useState('')
const [catList, setCatList] = useState(["Marvel", "Jeux", "Disney", "Animaux", "Capitales"])

const [gameLaunch, setGameLaunch] = useState(false)
const [mesQuestion, setMesQuestion] = useState([])
const [answerList, setAnswerList] = useState([])

// tous les états ci dessus sont les états de base de nos context, ils vont tous pouvoir être modifié sauf 1
    // le premier permet de selectionner une catégorie pour pouvoir lancer le jeu

    // le second contient une liste des catégorie disponible, tout ceux qui seront présent seront des catégorie

      // donc logiquement, si j'ajoute une catégorie elle s'ajoutera à l'écran
      // au passage, il est important de retenir : le nom de la catégorie est lié au DATA.Json
      // donc par exemple, si j'ai une catégorie Marvel, mes question seront contenu dans le fichier Marvel.Json dans le dossier Data
    // Le troisième permet de déterminé si le jeu est lancé (grâce à un booléan)

    // Le quatrième va contenir la liste des question du Quizz, Attention d'ailleur :
      // le code est fait de 2 façon, la première est qu'il est impossible d'avoir deux fois la même question pendant un même quizz
      // si j'ai sélectionné une difficulté de niveau 3, j'aurais des questions de difficulté 1 à 3 mais pas plus

    // La dernière contiendra la liste de toutes les réponse à la suite, afin de les afficher à la fin du Quizz

  return (
    <div className="App">
        <CategorieContext.Provider value={{
        setSelectedCat : setSelectedCat,
        selectedCat : selectedCat,
        catList : catList,
        }}>
            <GameContext.Provider value={{
              gameLaunch : gameLaunch,
              setGameLaunch : setGameLaunch,
              mesQuestion : mesQuestion,
              setMesQuestion : setMesQuestion,
              answerList : answerList,
              setAnswerList : setAnswerList
            }}>
                  {/*
                  Les deux .Provider vont permettre de définir de ou à ou vont pouvoir passer nos données grâce aux context
                  Ici, dans un soucis de simplicité, j'ai mis dans toutes l'application
                  */}
                  <Header></Header>
                  <h1>Incollables</h1>
                  <Game></Game>
              </GameContext.Provider>
        </ CategorieContext.Provider>
    </div>
  )
}

export default App
