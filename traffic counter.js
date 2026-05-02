// Load saved value
let count = localStorage.getItem("trafficCount");

if (count === null) {
  count = 0;
} else {
  count = parseInt(count);
}

// Display on page
updateDisplay();

// Increase
function increase() {
  count++;
  saveAndUpdate();
}

// Decrease
function decrease() {
  if (count > 0) {
    count--;
    saveAndUpdate();
  }
}

// Reset
function reset() {
  count = 0;
  saveAndUpdate();
}

// Save + Update UI
function saveAndUpdate() {
  localStorage.setItem("trafficCount", count);
  updateDisplay();
}

// Update display
function updateDisplay() {
  document.getElementById("count").innerText = count;
}