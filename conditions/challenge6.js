const prompt = require('prompt-sync')();

const nbr = Number(prompt("entrer un nbr"));

if (nbr < 0) {
    console.log("le nbr est négatif")
}else if (nbr > 0 ) {
    console.log("le nbr est positif")
}else {
    console.log("le nbr égal à zéro")
}