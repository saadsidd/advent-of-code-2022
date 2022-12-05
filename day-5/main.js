/*
--- Day 5: Supply Stacks ---

--- Part One ---
After the rearrangement procedure completes, what crate ends up on top of each stack?

--- Part Two ---
After the rearrangement procedure completes, what crate ends up on top of each stack?
*/

const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const moves = data.split('\r\n');

const cargoTemp = moves.splice(0, 10);
const cargo = [];

// Sort the cargo into nested array
for (let i = 0; i < 8; i++) {
    let index = 0;
    for (let j = 1; j < 34; j += 4) {
        if (cargo[index] === undefined) {
            cargo[index] = [];
        }
        if (cargoTemp[i][j] !== ' ') {
            cargo[index].push(cargoTemp[i][j]);
        }
        index++;
    }
}

// Carry out the cargo moves
for (const move of moves) {
    const [, quantity, , from, , to] = move.split(' ').map(num => parseInt(num));

    // Part 1
    // for (let i = 0; i < quantity; i++) {
    //     cargo[to-1].unshift(cargo[from-1].shift());
    // }

    // Part 2
    cargo[to-1] = cargo[from-1].splice(0, quantity).concat(cargo[to-1]);
}

// Result
for (let i = 0; i < cargo.length; i++) {
    if (cargo[i][0]) process.stdout.write(cargo[i][0]);
}