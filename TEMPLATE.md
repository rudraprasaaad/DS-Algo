# Algorithm Template

Use this template when creating new algorithm files.

## TypeScript Template

```typescript
/**
 * Problem: [Problem Name]
 * Difficulty: [Easy/Medium/Hard]
 * Category: [Array/String/Tree/Graph/etc.]
 * Tags: [tag1, tag2, tag3]
 * Source: [LeetCode/HackerRank/Custom/etc.] - [Link if applicable]
 *
 * Description:
 * [Detailed description of the problem]
 *
 * Example 1:
 * Input: [example input]
 * Output: [example output]
 * Explanation: [why this output]
 *
 * Example 2:
 * Input: [example input]
 * Output: [example output]
 *
 * Constraints:
 * - [constraint 1]
 * - [constraint 2]
 *
 * Approach:
 * [Explain your approach and thought process]
 *
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */

export function algorithmName(/* parameters */): /* return type */ {
  // Implementation here
};

// Alternative approaches (if any)
export function algorithmNameV2(/* parameters */): /* return type */ {
  // Alternative implementation
};

// Test cases
if (import.meta.main) {
  console.log('Test Case 1:');
  console.log(algorithmName(/* test input */));
  console.log('Expected: [expected output]');
  console.log();

  console.log('Test Case 2:');
  console.log(algorithmName(/* test input */));
  console.log('Expected: [expected output]');
  console.log();

  console.log('Edge Case:');
  console.log(algorithmName(/* edge case input */));
  console.log('Expected: [expected output]');
}
```

## Quick Start

1. Copy the template above
2. Replace placeholders with actual values
3. Implement the algorithm
4. Add test cases
5. Run with: `bun run <filename>.ts`
