function createPhoneNumber(numbers) {
  let firstCode = "";
  let secondCode = "";
  let thirdCode = "";

  for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
      firstCode += numbers[i];
    }
    if (i >= 3 && i < 6) {
      secondCode += numbers[i];
    }
    if (i >= 6) {
      thirdCode += numbers[i];
    }
  }

  return `(${firstCode}) ${secondCode}-${thirdCode}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
