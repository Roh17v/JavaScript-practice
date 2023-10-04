let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  tie: 0
};

updateScoreElement();

document.querySelector('.js-score')
  .innerHTML = `Win: ${score.win},Losses: ${score.lose},Ties: ${score.tie}`;

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = makeComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.js-auto-play-button').innerHTML = 'Stop Play';

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click',() =>{
  playGame('rock');
})

document.querySelector('.js-paper-button')
  .addEventListener('click',() =>{
  playGame('paper');
})

document.querySelector('.js-scissors-button')
  .addEventListener('click',() =>{
  playGame('scissors');
})

document.body.addEventListener('keydown',(event) =>{
  if(event.key === 'r')
  {
    playGame('rock');
  }
  else if(event.key === 'p')
  {
    playGame('paper');
  }
  else if(event.key === 's')
  {
    playGame('scissors');
  }
});

function playGame(playerMove)
{
  const computerMove = makeComputerMove();

  let result = '';

  if(playerMove === 'rock')
  {
    if(computerMove === 'rock')
    result = "Tie.";
    else if(computerMove === 'paper')
    result = "You Lose!";
    else
    result = "You Win!";
  }
  else if(playerMove === 'paper')
  {
    if(computerMove === 'rock')
    result = "You Win!";
    else if(computerMove === 'paper')
    result = "Tie.";
    else
    result = "You Lose!";
  }
  else if(playerMove === 'scissors')
  {
    if(computerMove === 'rock')
    result = "You Lose!";
    else if(computerMove === 'paper')
    {
      result = "You Win!";
    }
    else
    {
      result = "Tie.";
    }
  }

  if(result === 'You Win!')score.win++;
  else if(result === 'You Lose!')score.lose++;
  else score.tie++;

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();
  document.querySelector('.js-result')
    .innerHTML = `${result}`;

  document.querySelector('.js-moves')
    .innerHTML = `You <img src="${playerMove}-emoji.png" class="moves-emoji">
<img src="${computerMove}-emoji.png" class="moves-emoji"> Computer.`;
}

function updateScoreElement()
{
  document.querySelector('.js-score')
    .innerHTML = `Win: ${score.win},Losses: ${score.lose},Ties: ${score.tie}`;
}

function makeComputerMove()
{
  let computerMove = '';
  const randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber < 1 / 3)
  computerMove = 'rock';
  else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3)
  computerMove = 'paper';
  else
  computerMove = 'scissors';

  return computerMove;
}