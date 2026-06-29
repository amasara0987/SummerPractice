// 1) Set the target date. Change the year if needed.
// Avurudu is around April 14. Format: "Month Day, Year HH:MM:SS"
const target = new Date("April 14, 2027 06:00:00").getTime();
// 2) Find the places on the page where numbers will appear
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("message");
// 3) This function runs every second
function updateTimer() {
 const now = new Date().getTime();
 const distance = target - now; // milliseconds left
 if (distance < 0) {
 clearInterval(timer);
 messageEl.textContent = "Subha Aluth Avuruddak! Happy New Year!";
 return;
 }
 // Convert milliseconds into days/hours/minutes/seconds
 const days = Math.floor(distance / (1000 * 60 * 60 * 24));
 const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 const seconds = Math.floor((distance % (1000 * 60)) / 1000);
 // Show the numbers on the page
 daysEl.textContent = days;
 hoursEl.textContent = hours;
 minutesEl.textContent = minutes;
 secondsEl.textContent = seconds;
}
updateTimer(); // run once immediately
const timer = setInterval(updateTimer, 1000); // then every 1 second