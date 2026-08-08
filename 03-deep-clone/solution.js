/**
 * Deep clones an object/array, handling nested structures,
 * Date instances, and circular references.
 *
 * @param {*} value
 * @param {WeakMap} seen - internal tracking map, do not pass manually
 * @returns {*}
 */
function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (seen.has(value)) {
    return seen.get(value);
  }

  const clone = Array.isArray(value) ? [] : {};
  seen.set(value, clone);

  for (const key of Object.keys(value)) {
    clone[key] = deepClone(value[key], seen);
  }

  return clone;
}

// ---- Tests ----

const original = {
  name: 'project',
  tags: ['js', 'frontend'],
  meta: { created: new Date('2026-01-01'), nested: { deep: true } },
};

const cloned = deepClone(original);
cloned.tags.push('mutated');
cloned.meta.nested.deep = false;

console.log('Original tags:', original.tags);   // ['js', 'frontend']
console.log('Cloned tags:  ', cloned.tags);      // ['js', 'frontend', 'mutated']
console.log('Original nested.deep:', original.meta.nested.deep); // true
console.log('Cloned nested.deep:  ', cloned.meta.nested.deep);   // false
console.log('Cloned date is a real Date instance:', cloned.meta.created instanceof Date);

// Circular reference test
const circular = { a: 1 };
circular.self = circular;
const clonedCircular = deepClone(circular);
console.log('\nCircular clone resolved self-reference:', clonedCircular.self === clonedCircular);
