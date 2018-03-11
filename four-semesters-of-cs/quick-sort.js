function quickSort(nums) {
  if(nums.length < 2) {
    return nums;
  }

  let pivot = nums[nums.length-1];
  let left = [];
  let right = [];

  for(let i = 0; i< nums.length; i++) {
    if(nums[i] < pivot) {
      left.push(nums[i]);
    }

    if(nums[i] > pivot) {
      right.push(nums[i]);
    }

  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let nums = [ 10, 5, 5, 3, 8, 2, 6, 4, 7, 9, 1 ];
console.log(quickSort(nums));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// o(nlogn)
