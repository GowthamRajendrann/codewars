// My solution that worked
function isIsogram(str) {
  strLower = str.toLowerCase();
  for (l of strLower) {
    i = strLower.indexOf(l);
    j = strLower.indexOf(l, ++i);
    if (j >= 0) {
      return false;
    }
  }
  return true;
}
/*Clever Solution*/
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
