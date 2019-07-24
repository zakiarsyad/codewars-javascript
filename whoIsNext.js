function whoIsNext(names, r) {
  // let double = 1;
  // let count = 0;
  // let loop = true;

  // jika lebih dari 5
  // for (let a = 0; loop === true; a++) {
  //   for (let i = 0; i < names.length; i++) {
  //     for (let j = 0; j < double; j++) {
  //       count++;
  //       if (count === r) {
  //         loop = false;
  //         return `${names[i]}`;
  //       }
  //     }
  //   }
  //   double *= 2;
  // }

  let loop = true;
  let double = 1;
  let lastLoopIndex = names.length;
  let totalPerLoop = double * names.length;
  let firstLoopIndex = 1;

  while (loop) {
    if (lastLoopIndex >= r) loop = false;
    else {
      double *= 2;
      totalPerLoop = double * names.length;
      firstLoopIndex = lastLoopIndex + 1;
      lastLoopIndex += totalPerLoop;
    }
  }

  let leftCola = r - firstLoopIndex;

  return names[leftCola / double];
}

let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
console.log(whoIsNext(names, 52));

/*
  
    1  1  1  1  1   =>   5
    2  2  2  2  2   =>  10
    4  4  4  4  4   =>  20
    8  8  8  8  8   =>  40
   16 16 16 16 16   =>  80
   32 32 32 32 32   => 160
  
    1  2  3  4  5   =>   5
    7  9 11 13 15   =>  15
   19 23 27 31 35   =>  35
   43 51 59 67 72   =>  75
  
  
  
  */
