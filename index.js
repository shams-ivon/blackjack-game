let player = {
  firstName : "Player",
  money : 0
};

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

let cards = [];
let sum = 0;
let message = "";
let isAlive = false;
let hasBlackjack = false;

function getRandomCard() {
  return Math.floor(Math.random() * 10) + 2;
}

function renderScore() {
  playerEl.innerText = player.firstName + ": $" + player.money;
}

function renderGame() {
  
  if(sum < 21){
    message = "Wanna draw a new card?";
  }
  else if(sum === 21){
    message = "Congratulations! You've got BLACKJACK!";
    hasBlackjack = true;
    player.money = 100;
    renderScore();
  }
  else{
    message = "You're out of the game!";
    isAlive = false;
    renderScore();
  }
  
  messageEl.innerText = message;
  sumEl.innerText = "Sum : " + sum;
  cardEl.innerText = "Cards :";
  
  for(let i = 0; i < cards.length; i++) {
    cardEl.innerText += " " + cards[i];
  }
}

function newCard() {

  if(isAlive === false || hasBlackjack === true){
    return;
  }

  let card = getRandomCard();
  
  sum += card;
  cards.push(card);
  renderGame();
}

function startGame() {
  
  let card1 = getRandomCard();
  let card2 = getRandomCard();
  
  cards = [card1, card2];
  sum = card1 + card2;
  isAlive = true;
  hasBlackjack = false;
  player.money = 0

  playerEl.innerText = "";
  
  renderGame();
}