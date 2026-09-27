const button = document.querySelector("#myButton");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
    message.textContent = "Button clicked!";
});


const nameInput = document.querySelector("#nameInput");
const nameOutput = document.querySelector("#nameOutput");

nameInput.addEventListener("input", function () {
    nameOutput.textContent = "Hello, " + nameInput.value;
});