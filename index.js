/* This JavaScript program will find the Fibonacci number of any given number  */

const fib = (n) => {
// first two position numbers are 1 in fib
if(n <= 2) return 1;
// otherwise calling a recursive call to fib
return fib(n-1) + fib(n-2);
};
console.log(fib(4));
console.log(fib(7));
console.log(fib(9));
console.log(fib(50)); // this will take very long time