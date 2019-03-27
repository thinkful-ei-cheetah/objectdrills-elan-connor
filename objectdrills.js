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
    jobTitle: 'Transcriptionist',
    boss: '1'
  },
  {
    name: 'Sinikka',
    jobTitle: 'doctor',
    boss: '1'
  },
  {
    name: 'John',
    jobTitle: 'doctor',
  }
];

for (let i = 0; i < family.length; i++) {
  if (!family[i].boss){
    console.log(`${family[i].jobTitle} ${family[i].name} doesn't report to anybody.`);
  }else{
    console.log(`${family[i].jobTitle} ${family[i].name} reports to ${family[i].boss}.`);
  }
}

family.forEach(member => {
  console.log(`${member.name}: ${member.jobTitle}`);
});


// Drill 6