'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const lines = input.split('\n');

const n = parseInt(lines[0]);

const arr = lines[1].split(' ').map(Number);

let total = (n * (n + 1)) / 2;
let sum = 0;

for (const x of arr) {
  sum += x;
}

let missing_number = total - sum;

console.log(missing_number);
