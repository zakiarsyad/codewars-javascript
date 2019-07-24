function array_diff(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    isRemove = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        isRemove = true;
        break;
      }
    }

    if (!isRemove) {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(array_diff([3, 4], [3]));
console.log(array_diff([1, 8, 2], []));
