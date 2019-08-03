function fpb(angka1, angka2) {
  var factor1 = [];
  var indexOfFactor1 = 0;
  var factor2 = [];
  var indexOfFactor2 = 0;

  // cari faktor dari angka 1
  for (var i = 1; i < angka1; i++) {
    if (angka1 % i === 0) {
      factor1[indexOfFactor1] = i;
      indexOfFactor1++;
    }
  }

  // cari faktor dari angka 2
  for (var j = 1; j < angka2; j++) {
    if (angka2 % j === 0) {
      factor2[indexOfFactor2] = j;
      indexOfFactor2++;
    }
  }

  // banding kan faktor
  var sameFactors = [];
  var indexOfSameFactors = 0;

  for (var k = 0; k < factor1.length; k++) {
    for (var l = 0; l < factor2.length; l++) {
      if (factor1[k] === factor2[l]) {
        sameFactors[indexOfSameFactors] = factor1[k];
        indexOfSameFactors++;
      }
    }
  }

  // cari angka terbesar
  var fpb = sameFactors[0];

  for (var m = 0; m < sameFactors.length - 1; m++) {
    if (sameFactors[m] < sameFactors[m + 1]) {
      fpb = sameFactors[m + 1];
    }
  }

  return fpb;
}

function mixedFraction(s) {
  let arr = s.split("/");
  let number = Math.floor(arr[0] / arr[1]);
  arr.splice(1, 0, arr[0] % arr[1]);

  let factor = fpb(arr[1], parseInt(arr[2]));

  arr[1] = arr[1] / factor;
  arr[2] = arr[2] / factor;

  if (arr.length === 1) {
    return `${number}`;
  } else {
    return `${number} ${arr[1]}/${arr[2]}`;
  }
}

console.log(mixedFraction("42/9")); // '4 2/3'
console.log(mixedFraction("6/3")); // '2'
// console.log(mixedFraction("1/1")); // '1'
// console.log(mixedFraction("11/11")); // '1'
// console.log(mixedFraction("4/6")); // '2/3'
// console.log(mixedFraction("0/18891")); // '0'
// console.log(mixedFraction("-10/7")); // '-1 3/7'
// console.log(mixedFraction("-22/-7")); // '3 1/7'
// console.log(mixedFraction("0/0"));
// console.log(mixedFraction("3/0"));
