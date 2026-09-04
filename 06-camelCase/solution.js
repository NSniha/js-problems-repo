function convertToCamelCase(sentence) {
    const cleanedSentence = sentence.trim().toLowerCase();

    if (cleanedSentence === "") {
        return "";
    }

    const words = cleanedSentence.split(/\s+/);

    return words
        .map((word, index) => {
            if (index === 0) {
                return word;
            }

            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join("");
}