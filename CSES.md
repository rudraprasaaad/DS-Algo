# CSES Problemset Guide

This repository is set up to practice problems from the [CSES Problem Set](https://cses.fi/problemset/).

## What is CSES?

CSES (Code Submission Evaluation System) is a collection of competitive programming practice problems. It contains over 300 problems covering various algorithmic topics, making it an excellent resource for improving problem-solving skills.

## Repository Structure for CSES

```
DS-Algo/
├── cses/
│   └── introductory-problems/    # CSES Introductory Problems
│       ├── weird-algorithm.ts
│       ├── missing-number.ts
│       └── ...
├── utils/
│   └── cses-io.ts                # I/O utilities for CSES problems
├── cses-template.md              # Template for new CSES problems
└── CSES-PROGRESS.md              # Track your CSES progress
```

## Getting Started

### 1. Pick a Problem

Visit [CSES Problem Set](https://cses.fi/problemset/) and choose a problem to solve.

### 2. Create a New File

Create a new JavaScript file in the appropriate category folder:

```bash
# Example for an introductory problem
touch cses/introductory-problems/problem-name.js
```

### 3. Use the Template

Copy the template from `cses-template.md` and fill in:

- Problem name and CSES link
- Problem description
- Input/output format
- Your solution

### 4. Implement Your Solution

Use CommonJS format for CSES compatibility:

```javascript
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const n = parseInt(input); // Read single integer
const arr = input.split(' ').map(Number); // Read array of integers

// Your solution logic here

console.log(result); // Print result
```

### 5. Test Locally

Test your solution with sample inputs:

```bash
# Method 1: Pipe input
echo "3" | bun run cses/introductory-problems/weird-algorithm.js

# Method 2: Use input file
bun run cses/introductory-problems/weird-algorithm.js < input.txt
```

### 6. Submit to CSES

1. Copy your solution code
2. Go to the problem page on CSES
3. Select **Node.js** as the language
4. Paste your code and submit

## Input/Output Format

CSES problems use **standard input (stdin)** and **standard output (stdout)**:

- **Input**: Read from stdin using `fs.readFileSync(0, 'utf-8')`
- **Output**: Write to stdout using `console.log()`

### Common I/O Patterns

```javascript
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const lines = input.split('\n');

// Read single integer
const n = parseInt(lines[0]);

// Read multiple integers from one line
const [a, b, c] = lines[0].split(' ').map(Number);

// Read array of integers
const arr = lines[1].split(' ').map(Number);

// Read string
const s = lines[0];

// Print single value
console.log(42);

// Print array with spaces
console.log([1, 2, 3, 4].join(' ')); // Output: 1 2 3 4
```

## Available Utilities

The `utils/cses-io.ts` file provides:

| Function          | Description                         |
| ----------------- | ----------------------------------- |
| `readLine()`      | Read next line as string            |
| `readInt()`       | Read next line as integer           |
| `readInts()`      | Read next line as array of integers |
| `readLong()`      | Read next line as bigint            |
| `readLongs()`     | Read next line as array of bigints  |
| `readStrings()`   | Read next line as array of strings  |
| `println(value)`  | Print value with newline            |
| `print(value)`    | Print value without newline         |
| `printArray(arr)` | Print array with space separator    |

## Tips for CSES Problems

1. **Exact Output**: CSES judges are strict about output format. No extra spaces or newlines!

2. **Large Numbers**: Some problems require `bigint` for large numbers:

   ```typescript
   const n = readLong(); // Use bigint
   ```

3. **Time Limits**: CSES has strict time limits. Optimize your solutions!

4. **Edge Cases**: Always test edge cases:
   - Minimum input (n=1)
   - Maximum input
   - Special cases mentioned in constraints

5. **Debugging**: Add debug output to stderr (won't affect CSES judge):
   ```typescript
   console.error('Debug:', variable); // Only visible locally
   ```

## Progress Tracking

Track your progress in `CSES-PROGRESS.md`:

- Mark problems as completed ✅
- Note difficulty and approach
- Track which problems need review

## Example Problem

See `cses/introductory-problems/weird-algorithm.ts` for a complete example of:

- Proper file structure
- Input/output handling
- Solution implementation
- Testing

## Resources

- [CSES Problem Set](https://cses.fi/problemset/)
- [CSES Solutions (for reference)](https://github.com/mrsac7/CSES-Solutions)
- [Competitive Programmer's Handbook](https://cses.fi/book/book.pdf)

## Need Help?

- Check the template: `cses-template.md`
- Review the example problem
- Read the I/O utilities documentation in `utils/cses-io.ts`

Happy coding! 🚀
