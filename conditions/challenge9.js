const prompt = require('prompt-sync')();

const lettre = prompt("entrer un lettre : ");

if (typeof(lettre) == "string"){
    console.log("cest un caractaire")
        
    //1er solution   
    switch (lettre){
        case "A":
            console.log("le caractaire est majuscule ");
            break;
        case "B":
            console.log("le caractaire est majuscule ");
            break;
        case "C":
            console.log("le caractaire est majuscule ");
            break;
        case "D":
            console.log("le caractaire est majuscule ");
            break;
        case "E":
            console.log("le caractaire est majuscule ");
            break;
        case "F":
            console.log("le caractaire est majuscule ");
            break;
        case "G":
            console.log("le caractaire est majuscule ");
            break;
        case "H":
            console.log("le caractaire est majuscule ");
            break;
        case "I":
            console.log("le caractaire est majuscule ");
            break;
        case "J":
            console.log("le caractaire est majuscule ");
            break;
        case "K":
            console.log("le caractaire est majuscule ");
            break;
        case "L":
            console.log("le caractaire est majuscule ");
            break;
        case "M":
            console.log("le caractaire est majuscule ");
            break;
        case "N":
            console.log("le caractaire est majuscule ");
            break;
        case "O":
            console.log("le caractaire est majuscule ");
            break;
        case "P":
            console.log("le caractaire est majuscule ");
            break;
        case "Q":
            console.log("le caractaire est majuscule ");
            break;
        case "R":
            console.log("le caractaire est majuscule ");
            break;
        case "S":
            console.log("le caractaire est majuscule ");
            break;
        case "T":
            console.log("le caractaire est majuscule ");
            break;
        case "U":
            console.log("le caractaire est majuscule ");
            break;
        case "V":
            console.log("le caractaire est majuscule ");
            break;
        case "W":
            console.log("le caractaire est majuscule ");
            break;
        case "X":
            console.log("le caractaire est majuscule ");
            break;
        case "Y":
            console.log("le caractaire est majuscule ");
            break;
        case "Z":
            console.log("le caractaire est majuscule ");
            break;
        default :
            console.log("le caractaire est minuscule ");
    }

    //2eme solution
    let ascii = lettre.charCodeAt(0);
    
    if(ascii >= 65 && ascii <= 90){
        console.log("le caractaire est majuscule");
    }else{
        console.log("le caractaire est minuscule");
    }

}
