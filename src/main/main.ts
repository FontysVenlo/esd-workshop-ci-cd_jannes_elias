import { increment } from "./lib/calc";

const display = document.getElementById("display") as HTMLInputElement;
let current = "";

document.querySelectorAll<HTMLButtonElement>(".calc button").forEach((btn) => {
  if (btn.id === "clear") {
    btn.addEventListener("click", () => (display.value = current = ""));
  } else if (btn.textContent === "=") {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(current) as number;
      display.value = String(result);
      current = String(result);
    } catch {
      display.value = "Error";
      current = "";
    }
  } else {
    btn.addEventListener("click", () => {
      current += btn.textContent ?? "";
      display.value = current;
    });
  }
});

// Easter egg: show increment usage
console.log("Increment(41) =", increment(41));
