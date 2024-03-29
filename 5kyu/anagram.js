// Wheres my anagram at?
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

//My solution
function anagrams(word, words) {
  let ana = [];
  for (w of words) {
    let k = w.split("").filter((i) => {
      return w.split(i).length - 1 === word.split(i).length - 1;
    });
    if (k.length === w.length) {
      ana.push(k.join(""));
    }
  }
  return ana;
}

//best solution
function anagrams(a, b) {
  return b.filter((w) => "" + [...a].sort() === "" + [...w].sort());
}

String.prototype.sort = function () {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function (x) {
    return x.sort() === word.sort();
  });
}
