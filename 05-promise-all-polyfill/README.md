# Promise.all Polyfill

## Problem

Implement `promiseAll(promises)`, a function that behaves like the native `Promise.all()`:

- Resolves with an array of results, in the same order as the input, once **all** promises resolve.
- Rejects immediately with the reason of the **first** promise that rejects.
- Accepts a mix of promises and plain (non-promise) values.

## Constraints

- Must not depend on `Promise.all` itself.
- Order of results must match the order of the input array, regardless of which promise settles first.
- Must reject as soon as any single promise rejects (fail-fast), not wait for the rest.

## Approach

Return a `new Promise((resolve, reject) => ...)`. Track a results array and a counter of resolved promises. For each input, wrap it in `Promise.resolve()` so plain values are handled uniformly, then attach `.then`/`.catch`. On each resolution, store the value at its original index and increment the counter; when the counter equals the input length, resolve the outer promise. On any rejection, immediately reject the outer promise.

Time complexity: O(n) for setting up handlers. The overall runtime is bound by the slowest promise, same as native `Promise.all`.
