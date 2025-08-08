function addEndConditionForBubbleSort(num: number[]) {
  const numLength = num.length;
  let sortIndex = 0;
  let swapFlag = false;
  while (sortIndex < numLength) {
    for (let i = numLength; i > sortIndex; i--) {
      if (num[i] < num[i - 1]) {
        [num[i - 1], num[i]] = [num[i], num[i - 1]];
        swapFlag = true;
      }
    }
    console.log('swapFlag', swapFlag);
    if (!swapFlag) {
      return;
    }
    sortIndex++;
  }
}

// const nums = [1,2,3,4,5,6,7,8,9];
const nums = [3, 4, 1, 5, 9, 2, 1, 6];

addEndConditionForBubbleSort(nums);

console.log("addEndConditionForBubbleSort", nums);
