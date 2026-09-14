# Palindrome Checker

A simple JavaScript problem that checks whether a given string is a palindrome while ignoring spaces, punctuation, special characters, and letter casing.

## Problem Overview

The goal is to determine whether a string reads the same forward and backward.

Before checking the string, we need to:

- Convert all letters to lowercase.
- Remove spaces.
- Remove punctuation.
- Remove special characters.
- Keep only letters and numbers.

The function returns `true` if the cleaned string is a palindrome and `false` otherwise.

## Solution

```js
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    return cleaned === cleaned.split("").reverse().join("");
}
```

## Examples

### Example 1

```js
isPalindrome("madam");
// true
```

### Example 2

```js
isPalindrome("A man, a plan, a canal: Panama");
// true
```

After cleaning the string:

```text
amanaplanacanalpanama
```

Its reversed version is also:

```text
amanaplanacanalpanama
```

So the function returns `true`.

### Example 3

```js
isPalindrome("hello");
// false
```

Because:

```text
hello !== olleh
```

## How It Works

First, the input string is converted to lowercase:

```js
str.toLowerCase()
```

Then a regular expression removes everything except lowercase letters and numbers:

```js
.replace(/[^a-z0-9]/g, "")
```

The cleaned string is reversed using:

```js
cleaned.split("").reverse().join("")
```

Finally, the original cleaned string is compared with its reversed version.

```js
return cleaned === cleaned.split("").reverse().join("");
```

If both are equal, the function returns `true`. Otherwise, it returns `false`.

## Test Cases

```js
console.log(isPalindrome("madam"));
// true

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// true

console.log(isPalindrome("hello"));
// false

console.log(isPalindrome("RaceCar"));
// true

console.log(isPalindrome("12321"));
// true
```

## Complexity

Time Complexity: `O(n)`

The function processes the string and reverses it, both of which take linear time.

Space Complexity: `O(n)`

Additional strings and arrays are created while cleaning and reversing the input.

## Topics

- JavaScript
- Strings
- Regular Expressions
- Arrays
- `split()`
- `reverse()`
- `join()`
- Problem Solving