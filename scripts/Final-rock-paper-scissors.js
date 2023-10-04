let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  tie: 0
};

document.querySelector('.js-score')
  .innerHTML = `Win: ${score.win},Losses: ${score.lose},Ties: ${score.tie}`;

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
  else if(playerMove === 'Scissors')
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