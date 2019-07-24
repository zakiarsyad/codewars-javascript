function rot13(message) {
  let result = [];
  let arrMessage = message.split("");

  for (let i = 0; i < arrMessage.length; i++) {
    let newIndex;

    let index = arrMessage[i].charCodeAt();
    console.log(index);
    if ((index >= 65 && index <= 90) || (index >= 97 && index <= 122)) {
      if (arrMessage[i] === arrMessage[i].toLowerCase()) {
        if (index + 13 > 122) {
          newIndex = index + 13 - 26;
        } else {
          newIndex = index + 13;
        }
      } else if (arrMessage[i] === arrMessage[i].toUpperCase()) {
        if (index + 13 > 90) {
          newIndex = index + 13 - 26;
        } else {
          newIndex = index + 13;
        }
      }
    } else {
      newIndex = index;
    }

    result.push(String.fromCharCode(newIndex));
  }

  return result.join("");
}

console.log(rot13("test!+-"));
console.log(rot13("Test"));
