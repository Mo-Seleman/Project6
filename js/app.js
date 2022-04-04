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

function getRandomPhraseAsArray (arr) {
    const phraseGenerator = arr[Math.floor((Math.random()*arr.length))];
    const singleLetters = Array.from(phraseGenerator);
    return singleLetters;
  }
/* console.log(getRandomPhraseAsArray(phrases)); */

function addPhraseToDisplay (arr) {        
    for (let i = 0; i < singleLetters.length; i++) {
        singleLetters[i];
    }
};

// console.log(addPhraseToDisplay(phrases));








