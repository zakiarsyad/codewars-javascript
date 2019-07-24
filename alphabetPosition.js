function alphabetPosition(text) {
  let result = "";
  let arr = text.split("");
  let dict = "abcdefghijklmnopqrstuvwxyz";
  let newArr = [];

  for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < dict.length; b++) {
      if (arr[a] === dict[b] || arr[a] === dict[b].toUpperCase()) {
        newArr.push(arr[a]);
        break;
      }
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < dict.length; j++) {
      if (newArr[i] === dict[j] || newArr[i] === dict[j].toUpperCase()) {
        newArr[i] = j + 1;
        break;
      }
    }
  }

  return newArr.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
