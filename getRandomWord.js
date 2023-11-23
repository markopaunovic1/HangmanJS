const outputWord = document.getElementById("currentWord");
const apiURL = "https://random-word-api.herokuapp.com/word";

export const getRandomWord = () => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const randomWord = data[0];
      outputWord.innerHTML = randomWord;
      console.log(randomWord, "<- from getRandomWord");
    });
};
export default getRandomWord;

/* resetButton.addEventListener('click', (e) => {
    playButton.style.display="block";
    outputWord.innerHTML = "";
}) */
