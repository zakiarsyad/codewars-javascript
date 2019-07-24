function likes(names) {
  let name = "";
  let nameLeft = 0;
  if (names.length > 3) {
    nameLeft = names.length - 2;
  }

  for (let i = 0; i < names.length; i++) {
    if (names.length === 1) {
      name += names[i];
    } else if (names.length === 2) {
      if (i === names.length - 1) {
        name += " and " + names[i];
      } else {
        name += names[i];
      }
    } else if (names.length === 3) {
      if (i === names.length - 1) {
        name += " and " + names[i];
      } else if (i === 1) {
        name += ", " + names[i];
      } else {
        name += names[i];
      }
    } else if (names.length > 3) {
      if (i === 1) {
        name += ", " + names[i];
      } else if (i === 2) {
        name += ` and ${nameLeft} others`;
      } else if (i === 0) {
        name += names[i];
      }
    }
  }

  if (names.length === 1) {
    return `${name} likes this`;
  } else if (names.length === 0) {
    return `no one likes this`;
  } else {
    return `${name} like this`;
  }
}

console.log(likes(["Max"]));
