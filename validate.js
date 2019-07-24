function validate(password) {
  if (
    password.match(/[a-z]/g) &&
    password.match(/[A-Z]/g) &&
    password.match(/[0-9]/g) &&
    password.length >= 6 &&
    !password.match(/[^\w]/g)
  ) {
    return true;
  }
  return false;
}

console.log(validate("a2.d412"));
console.log(validate("djI38D55"));

// console.log(password.match(/[a-z]/g).length);
// console.log(password.match(/[A-Z]/g).length);
// console.log(password.length);
// console.log(password.match(/[0-9]/g).length);
