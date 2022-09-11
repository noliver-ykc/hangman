// playable categories
const jobs = ["software engineer", "steve", "accountant", "producer","photographer","lawyer","consultant","coach","civil servant","train conductor"];
const prefectures = ["toyama","yamagata","fukushima","kagoshima","yamanashi","tochigi","fukuoka","kagawa","shimane","shizuoka"];
const countries = ["jordan","ukraine","chile","philippines","new zealand","austria","greece","belize","papau new guinea","japan"];
const animals = ["squirrel","turtle","platypus","giraffe","black panther", "hamster","hippo", "peacock","koala bear","ostrich"]

// game settings

let answer = "";
const maxWrong = 7;
let mistakes = 7;
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
  document.getElementById("hidden-answer").innerHTML = answer;
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

// 20:30



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
    document.getElementById("mistakes").innerHTML = mistakes;
    mistakes--;
  }
  gameStatus();
}
function gameStatus() {
  if (mistakes < 0) {
    alert("You lost");
  } else if (wordStatus == answer) {
    alert("You won");
  }
}
document.getElementById("maxWrong").innerHTML = maxWrong;

randomCountry();
generateLetters();
guessedWord();
