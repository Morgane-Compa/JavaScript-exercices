// Exercice 1

// Mon tableau de chiffre
let intTab =[1 ,2, 3, 4, 5, 6, 17, 55, 2, 9];
console.log(intTab)

// Ma fonction pour trouver le plus grand nombre de mon premier tableau
function findBiggestNumber(tab) {

    // Vérifier si le tableau est vide
    if (tab.length === 0) {
        return "Le tableau est vide.";
    }

    // Initialiser une variable (pour l'instant à 0) pour stocker le plus grand nombre du tableau
    let biggestNumber = tab[0];

    // Parcourir le tableau pour trouver le plus grand nombre
    for (let i = 1; i < tab.length; i++) {
        if (tab[i] > biggestNumber) {
            biggestNumber = tab[i];
        }
    }

    // On sauvegarde
    return biggestNumber;
}

// J'appelle ma fonction
let result = findBiggestNumber(intTab);
console.log("Le plus grand nombre est : " + result);

