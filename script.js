// Variables that store the game state
let runs = 0;
let wickets = 0;
let balls = 0;
// Find the places on the page to show numbers
const runsEl = document.getElementById("runs");
const wicketsEl = document.getElementById("wickets");
const ballsEl = document.getElementById("balls");
// Show the current values on the page
function render() {
 runsEl.textContent = runs;
 wicketsEl.textContent = wickets;
 ballsEl.textContent = balls;
}
// Add runs when a button is clicked
function addRuns(n) {
 runs = runs + n;
 balls = balls + 1;
 render();
}
// Add a wicket (maximum 10)
function addWicket() {
 if (wickets < 10) {
 wickets = wickets + 1;
 balls = balls + 1;
 }
 render();
}
// Start a new game
function resetGame() {
 runs = 0;
 wickets = 0;
 balls = 0;
 render();
}
render(); // show 0 / 0 at the start
