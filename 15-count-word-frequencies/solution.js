function countWordFrequencies(sentence) {
  const words = sentence
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);

  const frequencies = {};

  for (const word of words) {
    frequencies[word] = (frequencies[word] || 0) + 1;
  }

  return frequencies;
}