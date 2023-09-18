const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  c: 6,
  D: 8,
};

// const spin = () => {
//   const symbols = [];
//   for (const [keys, values] of Object.entries(SYMBOLS_COUNT)) {
//     console.log(keys);
//     for (let i = 0; i < values; i++) {
//       symbols.push(keys);
//     }
//   }
//   return symbols;
// };

// Call the spin function and log the result
// console.log(spin());
// const sm = spin();
// // console.log(sm);

// const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// const keys = Object.keys(obj);
// const value = Object.values(obj);
// const entries = Object.entries(obj);
// // console.log(keys);
// // console.log(value);
// console.log(entries);

// 2. Nested object entries

const nestedObj = {
  name: "jhon",
  info: {
    age: 30,
    city: "Dhaka",
  },
};

const infoKeysAndValues = Object.entries(nestedObj.info);

infoKeysAndValues.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// const keys = Object.keys(nestedObj);
// const entries = Object.entries(nestedObj);

// console.log(keys);
