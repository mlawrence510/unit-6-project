const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const resetButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const ul = phrase.children[0];


const missed = 0;
const phrases = ['Hello World', 'Funeralopolis', 'Sour Cream and Onion', 'Fox Creek', 'Javascript is fun'];

const getRandomPhraseAsArray = arr => {
  const index = Math.floor(Math.random() * arr.length)
  const random = arr[index];
  return random;
}

const addPhraseToDisplay = str => {
  let letters = Array.from(str);
  return letters;
}

function createLetters (arr) {
  console.log(arr);
  for (i = 0; i < arr.length; i++);
  const letter = arr[i];
  let text = letter;
  const p = document.createElement('p');
  const li = document.createElement('li');
  p.className = 'letter show';
  p.textContent = text;
  li.appendChild(p);
  return li;
}


resetButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  const li = createLetters(addPhraseToDisplay(getRandomPhraseAsArray(phrases)));
  ul.appendChild(li);
});
