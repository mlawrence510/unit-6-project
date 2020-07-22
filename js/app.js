const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const resetButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const heart = document.querySelectorAll('.tries')
const overlayTitle = document.querySelector('.title');
const ul = phrase.children[0];

let score = 0;
let previousScore = 0;

let missed = 0;
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

function checkLetter(target) {
  const button = target;
  const lis = ul.children;
  const btnCheck = button.textContent.toUpperCase();
  button.className = 'chosen';


  for (let i = 0; i < lis.length; i++) {
    if ( btnCheck === lis[i].textContent.toUpperCase()) {
      lis[i].className += ` show`;
      score++;
    }
  }
}

function checkWin() {
  const phraseLength = document.querySelectorAll('.letter').length;
  const tilesGuessed = document.querySelectorAll('.show').length;
  if (phraseLength === tilesGuessed) {
    overlay.className = ` win`;
    overlayTitle.textContent = 'Congratulations, you won!';
    resetButton.textContent = 'Lets play again!';
    overlay.style.display = 'flex';
  } else if (missed === 5){
    overlay.className = ` lose`;
    overlayTitle.textContent = 'Sorry, you lost...';
    resetButton.textContent = 'Lets play again!';
    overlay.style.display = 'flex';
  }
}


resetButton.addEventListener('click', () => {
  if (resetButton.textContent === 'Start Game') {
    overlay.style.display = 'none';
    const phrase = getRandomPhraseToDisplay(phrases);
    addPhrasetoDisplay(phrase);
  } else if (resetButton.textContent === 'Lets play again!') {
    score = 0;
    previousScore = 0;
    missed = 0;
    ul.innerHTML = '';

    const chosen = document.querySelectorAll('.chosen');

    for ( let i = 0; i < chosen.length; i++ ) {
      chosen[i].className = '';
    }

    for ( let i = 0; i < heart.length; i++ ) {
      heart[i].children[0].src = "images/liveHeart.png";
    }


    overlay.style.display = 'none';
    const phrase = getRandomPhraseToDisplay(phrases);
    addPhrasetoDisplay(phrase);
  }
});

qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (e.target.className !== 'chosen' ) {
      checkLetter(e.target);
      if (score <= previousScore) {
        missed++;
        heart[missed - 1].children[0].src = "images/lostHeart.png";
      }
      previousScore = score;

      setTimeout(checkWin, 4000);

    }
  }
});
