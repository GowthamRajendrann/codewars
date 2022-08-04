// Moving Zeros to the end
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//My Solution
function moveZeros(arr) {
  let zer = arr.filter((a) => a !== 0);
  let numOfZero = arr.length - zer.length;
  return [...zer, ...Array(numOfZero).fill(0)];
}
//Best Solution
var moveZeros = function (arr) {
  return arr.filter((val) => val !== 0).concat(arr.filter((val) => val === 0));
};
