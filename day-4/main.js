/*
--- Day 4: Camp Cleanup ---

--- Part One ---
In how many assignment pairs does one range fully contain the other?

--- Part Two ---
In how many assignment pairs do the ranges overlap?
*/

const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const pairs1 = data.split('\n');

const pairs = pairs1.slice(pairs1.length - 3);

let overlappingSectionsCount = 0;
let anyOverlapCount = 0;

for (const pair of pairs1) {
    const [leftSections, rightSections] = pair.split(',');

    const [rightLowerSection, rightUpperSection] = rightSections.split('-').map(num => parseInt(num));
    const [leftLowerSection, leftUpperSection] = leftSections.split('-').map(num => parseInt(num));

    // Part 1
    if (
        (rightLowerSection >= leftLowerSection && rightUpperSection <= leftUpperSection)
        || (leftLowerSection >= rightLowerSection && leftUpperSection <= rightUpperSection)
        ) {
            overlappingSectionsCount++;
        }

    // Part 2
    if (
        (rightLowerSection >= leftLowerSection && rightLowerSection <= leftUpperSection)
        || (rightUpperSection >= leftLowerSection && rightUpperSection <= leftUpperSection)
        || (rightLowerSection <= leftLowerSection && rightUpperSection >= leftUpperSection)
    ) {

        anyOverlapCount++;
    }
}

console.log('Overlapping Sections Count: ', overlappingSectionsCount);
console.log('Any Overlap Count: ', anyOverlapCount);