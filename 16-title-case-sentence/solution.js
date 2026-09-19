function titleCaseSentence(str) {
  const words = str
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  return words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}