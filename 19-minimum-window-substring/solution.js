function minWindowSubstring(source, target) {
  if (
    source.length === 0 ||
    target.length === 0 ||
    target.length > source.length
  ) {
    return "";
  }

  const requiredCount = new Map();

  for (const char of target) {
    requiredCount.set(
      char,
      (requiredCount.get(char) || 0) + 1
    );
  }

  const windowCount = new Map();

  const required = requiredCount.size;
  let formed = 0;

  let left = 0;

  let bestStart = 0;
  let bestLength = Infinity;

  for (let right = 0; right < source.length; right++) {
    const rightChar = source[right];

    windowCount.set(
      rightChar,
      (windowCount.get(rightChar) || 0) + 1
    );

    if (
      requiredCount.has(rightChar) &&
      windowCount.get(rightChar) === requiredCount.get(rightChar)
    ) {
      formed++;
    }

    while (left <= right && formed === required) {
      const currentLength = right - left + 1;

      if (currentLength < bestLength) {
        bestLength = currentLength;
        bestStart = left;
      }

      const leftChar = source[left];

      windowCount.set(
        leftChar,
        windowCount.get(leftChar) - 1
      );

      if (
        requiredCount.has(leftChar) &&
        windowCount.get(leftChar) < requiredCount.get(leftChar)
      ) {
        formed--;
      }

      left++;
    }
  }

  if (bestLength === Infinity) {
    return "";
  }

  return source.slice(
    bestStart,
    bestStart + bestLength
  );
}