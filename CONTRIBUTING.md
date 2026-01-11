# Contributing Guidelines

## Adding a New Algorithm

### 1. Choose the Right Category

Place your algorithm in the appropriate folder based on its primary concept:

- If it's primarily about arrays → `arrays/`
- If it uses binary search → `binary-search/`
- If it's a tree problem → `trees/`
- etc.

If unsure, create the file in the most relevant category.

### 2. Use the Template

Copy the template from [TEMPLATE.md](./TEMPLATE.md) and fill in:

- Problem name and difficulty
- Problem description
- Examples and constraints
- Your approach explanation
- Time and space complexity
- Implementation
- Test cases

### 3. Naming Convention

Use kebab-case for file names:

- ✅ `two-sum.ts`
- ✅ `longest-common-subsequence.ts`
- ❌ `twoSum.ts`
- ❌ `LongestCommonSubsequence.ts`

### 4. Code Quality

- Follow TypeScript best practices
- Add proper type annotations
- Include meaningful variable names
- Add comments for complex logic
- Format code with Prettier: `bun run format`
- Check for lint errors: `bun run lint`

### 5. Testing

- Include test cases in the file using `if (import.meta.main)`
- Test edge cases
- Verify time/space complexity claims

### 6. Update Progress

After completing an algorithm:

1. Update [PROGRESS.md](./PROGRESS.md)
2. Mark the problem as completed
3. Add any notes or insights

## Code Style

### TypeScript Conventions

```typescript
// ✅ Good
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}

// ❌ Avoid
function twoSum(nums, target) {
  // Missing types
  let map = {}; // Use Map instead of object
  // ...
}
```

### Comments

```typescript
// ✅ Good - Explain WHY, not WHAT
// Use two pointers to avoid O(n²) nested loops
let left = 0;
let right = nums.length - 1;

// ❌ Avoid - States the obvious
// Set left to 0
let left = 0;
```

## Commit Messages

Use clear, descriptive commit messages:

- ✅ `Add binary search implementation`
- ✅ `Implement merge sort with O(n log n) complexity`
- ✅ `Fix edge case in two-sum algorithm`
- ❌ `Update file`
- ❌ `Fix bug`

## Questions?

If you're unsure about anything, refer to:

- [STRUCTURE.md](./STRUCTURE.md) - Folder organization
- [TEMPLATE.md](./TEMPLATE.md) - File template
- Existing implementations for examples
