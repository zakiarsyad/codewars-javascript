function spinWords(str) {
  let splited = str.split(" ");

  for (let i = 0; i < splited.length; i++) {
    let reversed = "";
    if (splited[i].length >= 5) {
      for (let j = splited[i].length - 1; j >= 0; j--) {
        reversed += splited[i][j];
      }
      splited[i] = reversed;
    }
  }

  return splited.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
