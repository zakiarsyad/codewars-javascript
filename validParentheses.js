function validParentheses(parens) {
  //TODO
  if (!parens || parens.length % 2 !== 0) {
    return false;
  }

  let arrParens = parens.split("");

  let isPaired;

  // loop parens
  for (let i = 0; i < arrParens.length; i++) {
    if (arrParens[i] === "(") {
      // cari close parens
      for (j = i + 1; j < arrParens.length; j++) {
        if (arrParens[j] === ")") {
          isPaired = true;
          arrParens.splice(j, 1);
          // i--;
          // j--;
          break;
        }
        isPaired = false;
      }
    }
  }

  return isPaired;
}

console.log(validParentheses("(())((()())())"));
console.log(validParentheses("())"));
