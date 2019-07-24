function sumTwoSmallestNumbers(numbers) {
  return (
    numbers.sort((a, b) => b - a)[numbers.length - 1] +
    numbers.sort((a, b) => b - a)[numbers.length - 2]
  );
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
