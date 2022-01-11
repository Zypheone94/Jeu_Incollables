import React from "react";

export const GameContext = React.createContext({
    gameLaunch: '',
    setGameLaunch : date => {},
    
    mesQuestion: {},
    setMesQuestion : date => {},

    answerList: [],
    setAnswerList : date => {},
})