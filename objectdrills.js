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
const cipher = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4
};

function decode(str) {
  const firstChar = str[0];
  const position = cipher[firstChar];
  return (position === undefined) ? ' ': str[position];
}

function decodeWords(strs) {
  return strs
    .split(' ')
    .map(word => decode(word))
    .join('');
}



// drill 7
function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
    evaluateFight: function(character) {
      let x = this.attack - character.defense;
      let y = character.attack - this.defense;
      return (y > x) ? `Your opponent takes ${x} damage and you receive 0 damage.` : `Your opponent takes ${x} damage and you receive ${y} damage.`;
    }
  };
}

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
  createCharacter('Arwen Undomiel', 'arwen', 'half-elf', 'Rivendell', 15, 4)
];





console.log(characters.find(character => {
  return character.nickname === 'aragorn';
}).describe());
// need to access describe

console.log(characters.filter(hobbit => {
  return hobbit.race === 'Hobbit';
}));

console.log(characters.filter(character => {
  return character.attack > 5;
}));
