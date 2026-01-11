# DS-Algo Folder Structure

This document outlines the organization structure for this DSA practice repository.

## 📁 Folder Organization

```
DS-Algo/
├── arrays/                    # Array-based algorithms
├── strings/                   # String manipulation algorithms
├── linked-lists/              # Linked list implementations
├── stacks-queues/            # Stack and Queue problems
├── trees/                     # Tree data structures and algorithms
├── graphs/                    # Graph algorithms
├── binary-search/            # Binary search variations
├── sorting/                   # Sorting algorithms
├── dynamic-programming/      # DP problems
├── greedy/                    # Greedy algorithms
├── backtracking/             # Backtracking problems
├── bit-manipulation/         # Bit manipulation techniques
├── math/                      # Mathematical algorithms
├── sliding-window/           # Sliding window technique
├── two-pointers/             # Two pointer technique
├── hash-tables/              # Hash table problems
├── heaps/                     # Heap/Priority Queue problems
├── tries/                     # Trie data structure
├── union-find/               # Disjoint Set Union
├── utils/                     # Shared utilities and helpers
└── tests/                     # Test files
```

## 📝 File Naming Convention

Each algorithm file should follow this pattern:

```
<problem-name>.ts
```

Examples:

- `two-sum.ts`
- `binary-search.ts`
- `merge-sort.ts`
- `longest-substring-without-repeating.ts`

## 📄 File Template

Each algorithm file should include:

1. **Problem Description** - Brief description of the problem
2. **Approach** - Explanation of the solution approach
3. **Time Complexity** - Big O notation for time
4. **Space Complexity** - Big O notation for space
5. **Implementation** - The actual code
6. **Test Cases** - Example usage and edge cases

See `TEMPLATE.md` for the standard template.

## 🏷️ Metadata Convention

Each file should start with a comment block containing:

```typescript
/**
 * Problem: [Problem Name]
 * Difficulty: [Easy/Medium/Hard]
 * Category: [Array/String/Tree/etc.]
 * Tags: [tag1, tag2, tag3]
 *
 * Description:
 * [Brief description of the problem]
 *
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */
```

## 🧪 Testing

- Test files should be placed in the `tests/` directory
- Test file naming: `<algorithm-name>.test.ts`
- Use Bun's built-in test runner

## 📊 Progress Tracking

Use `PROGRESS.md` to track which problems you've solved and which are pending.
