'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
let n = parseInt(input);

const result = [];

while (n !== 1) {
  result.push(n);
  if (n % 2 === 0) {
    n /= 2;
  } else {
    n = n * 3 + 1;
  }
}
result.push(1);

console.log(result.join(' '));
