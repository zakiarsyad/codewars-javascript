var sum_pairs = function(ints, s) {
  //your code here
  let result;

  for (let i = 0; i < ints.length; i++) {
    for (let j = 0; j < ints.length; j++) {
      if (i !== j && ints[i] + ints[j] === s) {
        result = [ints[i], ints[j]];
      }
    }
  }

  return result ? result : undefined;
};

l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l4 = [1, 2, 3, 4, 1, 0];
l5 = [10, 5, 2, 3, 7, 5];
l6 = [4, -2, 3, 3, 4];
l7 = [0, 2, 0];
l8 = [5, 9, 13, -3];

console.log(sum_pairs(l1, 8));
console.log(sum_pairs(l2, -6));
console.log(sum_pairs(l3, -7));
console.log(sum_pairs(l4, 2));
console.log(sum_pairs(l5, 10));
console.log(sum_pairs(l6, 8));
console.log(sum_pairs(l7, 0));
console.log(sum_pairs(l8, 10));
