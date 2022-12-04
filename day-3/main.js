/*
--- Day 3: Rucksack Reorganization ---

--- Part One ---
Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?
a-z --> 1-26
A-Z --> 27-52

--- Part Two ---
Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?
*/

const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf-8' });
const items = data.split('\n');
items.pop();

const findLetter = (left, right) => {
  for (const l of left) {
    if (right.includes(l)) {
      return l;
    }
  }
};

const getASCII = (char) => {
  let ascii = char.charCodeAt(0) - 96;
  if (ascii < 0) {
    return ascii + 58;
  }
  return ascii;
};

// Part 1
let sum = 0;

for (const item of items) {

  const leftArray = item.slice(0, item.length / 2).split('');
  const rightArray = item.slice(item.length / 2).split('');

  const leftUnique = [...new Set(leftArray)];
  const rightUnique = [...new Set(rightArray)];

  const letter = findLetter(leftUnique, rightUnique);
  sum += getASCII(letter);
}

console.log('Total Sum: ', sum);


// Part 2
let badgeSum = 0;

for (let i = 0; i < items.length; i += 3) {
  let badge;
  for (const letter of items[i]) {
    if (items[i + 1].includes(letter) && items[i + 2].includes(letter)) {
      badge = letter;
      break;
    }
  }

  badgeSum += getASCII(badge);

}

console.log('Badge Total Sum: ', badgeSum);