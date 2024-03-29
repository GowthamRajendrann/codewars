// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  return s.split(" ").reduce((acc, item) => {
    if (item.length < acc) return item.length;
    return acc;
  }, Infinity);
}
