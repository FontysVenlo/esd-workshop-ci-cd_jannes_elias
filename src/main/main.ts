
import { increment } from "./lib/calc";

const btn = document.getElementById("btn") as HTMLButtonElement;
const countEl = document.getElementById("count") as HTMLSpanElement;
let count = 0;

btn?.addEventListener("click", () => {
  count = increment(count);
  countEl.textContent = String(count);
});
