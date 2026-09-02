const prompt = require('prompt-sync')();

const année = Number(prompt("entrer une année"));
const choix = prompt("voulez vous la convertis en mois /  jours / heures / minutes / secondes ?");

switch (choix) {
    case "mois" : 
        let mois = année*12;
        console.log(`lannée ${année} contient ${mois} mois`);
        break;
    case "jours":
        let jours = année*365;
        console.log(`l'année ${année} contient ${jours} jours`);
        break;
    case "heures":
        let heures = année*365*24;
        console.log(`l'année ${année} contient ${heures} heures`);
        break;
    case "minutes":
        let minutes = année*365*24*60;
        console.log(`l'année ${année} contient ${minutes} minutes`);
        break;
    case "secondes":
        let secondes = année*365*24*60*60;
        console.log(`l'année ${année} contient ${secondes} secondes`);
        break;
}