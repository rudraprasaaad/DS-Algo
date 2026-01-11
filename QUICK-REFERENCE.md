# Quick Reference Guide

## Common Commands

### Running Algorithms
```bash
# Run a specific algorithm
bun run <category>/<file-name>.ts

# Example
bun run binary-search/lower-bound.ts
```

### Code Quality
```bash
# Format all files
bun run format

# Check formatting without changes
bun run format:check

# Run linter
bun run lint

# Run tests
bun run test
```

### Creating New Algorithm
```bash
# 1. Create file in appropriate category
# 2. Copy template from TEMPLATE.md
# 3. Implement algorithm
# 4. Add test cases
# 5. Run and verify
bun run <category>/<your-file>.ts

# 6. Format and lint
bun run format
bun run lint

# 7. Update PROGRESS.md
```

## File Structure Quick Reference

```
algorithm-name.ts
├── Problem metadata (comment block)
├── Main implementation (exported function)
├── Alternative approaches (if any)
└── Test cases (if import.meta.main)
```

## Complexity Notation Cheat Sheet

### Time Complexity (from best to worst)
- O(1) - Constant
- O(log n) - Logarithmic
- O(n) - Linear
- O(n log n) - Linearithmic
- O(n²) - Quadratic
- O(n³) - Cubic
- O(2ⁿ) - Exponential
- O(n!) - Factorial

### Space Complexity
- O(1) - Constant space
- O(n) - Linear space
- O(n²) - Quadratic space

## Common Patterns

### Two Pointers
```typescript
let left = 0;
let right = arr.length - 1;
while (left < right) {
  // Process
  left++;
  right--;
}
```

### Sliding Window
```typescript
let windowStart = 0;
for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
  // Expand window
  while (/* condition */) {
    // Shrink window
    windowStart++;
  }
}
```

### Binary Search
```typescript
let left = 0;
let right = arr.length - 1;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}
```

## Useful Resources

- **Visualizations**: [Visualgo](https://visualgo.net/)
- **Practice**: [LeetCode](https://leetcode.com/), [NeetCode](https://neetcode.io/)
- **Complexity**: [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
- **Patterns**: [14 Patterns to Ace Any Coding Interview](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)
