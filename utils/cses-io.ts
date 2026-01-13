/**
 * CSES I/O Utilities
 *
 * Helper functions for reading from stdin and writing to stdout
 * in CSES problem format.
 */

import * as fs from 'fs';

let inputLines: string[] = [];
let currentLine = 0;

/**
 * Initialize input buffer from stdin
 * Call this at the start of your solution
 */
export async function initInput(): Promise<void> {
  const input = await Bun.stdin.text();
  inputLines = input.trim().split('\n');
  currentLine = 0;
}

/**
 * Read next line from input
 */
export function readLine(): string {
  return inputLines[currentLine++] || '';
}

/**
 * Read all remaining lines
 */
export function readLines(): string[] {
  const lines = inputLines.slice(currentLine);
  currentLine = inputLines.length;
  return lines;
}

/**
 * Read next line as integer
 */
export function readInt(): number {
  return parseInt(readLine());
}

/**
 * Read next line as array of integers
 */
export function readInts(): number[] {
  return readLine().split(' ').map(Number);
}

/**
 * Read next line as long (bigint)
 */
export function readLong(): bigint {
  return BigInt(readLine());
}

/**
 * Read next line as array of longs (bigints)
 */
export function readLongs(): bigint[] {
  return readLine().split(' ').map(BigInt);
}

/**
 * Read next line as array of strings
 */
export function readStrings(): string[] {
  return readLine().split(' ');
}

/**
 * Print to stdout (with newline)
 */
export function println(value: string | number | bigint): void {
  console.log(value);
}

/**
 * Print to stdout (without newline)
 */
export function print(value: string | number | bigint): void {
  process.stdout.write(String(value));
}

/**
 * Print array elements separated by space
 */
export function printArray(arr: (string | number | bigint)[]): void {
  console.log(arr.join(' '));
}

/**
 * Synchronous version - reads all input at once
 * Use this for simpler problems
 */
export function readAllInput(): string[] {
  const input = fs.readFileSync(0, 'utf-8');
  return input.trim().split('\n');
}
