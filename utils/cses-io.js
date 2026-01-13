/**
 * CSES I/O Utilities
 *
 * Helper functions for reading from stdin and writing to stdout
 * in CSES problem format.
 *
 * CommonJS format for CSES compatibility
 */

const fs = require('fs');

let inputLines = [];
let currentLine = 0;

/**
 * Initialize input buffer from stdin
 * Call this at the start of your solution
 */
async function initInput() {
  const input = await Bun.stdin.text();
  inputLines = input.trim().split('\n');
  currentLine = 0;
}

/**
 * Read next line from input
 */
function readLine() {
  return inputLines[currentLine++] || '';
}

/**
 * Read all remaining lines
 */
function readLines() {
  const lines = inputLines.slice(currentLine);
  currentLine = inputLines.length;
  return lines;
}

/**
 * Read next line as integer
 */
function readInt() {
  return parseInt(readLine());
}

/**
 * Read next line as array of integers
 */
function readInts() {
  return readLine().split(' ').map(Number);
}

/**
 * Read next line as long (bigint)
 */
function readLong() {
  return BigInt(readLine());
}

/**
 * Read next line as array of longs (bigints)
 */
function readLongs() {
  return readLine().split(' ').map(BigInt);
}

/**
 * Read next line as array of strings
 */
function readStrings() {
  return readLine().split(' ');
}

/**
 * Print to stdout (with newline)
 */
function println(value) {
  console.log(value);
}

/**
 * Print to stdout (without newline)
 */
function print(value) {
  process.stdout.write(String(value));
}

/**
 * Print array elements separated by space
 */
function printArray(arr) {
  console.log(arr.join(' '));
}

/**
 * Synchronous version - reads all input at once
 * Use this for simpler problems
 */
function readAllInput() {
  const input = fs.readFileSync(0, 'utf-8');
  return input.trim().split('\n');
}

// CommonJS exports
module.exports = {
  initInput,
  readLine,
  readLines,
  readInt,
  readInts,
  readLong,
  readLongs,
  readStrings,
  println,
  print,
  printArray,
  readAllInput,
};
