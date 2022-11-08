// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// BONUS possibili:
// elaborazione dell’output come detto, più articolata del semplice prezzo;
// interfaccia un pò eleaorata con CSS.



const prezzoKm = 0.21;
// €/km
const scontoMin = 20;
// %
const etaMin = 18;
// anni
const scontoOver = 40;
// %
const etaOver = 65;
// anni

let sconto = 0;
// %

let km;
// console.log("km:",km);
let eta;
// console.log("eta:",eta);
let name = inputField.value;


const nome = document.getElementById("name");




// myButton.addEventListener("click",

//     function(){
//         nome = inputField.value;

//     }
// );






// calcolo il prezzo
// let prezzo = (km * prezzoKm * (1-(sconto/100)));
// console.log("prezzo:", prezzo);





// output
// document.getElementById("km").innerHTML = 
// `${km} km`;
// document.getElementById("sconto").innerHTML = 
// `${sconto} %`;
// document.getElementById("eta").innerHTML = 
// `${eta} anni`;


// document.getElementById("prezzo").innerHTML = 
// `${prezzo.toFixed(2)}€`;
// // il toFixed dice quante cifre tenere


// if(sconto != 0){
//     let prezzoListino = km * prezzoKm;
    
//     document.getElementById("prezzoListino").innerHTML = 
//     `${prezzoListino.toFixed(2)}€`;
// }