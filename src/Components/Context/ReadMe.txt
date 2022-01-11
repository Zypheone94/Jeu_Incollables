Concernant les Contexts : 

Les contexte sont des états que l'on va pouvoir passer d'un composant à un autre   
    En effet de base React permet de mettre ne place des États, c'est a dire des variables qui vont pouvoir changer de façon dynamique lors 
    de l'utilisation de notre code, Hors basiquement c'est États ne peuvent intéragir qu'avec le composant duquel elle viennent

    C'est ici qu'interviennent les États, c'est dernier vont permettre de passer le contenu des états de plusieurs composants

    Ici, ça va nous être utile par exemple dans le cas suivant : 

    Dans mon composant Header, j'ai une liste de catégorie et un état qui va permettre de définir lequel est sélectionné, donc je vais avoir   
    besoin de passer le contenu de cette État afin de savoir dans mon composant jeu quel catégorie est sélectionné



    export const GameContext = React.createContext({
    gameLaunch: '',
    setGameLaunch : date => {},
    
    mesQuestion: {},
    setMesQuestion : date => {},

    answerList: [],
    setAnswerList : date => {},
})


        Voici la structure d'un Contexts   
            on fais un export d'une constante
            ensuite le contenu, gameLaunch est la variable, si il s'agit d'une string, d'une number ou d'un bool on va faire ''
            si on prends un tableau on va faire []
            si on prends un objet on va faire {}

            en ce qui concerne les fonctions les accompagnant, la convention de nommage est de mettre set devant le nom de la variable donc ici
            gameLaunch sera setGameLaunch, enfin pour définir une fonction on fais date => {}

    ATTENTION : une fois cela fait, il faut aller à l'endroit de notre provider (l'endroit auquel je décide de ou à ou va la porté de notre 
    context) afin de finir la mise en place du Context
        Ici, il faut aller dans App.jsx pour trouver les deux provider
