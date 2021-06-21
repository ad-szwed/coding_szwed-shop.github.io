let modal = document.querySelector(".modal");

function modalOn() {
  if (modal.style.display = "none") {
    modal.style.display = "inline"
  }
}

function modalOff() {
  modal.style.display = "none"
}

document.querySelector("#about").addEventListener("click", () => {

  modalOn();

});

document.querySelector("#contact").addEventListener("click", () => {

  modalOn();

});

document.querySelector("#mission").addEventListener("click", () => {

  modalOn();

});

document.querySelector("#work").addEventListener("click", () => {

  modalOn();

});

modal.addEventListener("click", () => {
  if (modal.style.display === "inline") {
    modalOff();
  }
})

document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    console.log("esc pressed")
    modalOff();
  }
});