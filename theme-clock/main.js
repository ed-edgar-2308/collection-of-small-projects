const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setTime();

setInterval(setTime, 1000);

$(".toggle").addEventListener("click", (e) => {
  const html = $("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const amOrPm = hours >= 12 ? "PM" : "AM";

  $(".hour").style.transform = `translate(-50%, -100%) rotate(
    ${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
  $(".minute").style.transform = `translate(-50%, -100%) rotate(
    ${scale(minutes, 0, 59, 0, 360)}deg)`;
  $(".second").style.transform = `translate(-50%, -100%) rotate(
    ${scale(seconds, 0, 59, 0, 360)}deg)`;

  $(".time").innerHTML = `${hoursForClock} :
  ${minutes < 10 ? `0${minutes}` : minutes} :
  ${seconds < 10 ? `0${seconds}` : seconds} ${amOrPm}`;

  $(
    ".date"
  ).innerHTML = `${DAYS[day]}, ${MONTHS[month]} <span class="circle">${date}</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
