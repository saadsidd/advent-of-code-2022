/*
--- Day 6: Tuning Trouble ---

--- Part One ---
How many characters need to be processed before the first start-of-packet marker is detected?

--- Part Two ---
How many characters need to be processed before the first start-of-message marker is detected?

*/

const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf-8' });

const length = data.length;

const checkForUnique = str => {

    while (str.length !== 0) {

        const len = str.length - 1;

        for (let i = 0; i < len; i++) {
            if (str[0] === str[i+1]) {
                return false;
            }
        }

        str = str.slice(1);
    }

    return true;
};

for (let i = 0; i < length; i++) {
    // Part 1
    // if (checkForUnique(data.slice(i, i + 4))) {
    //     console.log('Found start-of-packet at ', i + 4);
    //     break;
    // }

    // Part 2
    if (checkForUnique(data.slice(i, i + 14))) {
        console.log('Found start-of-message at ', i + 14);
        break;
    }
}