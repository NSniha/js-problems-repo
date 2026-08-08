# Flatten Array

## Problem

Implement a `flatten(arr, depth = Infinity)` function that flattens a nested array up to the given depth, similar to the native `Array.prototype.flat()`, without using it.

## Constraints

- `depth = 1` flattens only one level deep.
- `depth = Infinity` (default) fully flattens all levels.
- Non-array elements are left untouched.

## Approach

Iterate through the array. If an element is itself an array and the remaining depth is greater than 0, recurse into it with `depth - 1` and spread the result. Otherwise, push the element as-is.

Time complexity: O(n) where n is the total number of elements across all nesting levels. Space complexity: O(n) for the output array plus recursion stack depth proportional to nesting depth.
