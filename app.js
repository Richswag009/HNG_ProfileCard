const currentDay = document.getElementById("currentDayOfTheWeek");
const currentUTCTime = document.getElementById("currentUTCTime");
const date = new Date();
let dayNumber = date.getDay();
// let dayTime = date.getTime();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayOfTheWeek = daysOfWeek[dayNumber];
currentDay.innerHTML = currentDayOfTheWeek;

const currentUTCTimeInMilliseconds = new Date().getTime();
const dayTime = new Date(currentUTCTimeInMilliseconds);
const hours = dayTime.getUTCHours();
const minutes = dayTime.getUTCMinutes();
const seconds = dayTime.getUTCSeconds();

// Create a formatted string
const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
  .toString()
  .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

// console.log(formattedDate);
currentUTCTime.innerHTML = formattedTime;
