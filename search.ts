function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    console.log('middle', middle);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
      console.log('middle', middle);
    } else if (nums[middle] > target) {
      right = middle - 1;
      console.log('middle', middle);
    }
  }
  return -1;
}
search([-1,0,3,5,9,12],9);
