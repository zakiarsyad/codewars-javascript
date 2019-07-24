function towerBuilder(nFloors) {
  let result = [];
  for (let i = 0; i < nFloors; i++) {
    let draw = "";
    for (let j = 0; j < nFloors * 2 - 1; j++) {
      if (i + j >= nFloors - 1 && j - i < nFloors) draw += "*";
      //   else if (j - i < nFloors) draw += "*";
      else draw += " ";
    }
    result.push(draw);
  }
  return result;
}
console.log(towerBuilder(10));

/**


2 3
3 2
4 1
5 0
 */
