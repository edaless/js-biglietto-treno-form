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
const scontoOver = 40;
// %




// riferimenti
const title = document.getElementById("title");
const inputNome = document.getElementById("name");
const inputKm = document.getElementById("km");
const genera = document.querySelector("button#genera");
const inputfasciaEta = document.getElementById("fasciaEta");


let nome;
let km;
let fasciaEta;
let sconto;
let prezzo;




genera.addEventListener("click",
    function(){
        nome = inputNome.value;
        title.innerHTML = "Ciao " + nome ;
        console.log("nome:", nome);

        km = inputKm.value;
        console.log("km:", km);

        fasciaEta = inputfasciaEta.value;
        console.log("fasciaEta:", fasciaEta);
        
        
        if (fasciaEta === "min"){
            sconto = scontoMin;
        } else if (fasciaEta === "over"){
            sconto = scontoOver;
        }else{
            sconto = 0;
        };
        console.log("sconto:", sconto);

        
        prezzo = (km * prezzoKm * (1-(sconto/100)));
        console.log("prezzo:", prezzo);

        

        document.getElementById("prezzo").innerHTML = `${prezzo.toFixed(2)}€`;

    }
);










// inputkm.value = "";




// // chiedo i km
// let km = parseInt( prompt("Di quanti km vuoi fare il viaggio?"));
// console.log("km:",km);

// // chiedo eta
// let eta = parseInt( prompt("Quanti anni hai?"));
// console.log("eta:",eta);



// // determino se c'è uno sconto
// // sconto minorenne
// if(eta < etaMin){
//     sconto = scontoMin;
// }
// // sconto over
// if(eta >= etaOver){
//     sconto = scontoOver;
// }

// console.log("sconto:", sconto);



// // calcolo il prezzo
// let prezzo = (km * prezzoKm * (1-(sconto/100)));
// console.log("prezzo:", prezzo);





// // output
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



























