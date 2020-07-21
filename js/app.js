const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const resetButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const ul = phrase.children[0];


const missed = 0;
const phrases = ['Hello World', 'Funeralopolis', 'Sour Cream and Onion', 'Fox Creek', 'Javascript is fun'];

const getRandomPhraseToDisplay = (arr) => {
  const index = Math.floor(Math.random() * arr.length)
  const random = arr[index];
  let letters = Array.from(random);
  return letters;
}


const addPhrasetoDisplay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.textContent = arr[i];

    if (arr[i] === " ") {
      li.className = "space";
    } else {
      li.className = "letter";
    }

    ul.appendChild(li);
  }
};




resetButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  const phrase = getRandomPhraseToDisplay(phrases);
  addPhrasetoDisplay(phrase);
});
