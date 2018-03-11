// " 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181"
function fibonacci(n) {
  if(n < 2) {
    return 1;
  }

  return fibonacci(n-1) + fibonacci(n-2);
}

// " 1 2 6 24 120 720 5040 40320 362880"
function factorial(n) {
  if(n < 2) {
    return 1;
  }

  return n * factorial(n-1);
}bu
