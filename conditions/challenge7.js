const prompt = require('prompt-sync')();

const lettre = prompt("entrer une lettre : ");

let ascii = lettre.charCodeAt(0);

if (ascii >= 65 && ascii <= 90){
    console.log("la lettre est majuscule");
}