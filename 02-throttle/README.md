# Throttle

## Problem

Implement a `throttle(fn, limit)` function that returns a new function which invokes `fn` at most once every `limit` milliseconds, regardless of how many times the returned function is called.

Common use case: scroll listeners, mouse-move handlers, button-click spam prevention — where you want a steady, rate-limited execution rather than waiting for calls to stop (that's debounce).

## Constraints

- The first call should execute immediately.
- Calls made during the "cooldown" window are ignored (or optionally trail — this solution ignores them for simplicity).
- Should preserve `this` context and arguments.

## Approach

Track a boolean flag. On the first call, invoke `fn` immediately and set the flag. Any calls while the flag is set are dropped. After `limit` ms, reset the flag via `setTimeout`.

Time complexity: O(1) per call. Space complexity: O(1).
