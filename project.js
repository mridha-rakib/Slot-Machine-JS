// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  c: 6,
  D: 8,
};

const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const getValidDepositAmount = () => {
  while (true) {
    const depositAmount = parseFloat(prompt("Enter deposit amount: "));
    if (!isNaN(depositAmount) && depositAmount > 0) {
      return depositAmount;
    }
    console.log("Invalid deposit amount, please try again.");
  }
};

const getNumberOfLines = () => {
  while (true) {
    const numberOfLines = parseFloat(
      prompt("Enter Number of lines to bet on (1-3): ")
    );

    if (!isNaN(numberOfLines) && numberOfLines > 0 && numberOfLines < 4) {
      return numberOfLines;
    }
    console.log("Invalid number of lines, try again");
  }
};

const getValidBet = (balance, lines) => {
  while (true) {
    const betAmount = parseFloat(prompt("Enter the bet per line: "));
    if (isNaN(betAmount) || betAmount <= 0) {
      console.log("Invalid bet amount. Please enter a valid positive number.");
    } else if (betAmount > balance / lines) {
      console.log(
        "Bet amount exceeds your balance. Please enter a lower amount."
      );
    } else {
      return betAmount;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbols, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < cunt; i++) {
      symbols.push(symbol);
    }
  }
  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbol = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbol.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

///-------function call-----------////
const balance = getValidDepositAmount();
const lines = getNumberOfLines();
const bet = getValidBet(balance, lines);
console.log("Hello");
