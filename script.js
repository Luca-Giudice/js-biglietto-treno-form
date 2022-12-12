// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// 1 Prednere l'elemnto DOM
// 2 legare l'event listener al bottone 
// 3 chiedere l'età del passeggiero
// 4 Calcolare il prezzo del biglietto
// 5 Verificare eventuali sconti
// 6 Stamparlo in pagina

// 1 prendere l'elemnento dal DOM

// FORM
const nameField = document.getElementById('name');
const kmsField = document.getElementById('kms');
const ageField = document.getElementById('age');
const confirmButton = document.getElementById('confirm-button');
const resetButton = document.getElementById('reset-button');

// TICKET
const ticketSection = document.getElementById('ticket-section');
const passengerNameElement = document.getElementById('passenger-name');
const rateElement = document.getElementById('rate');
const coachElement = document.getElementById('coach');
const pnrElement = document.getElementById('pnr');
const priceElement = document.getElementById('price');


    confirmButton.addEventListener('click', function(){
    
        const nameValue = nameField.value.trim();
        const kmsValue = kmsField.value.trim();
        const ageValue = ageField.value;

        if(!nameValue || isNaN(kmsValue) || kmsValue < 10){
        alert('HAI INSERITO VALORI NON VALIDI');
        }
        let rateName = 'Tariffa Ordinaria';
        let price = 0.21 * kmsValue;

        if(ageValue === 'min'){
        price *= 0.8;
        rateName = 'Tariffa Giovani'
        } 
        else if (ageValue === 'over'){
        price *= 0.6;
        rateName = 'Tariffa Over 65';
        }

        price = price.toFixed(2) +  '€';

        const coach = '9';
        const pnr = '9456';

        passengerNameElement.innerText = nameValue;
        rateElement.innerText = rateName;
        coachElement.innerText = coach;
        pnrElement.innerText = pnr;
        priceElement.innerText = price;

        ticketSection.classList.remove('d-none');

    });

