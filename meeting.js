function meeting(s) {
  let friends = s.toUpperCase().split(";");
  let friendsName = [];
  let result = "";

  for (let i = 0; i < friends.length; i++) {
    friendsName.push(friends[i].split(":"));
  }

  // sort lastName first, then firstName
  isUnsorted = true;
  while (isUnsorted) {
    isUnsorted = false;
    let tempSort;

    for (let j = 0; j < friendsName.length - 1; j++) {
      if (friendsName[j][1] > friendsName[j + 1][1]) {
        tempSort = friendsName[j];
        friendsName[j] = friendsName[j + 1];
        friendsName[j + 1] = tempSort;

        isUnsorted = true;
      }

      if (
        friendsName[j][1] === friendsName[j + 1][1] &&
        friendsName[j][0] > friendsName[j + 1][0]
      ) {
        tempSort = friendsName[j];
        friendsName[j] = friendsName[j + 1];
        friendsName[j + 1] = tempSort;

        isUnsorted = true;
      }
    }
  }

  for (let k = 0; k < friendsName.length; k++) {
    result += `(${friendsName[k][1]}, ${friendsName[k][0]})`;
  }

  return result;
}

let s =
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

console.log(meeting(s));
