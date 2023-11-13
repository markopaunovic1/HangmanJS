/* Implementera en variant av hangman.

Lägg till stöd för att ett ord automatiskt via ett HTTP anropp: 
https://random-word-api.herokuapp.com/word

Koden versionshanteras via ett git repo. 
Gärna i en egen branch där en pull request är skapad

Inget fulhack utan snygg strukturerad kod som skulle kunna "produktionssättas" */

const alfabetButtons = document.querySelectorAll('.alfabet-buttons button');
const playButton = document.getElementById('playButton');
const resetButton = document.getElementById('resetButton');

//const alfabetWithOutString = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
const alfabetWithString = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

import getRandomWord from './getRandomWord.js';

playButton.addEventListener('click', (e) => {
   const randomWord = getRandomWord();
   playButton.style.display="none";
})

resetButton.addEventListener('click', (e) => {
        playButton.style.display="block";
})

alfabetButtons.forEach(button => {
    button.addEventListener('click', function() {
        let pressedCharecter = this.innerText;
        console.log('Pressed character: ' + pressedCharecter);
    });
});


/* 
for(let i in eachLetter) {
    console.log(eachLetter[i]);
} */