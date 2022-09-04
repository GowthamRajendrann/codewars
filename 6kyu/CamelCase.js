// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

//My solution
String.prototype.camelCase = function () {
  return this.trim().length === 0
    ? ""
    : this.trim()
        .split(" ")
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join("");
};
//Best Solution
String.prototype.camelCase=function(){
    return this.split(' ').map(function(word){
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join('');
 }