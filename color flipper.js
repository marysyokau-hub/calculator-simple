const button = document.getElementById("btn");
const colorText = document.getElementById("color");

// HEX characters
const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

button.addEventListener("click", function() {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }

    document.body.style.backgroundColor = hexColor;
    colorText.textContent = hexColor;
});