# Classify Password Strength

This project solves a JavaScript problem where a password is classified as `Weak`, `Medium`, or `Strong` based on its length and the types of characters it contains.

## Problem Overview

The function checks whether a password contains:

- Uppercase letters
- Lowercase letters
- Digits
- Special characters

It then determines the password strength according to the required conditions.

## Strength Rules

### Strong

A password is `Strong` when:

- Length is at least 8 characters.
- Contains an uppercase letter.
- Contains a lowercase letter.
- Contains a digit.
- Contains a special character from `!@#$%^&*`.

### Medium

A password is `Medium` when:

- Length is at least 6 characters.
- At least two of the four character-type conditions are satisfied.

### Weak

Any password that does not satisfy the `Strong` or `Medium` requirements is classified as `Weak`.

## Solution

```js
function classifyPassword(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    const matchedConditions = [
        hasUppercase,
        hasLowercase,
        hasDigit,
        hasSpecial
    ].filter(Boolean).length;

    if (
        password.length >= 8 &&
        hasUppercase &&
        hasLowercase &&
        hasDigit &&
        hasSpecial
    ) {
        return "Strong";
    }

    if (password.length >= 6 && matchedConditions >= 2) {
        return "Medium";
    }

    return "Weak";
}
```

## Example

```js
console.log(classifyPassword("Password1!"));
// Strong

console.log(classifyPassword("pass123"));
// Medium

console.log(classifyPassword("abc"));
// Weak
```

## How It Works

Regular expressions are used to check whether the password contains uppercase letters, lowercase letters, digits, and special characters.

The number of matched character-type conditions is then counted.

The function checks the `Strong` condition first because a strong password also satisfies the requirements of a medium password.

If the strong requirements are not met, the function checks the medium requirements.

Otherwise, it returns `Weak`.

## Topics

- JavaScript
- Strings
- Regular Expressions
- Conditionals
- Arrays
- Problem Solving