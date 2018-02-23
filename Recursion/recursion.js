// a method calls itself
let tracker = 0;
let callMe = function() {
  if(tracker === 3){
    return 'loops';
  }
  tracker++;
  console.log('run times of ', tracker);
  return callMe();
}

console.log(callMe()); // return loops;

// loop n times 
let loopNTimes = function(n){
  console.log('n equals ', n);

  if(n <= 1) {
    return 'complete';
  }

  return loopNTimes(n-1);
}

console.log(loopNTimes(3));
