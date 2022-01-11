import React, { useContext } from 'react'

import { CategorieContext } from './Context/CategorieContext'

// Import du Context contenant les catégories ainsi que la catégorie sélectionné

const CatSelector = ({ setQuestion }) => {
	const { selectedCat } = useContext(CategorieContext)

	if (selectedCat) {

		import(/* @vite-ignore */ '../Data/' + selectedCat).then((leData) => {
			leData.default.forEach(function (item) {
				if (!Array.isArray(item.Answers)) {
					item.Answers = item.Answers.split('|')
				}
			})
			
			setQuestion(leData.default)
		})
	}

	// ici, on explique que si une catégorie est sélectionné, on va aller chercher le fichier JSON correspondant à sont nom, et pour finir 
		// 2 choses : la première on va spliter le contenu de Answer à chaque | ce qui va permettre de faire un span par réponse
		// La seconde est le retour de TOUT le contenu de ce fichier json dans la variable d'État Question

		// Ensuite, il ne nous restera plus qu'a récupérer la variable et de faire un tirage aléatoire des questions  

	return <></>
}

export default CatSelector
