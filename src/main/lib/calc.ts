
export function sum(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

export function average(nums: number[]): number {
  if (nums.length === 0) return 0;
  return sum(nums) / nums.length;
}

export function increment(n: number): number {
  return n + 1;
}
