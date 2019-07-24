function pigIt(str) {
  //Code here
  let result = [];
  let arr = str.split(" ");
  let isAlphabet;

  for (let i = 0; i < arr.length; i++) {
    let tempStr = "";
    for (let j = 1; j < arr[i].length; j++) {
      tempStr += arr[i][j];
    }

    isSymbol = arr[i].match(/[^a-z]/gi);

    if (isSymbol) {
      tempStr += arr[i][0];
    } else {
      tempStr += arr[i][0] + "ay";
    }

    result.push(tempStr);
  }

  return result.join(" ");
}

// console.log(pigIt("Pig latin is cool"));
// console.log(pigIt("Quis custodiet ipsos custodes ?"));
console.log(pigIt("O tempora o mores !"));
