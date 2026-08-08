# Debounce

## Problem

Implement a `debounce(fn, delay)` function that returns a new function. The returned function should only invoke `fn` after `delay` milliseconds have passed since the **last** time it was called. If it is called again before the delay elapses, the timer resets.

Common use case: search input handlers, resize listeners, autosave — where you want to wait until the user stops triggering the event before running expensive logic.

## Constraints

- `fn` may take any number of arguments.
- Each call to the debounced function must cancel the previous pending timer.
- The debounced function should preserve `this` context and arguments passed to `fn`.

## Approach

Use a closure to hold a reference to the current timer ID. On every call, clear the existing timer (if any) and set a new one. Only when the timer completes uninterrupted does `fn` actually run.

Time complexity: O(1) per call. Space complexity: O(1) (single timer reference held in closure).
