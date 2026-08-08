/**
 * Debounce: delays invoking fn until `delay` ms have passed
 * since the last call to the debounced function.
 *
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {
    const context = this;

    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(context, args);
      timerId = null;
    }, delay);
  };
}

// ---- Tests ----

let callCount = 0;
const log = (msg) => {
  callCount++;
  console.log(`[${callCount}] ${msg}`);
};

const debouncedLog = debounce(log, 200);

console.log('Calling debouncedLog 5 times rapidly (every 50ms)...');
debouncedLog('call 1');
setTimeout(() => debouncedLog('call 2'), 50);
setTimeout(() => debouncedLog('call 3'), 100);
setTimeout(() => debouncedLog('call 4'), 150);
setTimeout(() => debouncedLog('call 5 (final)'), 200);

// Only "call 5 (final)" should be logged, ~200ms after the last call.
setTimeout(() => {
  console.log(`\nTotal fn invocations: ${callCount} (expected: 1)`);
}, 600);
