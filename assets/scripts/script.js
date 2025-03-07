const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");
const actionButton = document.querySelector("#action-button");

window.onerror = function () {
  outputText.value = "";
  alertify.notify("Invalid data!", "error", 5);
  return true;
};

actionButton.addEventListener("click", function () {
  if (inputText.value == "") {
    alertify.notify("Enter some valid code!", "error", 5);
    return;
  }
  sendInputData(inputText.value);
});

function sendInputData(data) {
  data = alertify.evolver(`[${data}]`);
  outputText.value = generateMapping(data);
  alertify.notify("Successfully converted!", "success", 5);
}
