const prompt = require('prompt-sync')();

const vitesseKmH= prompt('Entrez la vitesse en kilomètres par heure (km/h)');
let vitesseMs= vitesseKmH * 0.27778 ;

console.log(vitesseMs);


