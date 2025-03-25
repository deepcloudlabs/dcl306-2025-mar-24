// reference
let numbers = [1, 2, 3, 4, 5, 6]
let [first,second,...rest] = numbers
// first = numbers[0]
// second = numbers[1]
console.log(first)
console.log(second)
console.log(rest)
rest[0] = 42
console.log(rest)
console.log(numbers)

