'use strict';

// Drill 1

const loaf = { flour: 300, water: 210 };
console.log(loaf.flour);
console.log(loaf.water);
loaf.hydration = () => {
  return (loaf.water / loaf.flour) * 100;
};
console.log(loaf.hydration());

// Drill 2

const obj = {
  foo: 1, 
  bar: 2,
  fum: 'elan',
  quux: 'connor',
  spam: true
};

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
