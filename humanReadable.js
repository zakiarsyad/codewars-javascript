function humanReadable(seconds) {
  // TODO
  let obj = {
    hours: "00",
    minutes: "00",
    seconds: "00"
  };

  let minutes = 60;
  let hours = 60 * minutes;

  if (seconds >= hours) {
    obj.hours = Math.floor(seconds / hours);
    seconds = seconds % hours;
  }

  if (seconds < hours && seconds >= minutes) {
    obj.minutes = Math.floor(seconds / minutes);
    seconds = seconds % minutes;
  }

  obj.seconds = seconds;

  for (let key in obj) {
    if (obj[key] < 10 && typeof obj[key] === "number") {
      obj[key] = `0${obj[key]}`;
    }
  }

  return `${obj.hours}:${obj.minutes}:${obj.seconds}`;
}

console.log(humanReadable(3600));
