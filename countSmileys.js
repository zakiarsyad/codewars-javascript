//return the total number of smiling faces in the array
function countSmileys(arr) {
  let validSmiles = { eyes: [":", ";"], noses: ["-", "~"], mouths: [")", "D"] };
  let count = 0;
  let tempArr = [];
  let lengthArr = arr.length;

  //loop smile
  for (var i = 0; i < lengthArr; i++) {
    var tempObj = {};
    let smile = arr[i];
    // loop characters
    for (var j = 0; j < smile.length; j++) {
      if (smile.length === 2) {
        // console.log("masuk smile length 2");

        tempObj = {
          eye: smile[0],
          mouth: smile[1]
        };
      } else if (smile.length === 3) {
        // console.log("masuk smile length 3");

        tempObj = {
          eye: smile[0],
          nose: smile[1],
          mouth: smile[2]
        };
      }
    }
    tempArr.push(tempObj);
    // break;
  }

  console.log(tempArr);

  return count;
}

console.log(countSmileys([":D", ":~)", ";~D", ":)"])); // 4
// console.log(countSmileys([])); // 0
// console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); // 2
