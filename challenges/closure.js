// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// Closure gives a nested/inner function access to an outer function's scope, when the function is created.  Since nestedFunction doesn't have the variable 'internal' defined, it searches its outer function (myFunction) if 'internal' is defined there. Since it is, it uses that definition for the variable internal.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation = num => {
  let counter = 0;
  for (let i=1; i <= num; i++){
    counter += i;
  };
  return counter;
}

console.log(summation(4));