'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const s = input;
let count = 1,
  max = 1;

for (let i = 1; i < s.length; i++) {
  if (s[i] == s[i - 1]) {
    count++;
    max = Math.max(count, max);
  } else {
    count = 1;
  }
}

console.log(max);
