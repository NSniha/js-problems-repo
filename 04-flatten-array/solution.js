/**
 * Flattens a nested array up to the given depth.
 *
 * @param {Array} arr
 * @param {number} depth
 * @returns {Array}
 */
function flatten(arr, depth = Infinity) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flatten(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}

// ---- Tests ----

const nested = [1, [2, 3], [4, [5, 6, [7, 8]]], 9];

console.log('depth = 1:', flatten(nested, 1));
// [1, 2, 3, 4, [5, 6, [7, 8]], 9]

console.log('depth = 2:', flatten(nested, 2));
// [1, 2, 3, 4, 5, 6, [7, 8], 9]

console.log('depth = Infinity (default):', flatten(nested));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('empty array:', flatten([]));
// []
