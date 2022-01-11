import React from "react";

export const CategorieContext = React.createContext({
    selectedCat : '',
    setSelectedCat : date => {},
    catList : [],
    setCatList : data => {}
})