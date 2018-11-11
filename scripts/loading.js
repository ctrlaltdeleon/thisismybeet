// Wait till the body is done loading before letting the user see the content
function onReady(callback) {
  // Every 2000 milliseconds, do function checkReady()
  var intervalID = window.setInterval(checkReady, 2000);

  function checkReady() {
    // If the body is not undefined, no need to interval anymore
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalID);
      // callback - a function to be executed after another function has finished
      callback.call(this);
    }
  }
}

function show(id, value) {
  // If the value exists, show it, if not, don't show anything
  document.getElementById(id).style.display = value ? "block" : "none";
}

onReady(function() {
  // Show the website if it is ready
  show("page", true);
  // Show loading if website is not ready
  show("loading", false);
});
