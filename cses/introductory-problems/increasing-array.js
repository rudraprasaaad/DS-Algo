'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const lines = input.split('\n');

const n = parseInt(lines[0]);

const arr = lines[1].split(' ').map(Number);

let maxSoFar = arr[0];
let moves = 0;

for (let i = 1; i < n; i++) {
  if (arr[i] < maxSoFar) {
    moves += maxSoFar - arr[i];
  } else {
    maxSoFar = Math.max(maxSoFar, arr[i]);
  }
}

console.log(moves);
