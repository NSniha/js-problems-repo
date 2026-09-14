function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("12321")); // true