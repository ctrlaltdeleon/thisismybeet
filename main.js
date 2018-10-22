// User using keyboard
function playByKeyboard(e) {
  // Take the input with "e" and set the audio variable equal to audio[data-key=USER_INPUT]
  // This will take care of the button music itself
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // Take the input with "e" and set the key variable equal to div[data-key=USER_INPUT]
  // This will take care of the button animation itself
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // Ensures when button is activated, the sound byte starts from the beginning
  audio.currentTime = 0;
  // Play the sound!
  audio.play();
  // Animation for the button starts
  key.classList.add("playing");
}

// User using mouse or touch
function playByClick(e) {
  // Get the attribute of the object clicked
  const keyCode = this.getAttribute("data-key");
  // Transform the input into readable input for the document.querySelector
  // Take the input with "e" and set the audio variable equal to audio[data-key=USER_INPUT]
  // This will take care of the button music itself
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  // Take the input with "e" and set the key variable equal to div[data-key=USER_INPUT]
  // This will take care of the button animation itself
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  // Ensures when button is activated, the sound byte starts from the beginning
  audio.currentTime = 0;
  // Play the sound!
  audio.play();
  // Animation for the button starts
  key.classList.add("playing");
}

// Smooth transition between keys
function removeTransition(e) {
  if (e.propertyName !== "transform") return undefined;
  e.target.classList.remove("playing");
}

// Listeners for the user
// Find all elements in the document with a class "key"
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
keys.forEach(key => key.addEventListener("click", playByClick));
window.addEventListener("keydown", playByKeyboard);
