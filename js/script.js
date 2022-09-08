// playable categories
const jobs = ["software engineer", "steve", "accountant", "producer","photographer","lawyer","consultant","coach","civil servant","train conductor"];
const prefectures = ["toyama","yamagata","fukushima","kagoshima","yamanashi","tochigi","fukuoka","kagawa","shimane","shizuoka"];
const countries = ["jordan","ukraine","chile","philippines","new zealand","austria","greece","belize","papau new guinea","japan"];
const animals = ["squirrel","turtle","platypus","giraffe","black panther", "hamster","hippo", "peacock","koala bear","ostrich"]

// game settings
const maxWrong = 7;
let answer = "";
let guessed = [];
let mistakes = 0;

const randomJob = () => {
  jobs[Math.floor(Math.random() * jobs.length)]
};

const randomPref = () => {
  prefectures[Math.floor(Math.random() * jobs.length)]
};

const randomCountry = () => {
  const answer = countries[Math.floor(Math.random() * jobs.length)];
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
        id='` + letter + `
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = lettersHTML;
}

// 20:30
document.getElementById("maxWrong").innerHTML = maxWrong;
document.getElementById("mistakes").innerHTML = mistakes;


generateLetters();
randomCountry();