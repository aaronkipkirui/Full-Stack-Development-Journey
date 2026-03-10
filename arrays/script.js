// example forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
// example 2
const array = [1, 2, 3, 4, 5]
const double = []
const newArray = array.forEach(num => {
    double.push(num * 2);
});
console.log(double);

// advanced array methods
// map
const numberItem = [1, 2, 3, 4, 5];
const doubled = numberItem.map(number => {
  return number * 2;
});
console.log(doubled);

// filter
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = mixedNumbers.filter(number => {
  return number % 2 === 0;
});
console.log(evenNumbers);
// example 2
const filterArray = [1, 2, 3, 4, 5];
const filtered = filterArray.filter(num => num > 3);
console.log(filtered);

// reduce
const arrayItem = [1, 2, 3, 4, 5];
const reduceArray = arrayItem.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log(reduceArray); // reduce array - sums all numbers in an array (starting with an initial value of 0)

// exmaple 2
const reduceExample = [1, 2, 3, 4, 5];
const sum = reduceExample.reduce((acc, num) => acc + num, 5);
console.log(sum); // reduce array - sums all numbers in an array (starting with an initial value of 5)