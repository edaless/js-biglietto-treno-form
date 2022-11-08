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
const scontoMagg = 0;
// %
const scontoOver = 40;
// %

const offertaMin = "Biglietto Minori (sconto del "+ scontoMin +"%)";
const offertaMagg = "Biglietto Standard";
const offertaOver = "Biglietto Over65 (sconto del "+ scontoOver +"%)";

const carrozza = Math.floor(Math.random() * 12) + 1;
const codiceCP = Math.floor(Math.random() * 99999) + 1;




// riferimenti
const title = document.getElementById("title");
const inputNome = document.getElementById("name");
const inputKm = document.getElementById("km");
const inputfasciaEta = document.getElementById("fasciaEta");
const genera = document.querySelector("button#genera");
const annulla = document.querySelector("button#annulla");
const biglietto = document.querySelector(".biglietto");



let nome;
let km;
let fasciaEta;
let sconto;
let offerta;
let prezzo;






genera.addEventListener("click",
    function(){
        nome = inputNome.value;
        // title.innerHTML = "Ciao " + nome ;
        console.log("nome:", nome);

        km = parseInt(inputKm.value);
        console.log("km:", km);

        fasciaEta = inputfasciaEta.value;
        console.log("fasciaEta:", fasciaEta);
        
        
        if (fasciaEta === "Min"){
            sconto = scontoMin;
            offerta = offertaMin;
        };
        if (fasciaEta === "Magg"){
            sconto = scontoMagg;
            offerta = offertaMagg;
        };
        if (fasciaEta === "Over"){
            sconto = scontoOver;
            offerta = offertaOver;
        };
        console.log("sconto:", sconto);
        console.log("offerta:", offerta);

        
        prezzo = (km * prezzoKm * (1-(sconto/100)));
        console.log("prezzo:", prezzo);

        
        // output
        document.getElementById("nome").innerHTML = `${nome}`;
        document.getElementById("kmOutPut").innerHTML = `${km} km`;
        document.getElementById("offerta").innerHTML = `${offerta}`;
        document.getElementById("prezzo").innerHTML = `${prezzo.toFixed(2)}€`;

        document.getElementById("carrozza").innerHTML = `${carrozza}`;
        document.getElementById("codiceCP").innerHTML = `${codiceCP}`;


        biglietto.classList.add("active");

    }
);





annulla.addEventListener("click",
    function(){
        nome = "";
        inputNome.value = "";
        console.log("nome:", nome);
        km = "";
        inputKm.value = "";
        console.log("km:", km);
        fasciaEta = "";
        inputfasciaEta.value = "";
        console.log("fasciaEta:", fasciaEta);
        
        
        
        // console.log("sconto:", sconto);
        console.log("offerta:", offerta);

        
        
        // console.log("prezzo:", prezzo);
        biglietto.classList.remove("active");

        
        
        
    }
);



































