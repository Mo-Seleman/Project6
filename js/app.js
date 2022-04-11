const keyboard = document.querySelector('#qwerty'); 
const phrase = document.querySelector('#phrase'); 
const btnReset = document.querySelector('.btn__reset');
const keyboardBtn = document.querySelector('button');
const chosen = document.querySelector('.chosen');
const hearts = document.querySelectorAll("img");

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
      const ul = document.querySelector('#phrase ul');
      const li = document.createElement('li');
      li.textContent = arr[i];
      ul.append(li);
      if (arr[i] !== " ") {
        li.className = "letter";
      } else {
        li.className = "space";
      };
    };
  };

addPhraseToDisplay(output);

function checkLetter (buttonClicked) {
  const liLetter = document.querySelectorAll('.letter');
  let match = null;
  for (let i = 0; i < liLetter.length; i++) {
    if(liLetter[i].textContent.toLowerCase() === buttonClicked.textContent){
      liLetter[i].classList.add("show");
      match = buttonClicked.textContent;
    }
  } return match;
};

const click  = document.addEventListener('click', (e) => {
  const target = e.target; 
  if (target.tagName === 'BUTTON') {
    target.className = 'chosen';
    target.setAttribute("disabled", "");
    const letterFound = checkLetter(target);
    if (letterFound === null) {
    missed ++;
    document.querySelector("img").setAttribute("src", "images/lostHeart.png");  
  } 
} 
});

