function reverseEachWord(str) {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseEachWord("Hello World"));
// olleH dlroW

console.log(reverseEachWord("JavaScript is fun"));
// tpircSavaJ si nuf

console.log(reverseEachWord("I love coding"));
// I evol gnidoc