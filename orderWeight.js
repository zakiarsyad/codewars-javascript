function orderWeight(strng) {
  // scoring weight
  let arrWeight = strng.split(" ");
  let tempResult = [];
  let result = [];

  arrWeight.sort((a, b) => a - b);
  // console.log(arrWeight);

  for (let i = 0; i < arrWeight.length; i++) {
    let tempSumOfWeight = 0;
    for (let j = 0; j < arrWeight[i].length; j++) {
      tempSumOfWeight += Number(arrWeight[i][j]);
    }

    tempResult.push([i, tempSumOfWeight, arrWeight[i]]);
  }

  // console.log(tempResult);

  // sort weight
  for (let k = 0; k < tempResult.length; k++) {
    let tempSort;
    for (let l = 0; l < tempResult.length; l++) {
      if (tempResult[k][1] < tempResult[l][1]) {
        tempSort = tempResult[k];
        tempResult[k] = tempResult[l];
        tempResult[l] = tempSort;
      }

      if (
        tempResult[k][1] === tempResult[l][1] &&
        tempResult[k][2] < tempResult[l][2]
      ) {
        tempSort = tempResult[k];
        tempResult[k] = tempResult[l];
        tempResult[l] = tempSort;
      }
    }
  }

  // console.log(tempResult);

  // sort result
  for (let m = 0; m < tempResult.length; m++) {
    result.push(arrWeight[tempResult[m][0]]);
  }

  return result.join(" ");
}

// console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); //11 11 2000 10003 22 123 1234000 44444444 9999
