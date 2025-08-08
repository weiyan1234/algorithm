function sort(num: number[]) {
  const length = num.length;
  let sortedIndex = 0;
  while (sortedIndex < length) {
    let minIndex = sortedIndex;
    //找出sortedIndex后面的最小值。
    for (let i = sortedIndex + 1; i < length; i++) {
      console.log('i', i);
      if (num[i] < num[minIndex]) {
        minIndex = i;
        console.log('minIndex', minIndex);
      }
    }
    //交换sortedIndex值和sortedIndex后面的最小值。
    console.log('sortedIndex', sortedIndex);
    console.log('minIndex', minIndex);
    // const temp = num[sortedIndex];
    // num[sortedIndex] = num[minIndex];
    // num[minIndex] = temp;
    [num[sortedIndex], num[minIndex]] = [num[minIndex], num[sortedIndex]];
    console.log('num', num);
    sortedIndex++;
  }
}

let nums = [3, 4, 1, 5, 9, 2, 1, 6];
// @visualize shape nums rect
const sortedNum = sort(nums);

console.log("sortedNum", nums);
