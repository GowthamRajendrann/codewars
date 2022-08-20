// Split String
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// My Solution
function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    let t = str.substring(i, i + 2).padEnd(2, "_");
    result.push(t);
  }
  return result;
}
