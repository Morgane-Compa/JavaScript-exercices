// Ma phrase
let phrase = "Je suis un petit champignon qui aime les salopettes et ordinateurs"
console.log(phrase);

function findBiggestWord(sentence) {
     // Séparer la phrase en mots
    let word = sentence.split(' ');

    // Vérifier si la phrase est vide
    if (word.length === 0) {
        return "Il n'y a pas de phrase";
    }

   // Initialiser la variable pour stocker le mot le plus long
    let biggestWord = word[0];

    // Parcourir les mots pour trouver le mot le plus long
    for (let i = 1; i < word.length; i++) {
        if (word[i].length > biggestWord.length) {
            biggestWord = word[i];
        }
    }

    // On sauvegarde
    return biggestWord;
}

// J'appelle ma fonction
let stringResult = findBiggestWord(phrase);
console.log("Le mot le plus long est : " + stringResult);

