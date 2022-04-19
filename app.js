// Index.html

function infoReveal (id) {
  let x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// main.html

// rock paper scissors game

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector (".result > p");
const fred_div = document.getElementById ("f");
const olive_div = document.getElementById ("o");
const walt_div = document.getElementById ("w");



function getComputerChoice () {
  const choices = ["f", "o" ,"w"];
  const randomNumber = (Math.floor(Math.random()*3));
  return choices[randomNumber];
}

function convertToWord (letter) {
  if (letter === "f" ) return "Fred";
  if (letter === "o" ) return "Olive";
  return "Walter";
}

function win (userChoice, computerChoice) {
  
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore ++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord} beats ${convertToWord (computerChoice)}${smallCompWord}, You Win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}



function loose (userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore ++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord} loses to  ${convertToWord (computerChoice)}${smallCompWord}, You lose!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
  
}


function draw (userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord (userChoice)}${smallUserWord} equals ${convertToWord (computerChoice)}${smallCompWord}, It's a draw.`;
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
  
}


function game (userChoice) {
  const computerChoice = getComputerChoice ();
  switch (userChoice + computerChoice) {
    case "of":
    case "wo":
    case "fw":
      win (userChoice, computerChoice);
      break;
    case "fo":
    case "ow":
    case "wf":
      loose (userChoice, computerChoice);
      break;
    case "ff":
    case "oo":
    case "ww":
      draw (userChoice, computerChoice);
      break;
  }  
}

function main () {
  fred_div.addEventListener('click',() => 
    game ("f"));
  olive_div.addEventListener('click',() =>
    game ("o"));
  walt_div.addEventListener('click',() =>
    game ("w"));
}

main ();



