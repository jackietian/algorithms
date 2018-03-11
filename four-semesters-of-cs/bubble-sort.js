
function bubbleSort(nums) {
  for(let i = 0; l = nums.length, i< l; i++) {
    for(let j = i; j < l; j ++) {
      if(nums[i] < nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

let nums = [ 10, 5, 3, 8, 2, 6, 4, 7, 9, 1 ];
console.log(bubbleSort(nums));
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
