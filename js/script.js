// playable categories
const jobs = ["engineer", "steve", "accountant", "producer","photographer","lawyer","consultant","coach","dietician","tailor"];
const prefectures = ["toyama","yamagata","fukushima","kagoshima","yamanashi","tochigi","fukuoka","kagawa","shimane","shizuoka"];
const countries = ["jordan","ukraine","chile","philippines","georgia","austria","greece","belize","belarus","japan"];
const animals = ["squirrel","turtle","platypus","giraffe","cheetah", "hamster","hippo", "peacock","koala","ostrich"]

// game settings

let answer = "";
const maxWrong = 7;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

const randomJob = () => {
  jobs[Math.floor(Math.random() * jobs.length)]
};

const randomPref = () => {
  prefectures[Math.floor(Math.random() * jobs.length)]
};

const randomCountry = () => {
  answer = countries[Math.floor(Math.random() * jobs.length)];
};

function randmAnimal() {
  animals[Math.floor(Math.random() * jobs.length)];
}

function generateLetters() {
  let lettersHTML = 'abcdefghijklmnopqrstuvwxyz'.split("").map(letter =>
    `
      <button
        class ="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = lettersHTML;
}


function guessedWord() {
  // this , for each letter generates a _
  wordStatus = answer.split('').map(letter =>(guessed.indexOf(letter) >= 0 ? letter : "_")).join('');
  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function handleGuess(selectedLetter) {
  guessed.indexOf(selectedLetter) === -1 ? guessed.push(selectedLetter) : null;
  // this will disbale the letter after you click
  document.getElementById(selectedLetter).setAttribute('disabled', true);
  if (answer.indexOf(selectedLetter) >= 0) {
    guessedWord();
  } else {
    mistakes++;
    document.getElementById("mistakes").innerHTML = mistakes;
    addLimb();
  }
  gameStatus();
}
function gameStatus() {
  if (mistakes == maxWrong) {
    document.getElementById("keyboard").innerHTML = "You lost! Play again?"
    document.getElementById("wordSpotlight").innerHTML = "the answer was " + answer;
  } else if (wordStatus == answer) {
    document.getElementById("keyboard").innerHTML = "You won! Play again?"
    document.querySelector(".winner").style.display = "block";
  }
}

function addLimb() {
  document.getElementById(`p${mistakes}`).style.visibility = "visible";
}


document.getElementById("maxWrong").innerHTML = maxWrong;

randomCountry();
generateLetters();
guessedWord();
