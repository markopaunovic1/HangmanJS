
const playButton = document.getElementById('playButton');
const outputWord = document.getElementById('currentWord');
const apiURL = "https://random-word-api.herokuapp.com/word";

const fetchWord =  playButton.addEventListener('click', (e) => {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const randomWord = data[0];
        outputWord.innerHTML = randomWord;
    })
    playButton.style.display="none";
})




