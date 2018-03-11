function mergeSort(nums) {
  if(nums.length < 2) {
    return nums;
  }
  let middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, nums.length);

  return merge(mergeSort(left), mergeSort(right));
}

// left [1,6,7]
// right [2,4,8]
function merge(left, right) {
  const results = [];
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      results.push(left.shift());
    }else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
  // results.concat(left, right);
}

let nums = [ 10, 5, 5, 3, 8, 2, 6, 4, 7, 9, 1 ];
console.log(mergeSort(nums));


// O(nlogn)
