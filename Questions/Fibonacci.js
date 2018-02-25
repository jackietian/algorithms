function fibonacci(n) {
	let arr = [0,1];

	if( n <= 2 ) return 'N must be larger than 2';

	for( let i = 2; i < n; i++ ) {
  	arr[i] = arr[i-2] + arr[i-1];
  }

	return arr;
}

console.log(fibonacci(4)); // [0, 1, 1, 2]

console.log(fibonacci(5)); // [0, 1, 1, 2, 3]

console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]
