const currentDay = document.getElementById("currentDayOfTheWeek");
const currentUTCTime = document.getElementById("currentUTCTime");

// const currentUTCTimeInMilliseconds = new Date().getTime();
// const dayTime = new Date(currentUTCTimeInMilliseconds);

// const hours = dayTime.getUTCHours();
// const minutes = dayTime.getUTCMinutes();
// const seconds = dayTime.getUTCSeconds();
// const milliseconds = dayTime.getUTCMilliseconds();

// const formattedTime = `${(hours + 1).toString().padStart(2, "0")}:${minutes
//   .toString()
//   .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
//   .toString()
//   .padStart(2, "0")}`;
// console.log(formattedTime);
const currentUTCTimeInMilliseconds = Date.now();
currentUTCTime.innerHTML = currentUTCTimeInMilliseconds;
