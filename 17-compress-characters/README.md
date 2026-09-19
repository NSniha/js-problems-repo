# Compress Consecutive Characters

A JavaScript string manipulation problem that compresses consecutive repeated characters by replacing each repeated group with the character followed by its count.

A count is only included when a character appears more than once consecutively.

---

## Problem Overview

Given a string, compress consecutive repeated characters.

For example:

```javascript
compressCharacters("aaabbc");
```

returns:

```text
a3b2c
```

This is because:

```text
aaa → a3
bb  → b2
c   → c
```

Characters that appear only once should remain unchanged.

---

## Solution

```javascript
function compressCharacters(str) {
  if (str.length === 0) {
    return "";
  }

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1];

      if (count > 1) {
        result += count;
      }

      count = 1;
    }
  }

  return result;
}
```

---

## Approach

The solution scans the string from left to right while keeping track of consecutive repeated characters.

---

### Step 1: Handle an Empty String

First, check whether the string is empty.

```javascript
if (str.length === 0) {
  return "";
}
```

If there are no characters, there is nothing to compress.

---

### Step 2: Create Variables

We use:

```javascript
let result = "";
let count = 1;
```

`result` stores the compressed string.

`count` stores the number of consecutive occurrences of the current character.

The count starts at `1` because the first character already represents one occurrence.

---

### Step 3: Iterate Through the String

Start the loop at index `1`.

```javascript
for (let i = 1; i <= str.length; i++) {
```

At every step, compare:

```javascript
str[i]
```

with:

```javascript
str[i - 1]
```

JavaScript strings allow character access with numerical indexes such as `str[i]`.

---

### Step 4: Count Repeated Characters

If both characters are the same:

```javascript
if (str[i] === str[i - 1]) {
  count++;
}
```

increase the count.

For example, when processing:

```text
aaa
```

the count eventually becomes:

```text
3
```

---

### Step 5: Finish a Character Group

When the current character is different:

```javascript
else {
```

the previous group has finished.

First add the previous character:

```javascript
result += str[i - 1];
```

Then check whether the character occurred more than once:

```javascript
if (count > 1) {
  result += count;
}
```

This ensures that:

```text
aaa
```

becomes:

```text
a3
```

but:

```text
a
```

remains:

```text
a
```

instead of becoming:

```text
a1
```

Finally, reset the counter:

```javascript
count = 1;
```

---

## Why the Loop Uses `i <= str.length`

The loop is written as:

```javascript
for (let i = 1; i <= str.length; i++)
```

instead of:

```javascript
i < str.length
```

This allows the final group to be processed automatically.

When:

```javascript
i === str.length
```

then:

```javascript
str[i]
```

is outside the string.

It therefore does not match the previous valid character, causing the `else` block to run and process the final group.

---

## Step-by-Step Example

Consider:

```javascript
compressCharacters("aaabbc");
```

Initial values:

```text
result = ""
count = 1
```

### Processing `aaa`

The characters are equal, so the count increases:

```text
count = 3
```

When the next character changes from `a` to `b`, add:

```text
a3
```

Now:

```text
result = "a3"
```

---

### Processing `bb`

The two `b` characters are consecutive.

So:

```text
count = 2
```

When the next character becomes `c`, add:

```text
b2
```

Now:

```text
result = "a3b2"
```

---

### Processing `c`

`c` occurs only once.

So only the character is added:

```text
c
```

Final result:

```text
a3b2c
```

---

## Another Example

Input:

```javascript
compressCharacters("hello");
```

Character groups:

```text
h
e
ll
o
```

Compressed:

```text
h
e
l2
o
```

Result:

```text
hel2o
```

---

## Test Cases

```javascript
console.log(
  compressCharacters("aaabbc")
);
// a3b2c

console.log(
  compressCharacters("hello")
);
// hel2o

console.log(
  compressCharacters("abc")
);
// abc

console.log(
  compressCharacters("aaaa")
);
// a4

console.log(
  compressCharacters("aabbcc")
);
// a2b2c2

console.log(
  compressCharacters("a")
);
// a

console.log(
  compressCharacters("")
);
// ""
```

---

## Important Detail

Only consecutive duplicate characters are grouped.

For example:

```javascript
compressCharacters("ababa");
```

returns:

```text
ababa
```

It does not return a total frequency count such as:

```text
a3b2
```

because the identical characters are not next to each other.

---

## Time Complexity

### O(n)

The algorithm processes the input string once.

Here, `n` is the length of the string.

---

## Space Complexity

### O(n)

The compressed result is stored in a new string.

In the worst case, the output can have a size proportional to the input.

---

## Concepts Used

- JavaScript Strings
- String Indexing
- `String.length`
- `for` Loop
- Conditional Statements
- Counters
- String Concatenation
- Run-Length Encoding
- Edge Case Handling

---

## Project Structure

```text
04-compress-characters/
├── question.md
├── solution.js
└── README.md
```

---

## Expected Results

```javascript
compressCharacters("aaabbc");
// "a3b2c"

compressCharacters("hello");
// "hel2o"

compressCharacters("abc");
// "abc"

compressCharacters("");
// ""
```