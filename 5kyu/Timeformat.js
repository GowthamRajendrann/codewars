//My Solution
function humanReadable(s) {
  if (s < 60) {
    return "00:00:" + String(s).padStart(2, 0);
  } else if (s < 3600) {
    return (
      "00:" +
      String(Math.floor(s / 60)).padStart(2, 0) +
      ":" +
      String(Math.floor(s % 60)).padStart(2, 0)
    );
  } else {
    let hh = s / 3600;
    let bal = s % 3600;
    return (
      String(Math.floor(hh)).padStart(2, 0) +
      ":" +
      String(Math.floor(bal / 60)).padStart(2, 0) +
      ":" +
      String(Math.floor(bal % 60)).padStart(2, 0)
    );
  }
}

//Best Solution
function humanReadable(seconds) {
  var pad = function (x) {
    return x < 10 ? "0" + x : x;
  };
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ":" +
    pad(parseInt((seconds / 60) % 60)) +
    ":" +
    pad(seconds % 60)
  );
}

//2nd Best Solution
function humanReadable(seconds) {
  var hours = parseInt(seconds / 3600);
  var minutes = parseInt(seconds / 60) % 60;
  var seconds = seconds % 60;

  var pad = function (val) {
    return val < 10 ? "0" + val : val;
  };

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}
//3rd best
function humanReadable(seconds) {
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map(function (v) {
      v = Math.floor(v).toString();
      return v.length == 1 ? "0" + v : v;
    })
    .join(":");
}
