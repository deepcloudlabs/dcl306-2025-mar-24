// reference
numbers = [1, 2, 3, 4, 5, 6]
// numbers2 -> reference
numbers2 = []
for (let number of numbers) {
    numbers2.push(number)
}
numbers.push(7)
numbers2.push(8)
console.log(numbers)
console.log(numbers2)