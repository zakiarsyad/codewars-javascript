function high(x) {
  if (typeof x !== "string" || x.length === 0) {
    return "";
  }

  // cari separator
  let separator = x.match(/[^a-z]/gi);

  if (separator.length === x.length) {
    return "";
  }

  let xArr = x.split(separator[0]);
  let xScore = [];

  let dict = "abcdefghijklmnopqrstuvwxyz";

  // loop perkata
  for (let i = 0; i < xArr.length; i++) {
    // loop per karakter
    let wordScore = 0;
    for (let j = 0; j < xArr[i].length; j++) {
      // loop dict
      for (let k = 0; k < dict.length; k++) {
        // cek jika sama, ubah
        if (xArr[i][j] === dict[k]) {
          wordScore += k + 1;
          break;
        }
      }
    }
    xScore.push(wordScore);
  }

  // cari index score terbesar
  let highest = 0;
  let indexHighest;
  for (let l = 0; l < xScore.length; l++) {
    if (xScore[l] > highest) {
      highest = xScore[l];
      indexHighest = l;
    }
  }

  return xArr[indexHighest];
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high(""));
