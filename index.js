const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");
const digitalClock = document.getElementById("digitalClock");

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = ((hours % 12) + minutes / 60) * 30;

  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

  // Digital clock
  let ampm = hours >= 12 ? "PM" : "AM";
  let displayHour = hours % 12 || 12;
  let displayMin = minutes.toString().padStart(2, "0");
  let displaySec = seconds.toString().padStart(2, "0");

  digitalClock.innerText = `${displayHour}:${displayMin}:${displaySec} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();
