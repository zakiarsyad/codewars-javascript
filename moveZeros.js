var moveZeros = function(arr) {
  // TODO: Program me
  let tempZero = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      tempZero.push(arr.slice(i, i + 1));
      arr.splice(i, 1);
      i--;
    }
  }

  for (let j = 0; j < tempZero.length; j++) {
    for (let k = 0; k < tempZero[j].length; k++) {
      arr.push(tempZero[j][k]);
    }
  }

  return arr;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
