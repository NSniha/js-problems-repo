/**
 * Throttle: invokes fn at most once every `limit` ms.
 *
 * @param {Function} fn
 * @param {number} limit
 * @returns {Function}
 */
function throttle(fn, limit) {
  let inCooldown = false;

  return function (...args) {
    const context = this;

    if (inCooldown) return;

    fn.apply(context, args);
    inCooldown = true;

    setTimeout(() => {
      inCooldown = false;
    }, limit);
  };
}

// ---- Tests ----

let callCount = 0;
const log = (msg) => {
  callCount++;
  console.log(`[${callCount}] ${msg} @ ${Date.now() % 100000}ms`);
};

const throttledLog = throttle(log, 200);

console.log('Calling throttledLog every 50ms for 500ms...');
for (let i = 0; i <= 500; i += 50) {
  setTimeout(() => throttledLog(`attempt at t=${i}ms`), i);
}

// Expect roughly 3 invocations (t=0, ~200, ~400) out of 11 attempts.
setTimeout(() => {
  console.log(`\nTotal fn invocations: ${callCount} (expected: ~3)`);
}, 600);
