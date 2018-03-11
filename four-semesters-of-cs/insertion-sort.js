function insertionSort (nums) {
  for(let i = 0; l = nums.length, i< l; i++) {
    for(let j = 0; j< l; j++) {
      if(nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  return nums;
}

let nums = [ 10, 5, 3, 8, 2, 6, 4, 7, 9, 1 ];
console.log(insertionSort(nums));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
