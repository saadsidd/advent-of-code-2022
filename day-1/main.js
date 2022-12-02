/*
--- Day 1: Calorie Counting ---

--- Part One ---
Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

--- Part Two ---
Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
*/

const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf-8' });
const elves = data.split('\n\n');

let elfTotals = [];

for (const elf of elves) {
  const calories = elf.split('\n');
  let totalCalories = 0;

  for (const calorie of calories) {
    if (calorie) {
      totalCalories += parseInt(calorie);
    }
  }

  elfTotals.push(totalCalories);

}

elfTotals.sort().reverse();
console.log('Highest Total Calories: ', elfTotals[0]);
console.log('Sum Of 3 Highest Total Calories: ', elfTotals[0] + elfTotals[1] + elfTotals[2]);