// implement Math.sqrt

function sqrt(x) {
  let isGoodEnough = function(guess) {
    return Math.abs(guess * guess - x) < 0.01;
  }

  let improver = function(guess) {
    return ( guess + x/guess ) / 2;
  }

  let sqrtIterator = function(guess) {
    return isGoodEnough(guess)? guess : sqrtIterator(improve(guess));
  }

  return sqrtIterator(1.0);
}

sqrt(2);//1.4166666666666665
sqrt(3);//1.7321428571428572
