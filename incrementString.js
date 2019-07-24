function incrementString(strng) {
  let string = strng.replace(/[0-9]/g, "");
  let number = strng.replace(/[a-zA-Z]/g, "");

  if (number.length) {
    //increase 1
    let num = Number(number);
    let nextNumber = num + 1;

    let digitZeroLeft = number.length - String(nextNumber).length;

    if (digitZeroLeft) {
      let addZero = "";
      for (let i = 0; i < digitZeroLeft; i++) {
        addZero += "0";
      }
      return string + addZero + String(nextNumber);
    } else {
      return string + String(nextNumber);
    }
  } else {
    return (strng += "1");
  }
}

console.log(incrementString("foobar000"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
