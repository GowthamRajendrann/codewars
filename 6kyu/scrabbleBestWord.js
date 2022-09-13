//Scrabble the best word

// You're playing to scrabble. But counting points is hard.

// You decide to create a little script to calculate the best possible value.

// The function takes two arguments :

// `points` : an array of integer representing for each letters from A to Z the points that it pays
// `words` : an array of strings, uppercase

// You must return the index of the shortest word which realize the highest score.
// If the length and the score are the same for two elements, return the index of the first one.

//My solution
function getBestWord(points, words) {
  let w = words
    .map((item) =>
      item
        .trim()
        .split("")
        .reduce((acc, i) => {
          return acc * getIndex(points, i);
        }, 1)
    )
    .map((score, index) => [words[index], score])
    .reduce(
      (a, it, ind) => {
        if (it[1] >= a[1]) {
          if (it[0].length < a[0].length) {
            return [...it, ind];
          }
          return [...it, ind];
        }
        return a;
      },
      ["", 0, 0]
    )[2];
  console.log(w, words);
  return w;
}

function getIndex(points, l) {
  return points[l.toUpperCase().charCodeAt() - 65];
}
//Best Solution

function getBestWord(points, words) {
  let wordValue = function (word) {
    return word
      .split("")
      .reduce((sum, letter) => sum + points[letter.charCodeAt() - 65], 0);
  };

  let best = words
    .slice()
    .sort((word1, word2) => word1.length - word2.length)
    .sort((word1, word2) => wordValue(word1) + 1 - wordValue(word2))
    .pop();

  return words.indexOf(best);
}
