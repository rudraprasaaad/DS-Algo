# CSES Problem Template

Use this template when creating new CSES problem files.

## JavaScript Template for CSES Problems

```javascript
/**
 * CSES Problem: [Problem Name]
 * Link: https://cses.fi/problemset/task/[problem-id]
 * Difficulty: [Easy/Medium/Hard]
 * Category: [Introductory Problems/Sorting and Searching/etc.]
 *
 * Problem Description:
 * [Brief description of the problem]
 *
 * Input:
 * [Description of input format]
 *
 * Output:
 * [Description of output format]
 *
 * Constraints:
 * - [constraint 1]
 * - [constraint 2]
 *
 * Example:
 * Input:
 * [example input]
 *
 * Output:
 * [example output]
 *
 * Approach:
 * [Explain your solution approach]
 *
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

// Parse input
const n = parseInt(input);

// Your solution here

// Print output
console.log(result);
```

## Alternative: Using I/O Utilities

```javascript
/**
 * CSES Problem: [Problem Name]
 * Link: https://cses.fi/problemset/task/[problem-id]
 */

const {
  readInt,
  readInts,
  println,
  printArray,
} = require('../../utils/cses-io');

// Read input
const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let lineIndex = 0;
const readLine = () => lines[lineIndex++];
const n = parseInt(readLine());

// Your solution here

// Print output
console.log(result);
```

## Quick Start

1. Copy the template above
2. Replace placeholders:
   - `[Problem Name]` - e.g., "Weird Algorithm"
   - `[problem-id]` - CSES problem ID (e.g., 1068)
   - `[Difficulty]` - Easy/Medium/Hard
   - Fill in problem description, constraints, examples
3. Implement your solution
4. Test with: `echo "test input" | bun run filename.js`

## Example Usage

```bash
# Run with sample input
echo "3" | bun run cses/introductory-problems/weird-algorithm.js

# Run with input file
bun run cses/introductory-problems/weird-algorithm.js < input.txt
```

## Tips

- Use CommonJS format (`require`/`module.exports`) for CSES compatibility
- CSES expects exact output format (no extra spaces/newlines)
- Test with all sample inputs before submitting
- For large numbers, use `BigInt`
- Remember to handle edge cases

## CSES Submission

When submitting to CSES:

1. Copy your JavaScript code
2. Make sure it uses CommonJS (`require`)
3. Paste into CSES editor
4. Select "Node.js" as language
5. Submit
