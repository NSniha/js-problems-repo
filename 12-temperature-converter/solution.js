function convertTemperature(value, unit) {
    let result;

    if (unit === "C") {
        result = (value * 9) / 5 + 32;
    } else {
        result = ((value - 32) * 5) / 9;
    }

    return Math.round(result * 100) / 100;
}

console.log(convertTemperature(0, "C")); // 32
console.log(convertTemperature(32, "F")); // 0
console.log(convertTemperature(100, "C")); // 212
console.log(convertTemperature(98.6, "F")); // 37