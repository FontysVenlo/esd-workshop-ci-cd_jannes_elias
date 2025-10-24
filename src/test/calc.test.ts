
import { describe, it, expect } from "vitest";
import { sum, average, increment } from "../src/lib/calc";

describe("calc utils", () => {
  it("sum works", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([])).toBe(0);
  });

  it("average works with values", () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  it("average works with empty array", () => {
    expect(average([])).toBe(0);
  });

  it("increment works", () => {
    expect(increment(0)).toBe(1);
    expect(increment(41)).toBe(42);
  });
});
