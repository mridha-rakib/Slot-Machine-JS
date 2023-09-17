const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  c: 6,
  D: 8,
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    console.log(symbol, count);
    // for (let i = 0; i < count; i++) {
    //   symbols.push(symbol);
    // }
  }
  return symbols;
};

// Call the spin function and log the result
// console.log(spin());
spin();
