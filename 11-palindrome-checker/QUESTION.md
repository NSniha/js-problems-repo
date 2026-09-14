# Palindrome Checker

## Problem Statement

Write a function named `isPalindrome(str)` that checks whether a given string is a palindrome.

A palindrome is a word, phrase, number, or sequence of characters that reads the same forward and backward.

While checking the string:

- Ignore uppercase and lowercase differences.
- Ignore spaces.
- Ignore punctuation marks.
- Ignore special characters.
- Consider only letters and numbers.

The function should return:

- `true` if the string is a palindrome.
- `false` if the string is not a palindrome.

## Examples

### Example 1

```text
Input: "madam"
Output: true
```

### Explanation

The word `"madam"` reads the same forward and backward.

```text
madam
madam
```

So the result is:

```text
true
```

---

### Example 2

```text
Input: "A man, a plan, a canal: Panama"
Output: true
```

### Explanation

After converting the string to lowercase and removing spaces and punctuation:

```text
amanaplanacanalpanama
```

The cleaned string reads the same forward and backward.

Therefore:

```text
true
```

---

### Example 3

```text
Input: "hello"
Output: false
```

### Explanation

```text
Original: hello
Reverse:  olleh
```

The strings are not the same.

Therefore:

```text
false
```

## Function Signature

```js
function isPalindrome(str) {
    // Your code here
}
```

## Expected Results

```js
isPalindrome("madam");
// true

isPalindrome("A man, a plan, a canal: Panama");
// true

isPalindrome("hello");
// false

isPalindrome("RaceCar");
// true

isPalindrome("12321");
// true
```

## Topics

- JavaScript
- Strings
- Regular Expressions
- Arrays
- String Methods
- Problem Solving