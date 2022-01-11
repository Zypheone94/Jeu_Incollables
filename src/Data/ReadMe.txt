Le dossier Data va contenir toutes les feuilles de questions et réponse du jeu, et sera associée par son nom au nom de chaque Catégorie
    Par exemple Marvel.Json correspondra à la catégorie Marvel 

    ENCORE UNE FOIS : il est important que le nom de la catégorie soit exactement le même que celui du JSON afin de pouvoir être
    récupéré correctement

    {
      "ID": 1,
      "Question": "Question 1",
      "Answers": "Rep1|Rep2|Rep3|Rep4",
      "Difficulte : 4,
      "Right": 3
    },

    Voici la forme d'une question traditionnel :

        ID va nous permettre de ne pas récupéré 2 fois la même question en comparent les ID déjà utilisés et ceux pas encore pris
            Si un ID déjà utilisé essaye d'être pris à nouveaux, alors on va boucler de façon à en chercher un autre

        Question : Il s'agit tout bêtement de l'intitulé de la question sous la forme d'une string

        Answers : Ici, c'est un peu plus complexe nos réponses vont être comprisent entre le charactère | ce qu'on a fais, c'est que lors de la 
            récupération de cette string on explique que l'on veux spliter notre string en plusieurs string à chaque fois quel le charactère |
            est détecté, donc en soit, il est possible d'ajouter plus ou moins de proposition de réponse si on le souhaite, par exemple : 

            "Answers": "Vrai|Faux",

            Un quizz sous la forme d'un vrai ou faux est possible

        Difficulte : ici, un number qui va définir la difficulté des question, par exemple ici nous avons une difficulté 4, il nous sera donc 
            Possible d'avoir des questions de difficulté 1 à 3, en faite, les question vont être prise soit avec des difficulté égales ou inférieur

        Right : Correspond au numéro de la bonne réponse, donc ici, Right 3 correspond à Rep4 (en effet, le 0 compte)