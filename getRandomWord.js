const outputWord = document.getElementById("currentWord");
const apiURL = "https://random-word-api.herokuapp.com/word";

export const getRandomWord = () => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const randomWord = data[0];
      const hiddenWord = " _ ".repeat(randomWord.length);
      outputWord.innerHTML = hiddenWord;
      console.log(randomWord, "<- from getRandomWord");
    });
};


export default getRandomWord;
