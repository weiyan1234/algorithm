function bubbleSort(nums: number[]) {
  const length = nums.length;
  let sortedIndex = 0;
  while (sortedIndex < length) {
    let minIndex = sortedIndex;
    for (let i = sortedIndex + 1; i < length; i++) {
      console.log("sortedIndex", sortedIndex);
      console.log("i", i);
      if (nums[i] < nums[minIndex]) {
        minIndex = i;
      }
    }
    let minValue = nums[minIndex];
      //将sortedIndex到minIndex的值整体向后一位
    for (let i = minIndex; i > sortedIndex; i--) {
      nums[i] = nums[i - 1];
    }
    nums[sortedIndex] = minValue;
    // 第二种方法将minIndex元素插入sortedIndex位置
    // nums.splice(minIndex,1);
    // nums.splice(sortedIndex, 0, minValue);
    console.log('nums', nums);
    sortedIndex++;
  }
}

const nums1 = [3, 4, 1, 5, 9, 2, 1, 6];

const bubbleSortedNum = bubbleSort(nums1);

console.log("bubbleSortedNum", nums1);
