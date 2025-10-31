import { increment } from "./lib/calc";

const display = document.getElementById("display") as HTMLInputElement;
let current = "";

document.querySelectorAll<HTMLButtonElement>(".calc button").forEach((btn) => {
  const label = btn.textContent?.trim();  // <-- trim fixes "=" detection

  if (btn.id === "clear") {
    btn.addEventListener("click", () => {
      current = "";
      display.value = "";
    });
  }
  else if (label === "=") {
    btn.addEventListener("click", () => {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(current) as number;
        display.value = String(result);
        current = String(result);
      } catch {
        display.value = "Error";
        current = "";
      }
    });
  }
  else {
    btn.addEventListener("click", () => {
      current += label ?? "";
      display.value = current;
    });
  }
});

// Easter egg so calc.ts stays in use
console.log("Increment(41) =", increment(41));

