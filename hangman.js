/* Implementera en variant av hangman.

Lägg till stöd för att ett ord automatiskt via ett HTTP anropp: 
https://random-word-api.herokuapp.com/word

Koden versionshanteras via ett git repo. 
Gärna i en egen branch där en pull request är skapad

Inget fulhack utan snygg strukturerad kod som skulle kunna "produktionssättas" */

const testbutton = document.getElementById('a-to-m');

const Hangman = () => {
    const charAToM = [A, B, C, D, E, F, G, H, I, J, K, L, M];
    const charNToZ = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    
    };
    

    testbutton.addEventListener('click', function(event) {
        var pressedCharacter = String.fromCharCode(event.Hangman.charAToM);
        console.log('You pressed character: ' + pressedCharacter);
    })