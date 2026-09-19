# Minimum Window Substring

A hard JavaScript algorithm problem solved using the Sliding Window technique, Two Pointers, and frequency maps.

---

## Difficulty

**Hard**

---

## Problem

Given two strings:

```text
source
target
```

find the shortest substring of `source` that contains every character required by `target`.

Character frequency matters.

For example:

```javascript
minWindowSubstring("ADOBECODEBANC", "ABC");
```

returns:

```text
BANC
```

because `"BANC"` contains all characters:

```text
A
B
C
```

and no shorter valid substring exists.

---

# Why This Problem Is Difficult

A simple approach might generate every possible substring and check whether it contains all characters from the target.

However, a string of length `n` can have a very large number of substrings.

That makes a brute-force solution inefficient for large input sizes.

Instead, this solution uses:

```text
Sliding Window
+
Two Pointers
+
Frequency Maps
```

The window expands when more characters are needed and shrinks when all requirements are satisfied.

---

# Solution

```javascript
function minWindowSubstring(source, target) {
  if (
    source.length === 0 ||
    target.length === 0 ||
    target.length > source.length
  ) {
    return "";
  }

  const requiredCount = new Map();

  for (const char of target) {
    requiredCount.set(
      char,
      (requiredCount.get(char) || 0) + 1
    );
  }

  const windowCount = new Map();

  const required = requiredCount.size;
  let formed = 0;

  let left = 0;

  let bestStart = 0;
  let bestLength = Infinity;

  for (let right = 0; right < source.length; right++) {
    const rightChar = source[right];

    windowCount.set(
      rightChar,
      (windowCount.get(rightChar) || 0) + 1
    );

    if (
      requiredCount.has(rightChar) &&
      windowCount.get(rightChar) === requiredCount.get(rightChar)
    ) {
      formed++;
    }

    while (left <= right && formed === required) {
      const currentLength = right - left + 1;

      if (currentLength < bestLength) {
        bestLength = currentLength;
        bestStart = left;
      }

      const leftChar = source[left];

      windowCount.set(
        leftChar,
        windowCount.get(leftChar) - 1
      );

      if (
        requiredCount.has(leftChar) &&
        windowCount.get(leftChar) < requiredCount.get(leftChar)
      ) {
        formed--;
      }

      left++;
    }
  }

  if (bestLength === Infinity) {
    return "";
  }

  return source.slice(
    bestStart,
    bestStart + bestLength
  );
}
```

---

# Approach

## Step 1: Handle Edge Cases

First check:

```javascript
if (
  source.length === 0 ||
  target.length === 0 ||
  target.length > source.length
) {
  return "";
}
```

There cannot be a valid answer when:

- `source` is empty
- `target` is empty
- `target` is longer than `source`

---

# Step 2: Count Target Characters

Create a frequency map:

```javascript
const requiredCount = new Map();
```

Then process every target character:

```javascript
for (const char of target) {
  requiredCount.set(
    char,
    (requiredCount.get(char) || 0) + 1
  );
}
```

Suppose:

```text
target = "AABC"
```

Then conceptually the map contains:

```text
A → 2
B → 1
C → 1
```

This is important because duplicates must be respected.

---

# Step 3: Create the Sliding Window

We use:

```javascript
let left = 0;
```

and move another pointer:

```javascript
right
```

from the beginning of the string to the end.

The current window is:

```text
source[left ... right]
```

---

# Step 4: Expand the Window

Each time `right` moves, add the new character to:

```javascript
windowCount
```

```javascript
windowCount.set(
  rightChar,
  (windowCount.get(rightChar) || 0) + 1
);
```

---

# Step 5: Track Satisfied Requirements

Suppose the target requires:

```text
A → 2
```

When the window also reaches:

```text
A → 2
```

that character requirement becomes satisfied.

```javascript
if (
  requiredCount.has(rightChar) &&
  windowCount.get(rightChar) === requiredCount.get(rightChar)
) {
  formed++;
}
```

---

# `required` vs `formed`

`required` represents the number of unique character requirements.

For:

```text
AABC
```

the unique required characters are:

```text
A
B
C
```

Therefore:

```text
required = 3
```

`formed` tells us how many of those frequency requirements are currently satisfied.

When:

```javascript
formed === required
```

the current window is valid.

---

# Step 6: Shrink the Window

Once the window contains everything required, try making it smaller:

```javascript
while (left <= right && formed === required)
```

