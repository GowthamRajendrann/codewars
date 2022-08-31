//Mexican Wave

//My Solution
function wave(str) {
  return str.split("").reduce((acc, item, index, arr) => {
    if (item.trim() === "") {
      return acc;
    }
    return [
      ...acc,
      arr.slice(0, index).join("") +
        arr[index].toUpperCase() +
        arr.slice(index + 1).join(""),
    ];
  }, []);
}

//Best Solution
var wave = (w) =>
  [...w]
    .map((a, i) => w.slice(0, i) + a.toUpperCase() + w.slice(i + 1))
    .filter((a) => a != w);
