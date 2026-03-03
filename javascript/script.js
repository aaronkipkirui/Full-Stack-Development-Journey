// functions in JavaScript
function sayHello() {
    console.log("Hello, World!");
}
sayHello();

var sayBye = function() {
    console.log("Goodbye, World!");
}
sayBye(); 

// functions with arguments
function sing(song) {
    console.log(song);
}
sing("Twinkle, twinkle, little star");
sing("How I wonder what you are");

// functions with multiple arguments
function multiply(x, y) {
    console.log(x * y);
}
multiply(5, 10);

// functions with return values
var result = function(a, b) {
    return a * b;
}   
// multiply(5, 10);
console.log(result(5, 10));
// functions with return and conditional statements
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }   
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false    

function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "Product should be greater than or equal to 10";
    }   else {  
        return a * b;
    }
}
console.log(multiply(5, 10)); // 50
console.log(multiply(15, 10)); // "Product should be greater than or equal to 10"