Calculate its length:

```javascript
const currentLength = right - left + 1;
```

If this window is smaller than the best one found so far:

```javascript
if (currentLength < bestLength) {
  bestLength = currentLength;
  bestStart = left;
}
```

save it.

---

# Step 7: Remove Characters from the Left

To shrink the window:

```javascript
const leftChar = source[left];
```

Decrease its count:

```javascript
windowCount.set(
  leftChar,
  windowCount.get(leftChar) - 1
);
```

If removing the character means we no longer have enough of it:

```javascript
if (
  requiredCount.has(leftChar) &&
  windowCount.get(leftChar) < requiredCount.get(leftChar)
) {
  formed--;
}
```

the window becomes invalid.

Then:

```javascript
left++;
```

and the algorithm returns to expanding the right side.

---

# Step-by-Step Example

Consider:

```javascript
source = "ADOBECODEBANC"
target = "ABC"
```

Target requirements:

```text
A → 1
B → 1
C → 1
```

Initially:

```text
left = 0
formed = 0
```

---

## Expand the Window

Eventually the window becomes:

```text
ADOBEC
```

It contains:

```text
A
B
C
```

So it is valid.

Current window:

```text
ADOBEC
```

Length:

```text
6
```

Store it as the current best answer.

---

## Shrink from the Left

Remove:

```text
A
```

Now the window no longer contains the required `A`.

So the window becomes invalid.

The `right` pointer must continue moving.

---

## Continue Searching

Later we find:

```text
CODEBA
```

and eventually:

```text
BANC
```

`BANC` contains:

```text
B
A
N
C
```

which satisfies every required character.

Its length is:

```text
4
```

No smaller valid window is found.

Therefore:

```text
BANC
```

is returned.

---

# Duplicate Character Example

Consider:

```javascript
minWindowSubstring("aa", "aa");
```

Target requirements:

```text
a → 2
```

A window containing only:

```text
a
```

is not valid.

The window must contain:

```text
aa
```

Therefore the output is:

```text
aa
```

---

# Test Cases

```javascript
console.log(
  minWindowSubstring("ADOBECODEBANC", "ABC")
);
// "BANC"

console.log(
  minWindowSubstring("aa", "aa")
);
// "aa"

console.log(
  minWindowSubstring("hello", "xyz")
);
// ""

console.log(
  minWindowSubstring(
    "aaflslflsldkalskaaa",
    "aaa"
  )
);
// "aaa"

console.log(
  minWindowSubstring(
    "this is a test string",
    "tist"
  )
);
// "t stri"

console.log(
  minWindowSubstring("a", "a")
);
// "a"

console.log(
  minWindowSubstring("a", "aa")
);
// ""

console.log(
  minWindowSubstring("", "ABC")
);
// ""

console.log(
  minWindowSubstring("ABC", "")
);
// ""
```

---

# Why Sliding Window Works

The algorithm maintains a window:

```text
[left, right]
```

The `right` pointer expands the window until all required characters are present.

Then the `left` pointer shrinks the window until removing another required character would make it invalid.

This process avoids restarting from every possible substring.

Both pointers only move forward.

---

# Time Complexity

## O(n + m)

Where:

```text
n = source.length
m = target.length
```

The target is processed once.

The `right` pointer moves across the source once, and the `left` pointer also only moves forward.

Under the standard constant-time map lookup model, the overall algorithm is linear.

---

# Space Complexity

## O(k)

Where `k` is the number of distinct characters stored in the frequency maps.

Two maps are used:

```javascript
requiredCount
windowCount
```

Therefore additional space depends on the number of distinct characters encountered.

---

# Concepts Practiced

- Sliding Window
- Two Pointers
- Hash Map / Map
- Frequency Counting
- String Processing
- Nested Window Logic
- Algorithm Optimization
- Edge Cases
- Time Complexity Analysis

---

# Project Structure

```text
06-minimum-window-substring/
├── question.md
├── solution.js
└── README.md
```

---

# Final Example

```javascript
minWindowSubstring(
  "ADOBECODEBANC",
  "ABC"
);
```

Output:

```text
BANC
```

---

## Key Takeaway

Instead of generating every substring, maintain one dynamic window.

Expand:

```text
right →
```

until the window becomes valid.

Then shrink:

```text
← left
```

to find the smallest possible valid window.

This expand-and-shrink strategy is one of the most important uses of the Sliding Window technique.