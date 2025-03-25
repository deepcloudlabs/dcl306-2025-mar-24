// reference
let numbers = [1, 2, 3, 4, 5, 6]
// numbers2 -> reference
let numbers2 = [...numbers]
numbers.push(7)
numbers2.push(8)
console.log(numbers)
console.log(numbers2)
