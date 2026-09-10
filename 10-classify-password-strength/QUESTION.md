# Classify Password Strength

## Problem Statement

Given a password string, classify its strength as `"Weak"`, `"Medium"`, or `"Strong"` based on the following rules.

### Strong

A password is considered `"Strong"` if:

- Its length is at least 8 characters.
- It contains at least one uppercase letter.
- It contains at least one lowercase letter.
- It contains at least one digit.
- It contains at least one special character from:

```text
!@#$%^&*
```

### Medium

A password is considered `"Medium"` if:

- Its length is at least 6 characters.
- It satisfies at least two of the following four character-type conditions:
  - Contains an uppercase letter.
  - Contains a lowercase letter.
  - Contains a digit.
  - Contains a special character.

### Weak

A password is considered `"Weak"` if it does not meet the requirements for `"Strong"` or `"Medium"`.

## Examples

### Example 1

```text
Input: password = "Password1!"
Output: "Strong"
```

### Explanation

The password:

- Has at least 8 characters.
- Contains an uppercase letter.
- Contains lowercase letters.
- Contains a digit.
- Contains a special character.

Therefore, the password is `"Strong"`.

---

### Example 2

```text
Input: password = "pass123"
Output: "Medium"
```

### Explanation

The password has at least 6 characters and satisfies two character-type conditions:

- Lowercase letters
- Digits

Therefore, the password is `"Medium"`.

## Function Signature

```js
function classifyPassword(password) {
    // Your code here
}
```

## Expected Results

```js
classifyPassword("Password1!");
// "Strong"

classifyPassword("pass123");
// "Medium"

classifyPassword("abc");
// "Weak"
```

## Topics

- JavaScript
- Strings
- Conditionals
- Regular Expressions
- Problem Solving