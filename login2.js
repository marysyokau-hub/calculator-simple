

const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");


function showModal(message){
  modalMessage.innerText = message;
  modal.style.display = "flex";
}


closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});


function handleLogin() {
  let name = nameInput.value.trim();
  let password = passwordInput.value.trim();

  let correctName = "mary";
  let correctPassword = "2027";

  if (name === "" || password === "") {
    showModal("Please fill in all fields");

  } else if (name === correctName && password === correctPassword) {
    showModal("Login successful");

  } else {
    showModal("Denied");
  }
}


loginBtn.addEventListener("click", handleLogin);


document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleLogin();
  }
});