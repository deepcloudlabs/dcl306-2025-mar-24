numbers = [4, 8, 15, 16, 23, 42]
let result = 0;
for (let number of numbers) {
    if (number % 2 === 0){
        let cubed = number ** 3;
        result += cubed;
    }
}
console.log(result)
// filter, map, reduce: HoF
// pure function: i. lambda expression
result =
numbers.filter( u=> u % 2 === 0)
       .map( v => v**3 )
       .reduce((acc, w) => acc + w, 0);
console.log(result)
