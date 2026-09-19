# Minimum Window Substring

## Difficulty

Hard

---

## Problem Description

Write a function `minWindowSubstring` that takes two strings:

- `source`
- `target`

Return the shortest substring of `source` that contains every character from `target`.

If a character appears multiple times in `target`, the returned substring must contain that character at least the same number of times.

If no valid substring exists, return an empty string.

The comparison is case-sensitive.

If multiple valid substrings have the same minimum length, return the one that appears first in `source`.

---

## Function Signature

```javascript
function minWindowSubstring(source, target) {
  // Implement your solution here
}
```

---

## Example 1

### Input

```javascript
minWindowSubstring("ADOBECODEBANC", "ABC");
```

### Output

```text
BANC
```

### Explanation

The substring:

```text
BANC
```

contains:

```text
A
B
C
```

and no shorter substring contains all three required characters.

---

## Example 2

### Input

```javascript
minWindowSubstring("aa", "aa");
```

### Output

```text
aa
```

### Explanation

The target requires two occurrences of `a`.

Therefore:

```text
a
```

is not enough.

The smallest valid substring is:

```text
aa
```

---

## Example 3

### Input

```javascript
minWindowSubstring("hello", "xyz");
```

### Output

```text

```

### Explanation

The source string does not contain all the characters required by the target.

Therefore, return an empty string.

---

## Example 4

### Input

```javascript
minWindowSubstring("aaflslflsldkalskaaa", "aaa");
```

### Output

```text
aaa
```

### Explanation

The target contains three `a` characters.

The shortest substring containing three occurrences of `a` is:

```text
aaa
```

---

## Example 5

### Input

```javascript
minWindowSubstring("this is a test string", "tist");
```

### Output

```text
t stri
```

The returned substring must contain:

```text
t → 2 times
i → 1 time
s → 1 time
```

---

## Constraints

- `source` and `target` will be strings.
- `0 <= source.length <= 100000`
- `0 <= target.length <= 10000`
- Character comparison is case-sensitive.
- Duplicate characters in `target` must be respected.
- If `target` is empty, return an empty string.
- If no valid window exists, return an empty string.

---

## Topics

- String
- Sliding Window
- Two Pointers
- Hash Map
- Frequency Counting
- Algorithm Optimization
- Hard

---

# Hints

## Hint 1

A brute-force solution would check many possible substrings.

For a large source string, that approach can become very slow.

Try maintaining a moving range instead.

Think about two indexes:

```text
left
right
```

---

## Hint 2

Use a frequency map to count how many times each character is required by `target`.

For example:

```text
target = "AABC"
```

requires:

```javascript
{
  A: 2,
  B: 1,
  C: 1
}
```

---

## Hint 3

Create another frequency map for the current window.

As the `right` pointer moves forward, add characters to the current window.

---

## Hint 4

A character requirement becomes satisfied when the number of that character inside the window matches the required frequency.

For example:

```text
required A count = 2
window A count = 2
```

That requirement is now satisfied.

---

## Hint 5

Keep track of:

```javascript
required
```

which represents the number of unique character requirements.

Also track:

```javascript
formed
```

which represents how many of those requirements are currently satisfied.

When:

```javascript
formed === required
```

the current window contains everything needed.

---

## Hint 6

Once a valid window is found, move the `left` pointer forward.

The goal is to make the window as small as possible while keeping it valid.

---

## Hint 7

When removing a character from the left side causes its frequency to fall below the required amount, the window becomes invalid.

At that point, move the `right` pointer again.

---

## Hint 8

Remember that duplicate target characters matter.

For example:

```javascript
target = "AABC"
```

A substring containing only one `A` is not valid.

---

## Challenge

Try solving the problem in linear time relative to the size of the input strings instead of generating every possible substring.