# Deep Clone

## Problem

Implement a `deepClone(value)` function that returns a fully independent copy of an object or array, including nested objects/arrays, so mutating the clone never affects the original.

## Constraints

- Must handle nested objects and arrays of arbitrary depth.
- Must handle primitive values, `null`, `Date`, and circular references without infinite looping.
- `structuredClone()` exists natively in modern JS, but implementing it manually is a common interview exercise to test recursion and reference handling.

## Approach

Recursively walk the value. For primitives, return as-is. For `Date`, return a new `Date` instance. For objects/arrays, create a new container and recurse into each property/element. Use a `WeakMap` to track already-cloned objects, so if the same reference is encountered again (including circular references), the existing clone is reused instead of recursing infinitely.

Time complexity: O(n) where n is the total number of nested properties. Space complexity: O(n) for the cloned structure plus the tracking map.
