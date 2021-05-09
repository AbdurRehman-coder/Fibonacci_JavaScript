/* This JavaScript program will find the Fibonacci number of any given number  */
// Find Fibonacci number with  Memoization
// Create memo objects 
const fib = (n, memo = {}) => {
// if n is present in memo[] object than return it...
if (n in memo) return memo[n];
// the first two number of fib are 1
if(n <= 2) return 1;
// otherwise calling a recursive call to fib
memo[n] = fib(n-1, memo) + fib(n-2, memo);
return memo[n];
};
console.log(fib(4));
console.log(fib(7));
console.log(fib(9));
console.log(fib(50)); // this will take very long time in //sample fib function, But in Memoization it take no times, Memoization is very fast...