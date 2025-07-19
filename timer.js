const screen = document.getElementById("screen");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    screen.value += button.textContent;
  });
});

equal.addEventListener("click", () => {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
});

clear.addEventListener("click", () => {
  screen.value = " ";
});
