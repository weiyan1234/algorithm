class Differencesss {
  private diff: number[];
  constructor(nums: number[]) {
    this.diff = new Array(nums.length).fill(0);
    this.diff[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1];
    }
  }
  public add(i: number, j: number, value: number) {
    this.diff[i] = this.diff[i] + value;

    if (j + 1 < this.diff.length) {
      this.diff[j + 1] = this.diff[j + 1] - value;
    }
  }
  public result() {
    let res = new Array(this.diff.length);
    res[0] = this.diff[0];
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = res[i - 1] + this.diff[i];
    }
    return res;
  }
}
function corpFlightBookings(bookings: number[][], n: number): number[] {
  let flight = new Array(n).fill(0);
  const diffObject = new Differencesss(flight);
  for (const booking of bookings) {
    let i = booking[0] - 1;
    let j = booking[1] - 1;
    let value = booking[2];
    diffObject.add(i, j, value);
  }
  let result = diffObject.result();
  return result;
}
const finalResult = corpFlightBookings(
  [
    [1, 2, 10],
    [2, 3, 20],
    [2, 5, 25],
  ],
  5
);
