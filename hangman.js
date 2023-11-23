/* Implementera en variant av hangman.

Lägg till stöd för att ett ord automatiskt via ett HTTP anropp: 
https://random-word-api.herokuapp.com/word

Koden versionshanteras via ett git repo. 
Gärna i en egen branch där en pull request är skapad

Inget fulhack utan snygg strukturerad kod som skulle kunna "produktionssättas" */

const alfabetButtons = document.querySelectorAll('.alfabet-buttons button');
const playButton = document.getElementById('playButton');
const resetButton = document.getElementById('resetButton');
const outputWord = document.getElementById('currentWord');
const viewAttempts = document.getElementById('attempts');

//const alfabetWithOutString = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
const alfabetWithString = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

import getRandomWord from "./getRandomWord.js";

let amountOfAttempts = 10;

const updateAttempts = () => {
  viewAttempts.textContent = amountOfAttempts;
};

const decreaseAmountValue = () => {
  amountOfAttempts--;
  updateAttempts();
};

const resetAmountValue = () => {
  amountOfAttempts = 10;
  updateAttempts();
};

playButton.addEventListener("click", (e) => {
  getRandomWord();
  updateAttempts();

  playButton.style.display = "none";
});

resetButton.addEventListener("click", (e) => {
  resetAmountValue();

  playButton.style.display = "block";
  outputWord.innerHTML = "_ _ _ _ _ _ _ _ _ _ _ _ ";
});

alfabetButtons.forEach((button) => {

  button.addEventListener("click", function () {
    let pressedCharacter = this.innerHTML.toLowerCase();
    console.log("Pressed character: " + pressedCharacter);

    

    outputWord.innerHTML.toUpperCase();
    if (outputWord.innerHTML.includes(pressedCharacter)) {
      console.log(pressedCharacter, "Includes in", outputWord.innerHTML);
      console.log("true");
    } else {
      console.log(pressedCharacter," Does not includes in ",outputWord.innerHTML);
      console.log("false");
      decreaseAmountValue();
    }
  });
});

const showHiddenWord = () => {
  //const hiddenWord = outputWord.innerHTML.replace(/./g, " _ ");
  //outputWord.innerHTML = hiddenWord;

  
}