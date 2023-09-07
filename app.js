const currentDay = document.getElementById("currentDayOfTheWeek");
const currentUTCTime = document.getElementById("currentUTCTime");
const date = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
currentDay.innerHTML = daysOfWeek[date.getDay()];

const currentUTCTimeInMilliseconds = new Date().getTime();
const dayTime = new Date(currentUTCTimeInMilliseconds);
const hours = dayTime.getUTCHours();
const minutes = dayTime.getUTCMinutes();
const seconds = dayTime.getUTCSeconds();
const milliseconds = dayTime.getUTCMilliseconds();

const formattedTime = `${(hours + 1).toString().padStart(2, "0")}:${minutes
  .toString()
  .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
  .toString()
  .padStart(2, "0")}`;
console.log(formattedTime);
currentUTCTime.innerHTML = formattedTime;


