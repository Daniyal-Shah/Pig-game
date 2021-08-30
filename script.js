
var scores,roundScore,activePlayer;
scores=[0,0];
roundScore=0;
activePlayer=0;



//At start every type of score should be 0 and hide dice image
document.querySelector('#score--0').textContent=0;
document.querySelector('#score--1').textContent=0;
document.querySelector('#current--0').textContent=0;
document.querySelector('#current--1').textContent=0;
document.querySelector('.dice').style.display='none';


// Adding event listener with New Game
document.querySelector('.btn--new').addEventListener('click', function()
{
  document.querySelector('#score--0').textContent=0;
  document.querySelector('#score--1').textContent=0;
  document.querySelector('#current--0').textContent=0;
  document.querySelector('#current--1').textContent=0;
  document.querySelector('.dice').style.display='none';  


  document.querySelector('.btn--hold').style.display='block';
  document.querySelector('.btn--roll').style.display='block';

});


// Adding event listener and work with roll button
document.querySelector('.btn--roll').addEventListener('click', function()
{
  var dice = Math.floor(Math.random()*6 )+1;
  var diceImg=  document.querySelector('.dice');
  diceImg.style.display='block';
  diceImg.src='dice-'+dice +'.png';

  if (dice !== 1)
  {
    roundScore+=dice;
    document.querySelector('#current--'+activePlayer).textContent=roundScore;
  }
  else
  {
    roundScore=0;
    document.querySelector('#current--'+activePlayer).textContent=0;
    document.querySelector('.player--'+activePlayer).classList.remove('player--active');   
    activePlayer= activePlayer===0 ? activePlayer=1 : activePlayer=0;
    document.querySelector('.player--'+activePlayer).classList.add('player--active');    
  }

});

// Adding event listener and work with hold button
document.querySelector('.btn--hold').addEventListener('click', function()
{
  var holdPlayer= document.querySelector('#score--'+activePlayer);
  document.querySelector('#score--'+activePlayer).textContent= parseInt(holdPlayer.textContent)  +roundScore;    


  if( parseInt(document.querySelector('#score--'+activePlayer).textContent) < 10) 
  {

    roundScore=0;
    document.querySelector('#current--'+activePlayer).textContent=0;
    document.querySelector('.player--'+activePlayer).classList.remove('player--active');   
    activePlayer= activePlayer===0 ? activePlayer=1 : activePlayer=0;
    document.querySelector('.player--'+activePlayer).classList.add('player--active');   
}
    else
    {
      document.getElementById('name--'+activePlayer).textContent='Winner!'; 
      document.querySelector('.btn--hold').style.display='none';
      document.querySelector('.btn--roll').style.display='none';
    }    

});















































// 'use strict';

// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// // Starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(
//         `current--${activePlayer}`
//       ).textContent = currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     // scores[1] = scores[1] + currentScore

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 100) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);
