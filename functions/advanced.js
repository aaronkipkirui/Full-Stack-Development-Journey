// closure - a function that has access to its own scope, the outer function's scope, and the global scope
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}
// example usage of closure
const first = () => {
    const greet = 'Hello';
    const second = () => {
        console.log(greet);
    }
    return second;
}
const newFunction = first();
newFunction(); // Output: Hello

// currying - a technique of converting a function that takes multiple arguments into a sequence of functions that take a single argument
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}
// example usage of currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(2)(3)); // Output: 6

// compose - a technique of combining multiple functions into a single function that applies them in sequence
function compose(...functions) {
    return function (value) {
        return functions.reduceRight((acc, fn) => fn(acc), value);
    };
}
// example usage of compose
const compose = (f, g) => (x) => f(g(x));
const sum = (a) => (b) => a + b;
compose(sum(2), sum(3))(4); // Output: 9