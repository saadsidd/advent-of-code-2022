/*
--- Day 2: Rock Paper Scissors ---

--- Part One ---
What would your total score be if everything goes exactly according to your strategy guide?
Rock [1 point] -> A or X
Paper [2 points] -> B or Y
Scissors [3 points] -> C or Z

--- Part Two ---
Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?
X -> lose
Y -> draw
Z -> win
*/

const fs = require('fs');

// Points for choosing rock, paper, or scissors
const points = { 'X': 1, 'Y': 2, 'Z': 3 };

// Conditions depending on opponent's choice (ie. first one for win is Y (paper) beats A (rock))
const win =  { 'A': 'Y', 'B': 'Z', 'C': 'X' };
const draw = { 'A': 'X', 'B': 'Y', 'C': 'Z' };
const lose = { 'A': 'Z', 'B': 'X', 'C': 'Y' };

const newConditions = { 'X': lose, 'Y': draw, 'Z': win };
const newConditionsPoints = { 'X': 0, 'Y': 3, 'Z': 6 };

const data = fs.readFileSync('input.txt', { encoding: 'utf-8' });
const matches = data.split('\n');
matches.pop();  // Remove the extra empty string

let totalScore = 0;
let newTotalScore = 0;

for (const match of matches) {
  const [theirChoice, myChoice] = match.split(' ');

  // Part 1
  if (win[theirChoice] === myChoice) {
    totalScore += 6;
  } else if (draw[theirChoice] === myChoice) {
    totalScore += 3;
  }
  totalScore += points[myChoice];

  // Part 2
  newTotalScore += newConditionsPoints[myChoice];
  newTotalScore += points[newConditions[myChoice][theirChoice]];

}

console.log('Total Score: ', totalScore);
console.log('New Total Score: ', newTotalScore);