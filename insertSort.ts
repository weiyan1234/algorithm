function insertSort(num: number[]) {
  const numLength = num.length;
  let sortIndex = 0;
  while (sortIndex < numLength) {
    for (let i = sortIndex; i > 0; i--) {
      if (num[i - 1] > num[i]) {
        [num[i - 1], num[i]] = [num[i], num[i - 1]];
      }
    }
    sortIndex++;
  }
}

const nums = [3, 4, 1, 5, 9, 2, 1, 6];

insertSort(nums);

console.log("insertSortNum", nums);
