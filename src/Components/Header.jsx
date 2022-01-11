import React, {useContext} from 'react'

import '../Styles/Header.css'
import { CategorieContext } from './Context/CategorieContext'

const Header = () => {

    const {setSelectedCat} = useContext(CategorieContext)
    const {catList} = useContext(CategorieContext)

    return (
        <div className="catList">
            {
                catList.map(cat => (
                    <div className="cat" id={cat} key={cat}
                    onClick={() => setSelectedCat(cat)}
                    >{cat}</div>
                ))
            }
        </div>
    )
}

export default Header

// ici, on va boucler sur toutes les catégories existantes afin de les faires apparaitres dans des div et de pouvoir les rendre sélectionnables
