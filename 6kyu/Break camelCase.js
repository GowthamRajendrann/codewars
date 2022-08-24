// Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//My Solution
function solution(string) {
  let t = [];
  string.split("").forEach((item) => {
    if (item.charCodeAt() <= 90) t.push(" ");
    t.push(item);
  });
  return t.join("");
}
console.log(solution("camelCasingTest"));
