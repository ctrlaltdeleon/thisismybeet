// User using keyboard
function playByKeyboard(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

// User using mouse
function playByClick(e) {
  const keyCode = this.getAttribute("data-key"); // Get the attribute of the object clicked
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

// Smooth transition between keys
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

// Listeners for the user
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
keys.forEach(key => key.addEventListener("click", playByClick));
window.addEventListener("keydown", playByKeyboard);
