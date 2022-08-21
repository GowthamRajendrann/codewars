// Sort the odd
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//My Solution
function sortArray(array) {
    let oddArray = array.filter((item)=>item%2 !== 0).sort((a,b)=>a-b)
    let evenIn =array.reduce((acc,item,index)=>{
      if(item%2 === 0){
        return [...acc,[item,index]]
      }
      return acc
    },[])
    for(item of evenIn){
      oddArray.splice(item[1],0,item[0])
    }
    return oddArray
  }


//Best Solution
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }