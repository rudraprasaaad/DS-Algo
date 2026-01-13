# CSES Problem Template

Use this template when creating new CSES problem files.

## TypeScript Template for CSES Problems

```typescript
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

import {
  readInt,
  readInts,
  readLine,
  printArray,
  println,
} from '../../utils/cses-io';

async function solve(): Promise<void> {
  // Read input
  const n = readInt();

  // Your solution here

  // Print output
  println(result);
}

// Run the solution
if (import.meta.main) {
  const input = await Bun.stdin.text();
  const lines = input.trim().split('\n');
  let lineIndex = 0;

  // Override read functions for this execution
  const readLine = () => lines[lineIndex++] || '';
  const readInt = () => parseInt(readLine());
  const readInts = () => readLine().split(' ').map(Number);

  // Call solve with overridden functions
  await solve();
}
```

## Quick Start

1. Copy the template above
2. Replace placeholders:
   - `[Problem Name]` - e.g., "Weird Algorithm"
   - `[problem-id]` - CSES problem ID (e.g., 1068)
   - `[Difficulty]` - Easy/Medium/Hard
   - Fill in problem description, constraints, examples
3. Implement the `solve()` function
4. Test with: `echo "test input" | bun run filename.ts`

## Example Usage

```bash
# Run with sample input
echo "3" | bun run cses/introductory-problems/weird-algorithm.ts

# Run with input file
bun run cses/introductory-problems/weird-algorithm.ts < input.txt
```

## Tips

- Always use the I/O utilities from `utils/cses-io.ts`
- CSES expects exact output format (no extra spaces/newlines)
- Test with all sample inputs before submitting
- For large numbers, use `bigint` type
- Remember to handle edge cases
