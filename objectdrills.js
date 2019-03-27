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

// Drill 3

const food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(food.meals[3]);

// Drill 4

const family = [
  {
    name: 'Elan',
    jobTitle: 'Transcriptionist'
  },
  {
    name: 'Sinikka',
    jobTitle: 'doctor'
  },
  {
    name: 'John',
    jobTitle: 'doctor'
  }
];

for (let i = 0; i < family.length; i++) {
  console.log(`${family[i].name}: ${family[i].jobTitle}`);
}

family.forEach(member => {
  console.log(`${member.name}: ${member.jobTitle}`);
});