/**
 * Custom implementation of Promise.all.
 *
 * @param {Array<Promise|*>} promises
 * @returns {Promise<Array>}
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('promiseAll expects an array'));
    }

    const results = new Array(promises.length);
    let resolvedCount = 0;

    if (promises.length === 0) {
      return resolve(results);
    }

    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          results[index] = value;
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// ---- Tests ----

const delay = (value, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const delayReject = (reason, ms) =>
  new Promise((_, reject) => setTimeout(() => reject(reason), ms));

// Test 1: all resolve, order preserved despite different timings
promiseAll([delay('a', 100), delay('b', 10), 'plain-value', delay('d', 50)])
  .then((results) => {
    console.log('Test 1 (expect [a, b, plain-value, d]):', results);
  });

// Test 2: fail-fast on first rejection
promiseAll([delay('a', 100), delayReject('boom', 20), delay('c', 200)])
  .then((results) => console.log('Test 2 unexpected resolve:', results))
  .catch((err) => console.log('Test 2 (expect "boom" at ~20ms):', err));

// Test 3: empty array resolves immediately
promiseAll([]).then((results) => {
  console.log('Test 3 (expect []):', results);
});
