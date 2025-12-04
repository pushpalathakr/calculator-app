let result = document.getElementById("result");

function add(value) {
  result.value += value;
}

function clearScreen() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

/* Keyboard support */
document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/.".includes(e.key)) {
    add(e.key);
  }
  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") del();
});


