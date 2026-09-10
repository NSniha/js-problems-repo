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

console.log(classifyPassword("Password1!")); // Strong
console.log(classifyPassword("pass123"));    // Medium
console.log(classifyPassword("abc"));        // Weak