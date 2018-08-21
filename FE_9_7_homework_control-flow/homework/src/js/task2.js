let firstPrize = 10;
let secondPrize = 5;
let thirdPrize = 2;
let range = 5;
let totalPrize = 0;
let currentPrize = [firstPrize, secondPrize, thirdPrize];
let prize = 0;

let playTheGame = confirm('Do you want to play a game?');

if (playTheGame === false) {
    alert('You did not become a millionaire, but can.')
} else {
    game()
}
/*eslint no-magic-numbers: ["error", { "ignore": [1, 2, 3]}]*/
function game() {
    for (let i = 1; i <= 3; i++) {
        let random = Math.floor(Math.random() * range);
        let userChange = parseFloat(prompt(
            `Enter a number from 0 to ${range}
            \nAttemts left:${3 - i}
            \nTotal prize: ${totalPrize}$
            \nPossible prize on current attempt:${currentPrize[i]}`));
      if (random === userChange) {
          switch (i) {
              case 1:
              confirm(`Congratulation! Your prize is: ${firstPrize}$. Do you want to continue?`)
                break;
              case 2: 
              alert(`Congratulation! Your prize is: ${secondPrize}$. Do you want to continue?`)
                break;
              case 3: 
              alert(`Congratulation! Your prize is: ${thirdPrize}$. Do you want to continue?`)
                break;
              default:
                break;
          }
      } else {
          alert(`Thank you for a game. Your prize is: ${prize}`);
          confirm(`Do you want to play again?`)
      }
    }
}
