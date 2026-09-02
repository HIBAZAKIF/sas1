const prompt = require('prompt-sync')();

const temperature = prompt('entrez la température en Celsius :');
let etat = null;

if (temperature < 0) {
    etat = "solide";
}else if (temperature < 100 && temperature >= 0 ) {
    etat = "liquide";
}else if (temperature >= 100){
    etat = "gaz";
}
console.log(etat);