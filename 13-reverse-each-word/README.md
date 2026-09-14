# Reverse Each Word

A simple JavaScript problem that reverses every word in a sentence while keeping the original word order unchanged.

## Problem Overview

The goal is to reverse the characters of each individual word in a given string.

The words themselves must stay in the same order.

For example:

```text
Hello World
```

becomes:

```text
olleH dlroW
```

## Solution

```js
function reverseEachWord(str) {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}
```

## How It Works

First, the string is divided into individual words using:

```js
str.split(" ")
```

For example:

```text
"Hello World"
```

becomes:

```js
["Hello", "World"]
```

Next, `map()` processes each word separately:

```js
.map(word => word.split("").reverse().join(""))
```

Each word is:

1. Converted into an array of characters with `split("")`
2. Reversed with `reverse()`
3. Converted back into a string with `join("")`

Finally, all reversed words are joined together using a space:

```js
.join(" ")
```

## Examples

```js
reverseEachWord("Hello World");
// "olleH dlroW"
```

```js
reverseEachWord("JavaScript is fun");
// "tpircSavaJ si nuf"
```

```js
reverseEachWord("I love coding");
// "I evol gnidoc"
```

## Test Cases

```js
console.log(reverseEachWord("Hello World"));
// olleH dlroW

console.log(reverseEachWord("JavaScript is fun"));
// tpircSavaJ si nuf

console.log(reverseEachWord("I love coding"));
// I evol gnidoc
```

## Complexity

Time Complexity: `O(n)`

Space Complexity: `O(n)`

The function processes every character in the input string and creates new arrays and strings while reversing the words.

## Topics

- JavaScript
- Strings
- Arrays
- `split()`
- `map()`
- `reverse()`
- `join()`
- Problem Solving