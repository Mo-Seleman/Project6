const keyboard = document.querySelector('#qwerty'); 
const phrase = document.querySelector('#phrase'); 
const btnReset = document.querySelector('.btn__reset');


let missed = 0;
 
const phrases = [
    'Hello World',
    'Treehouse',
    'Silicon Valley',
    'Google',
    'Meta'
];

btnReset.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
});

const randomPhrase = function getRandomPhraseAsArray (arr) {
    const phraseGenerator = arr[Math.floor((Math.random()*arr.length))];
    const singleArrayLetters = Array.from(phraseGenerator);
    return singleArrayLetters;
  };

const output = randomPhrase(phrases);

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
      const ul = document.querySelector('#phrase');
      const li = document.createElement('li');
      li.textContent = arr[i];
      ul.append(li);
      if (arr[i] !== " ") {
        li.className = "letter";
      } else {
        li.className = "space";
      }
    }
  };
  
  addPhraseToDisplay(output);

