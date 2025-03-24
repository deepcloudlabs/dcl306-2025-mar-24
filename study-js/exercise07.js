numbers = []
numbers.push(4)
numbers.push(23)
numbers.push(8)
numbers.push(42)
numbers.push(16)
numbers.push(15)
console.log(numbers)
numbers = [4, 23, 8, 42, 16, 15]
console.log(numbers)
numbers = Array.from([4, 23, 8, 42, 16, 15])
console.log(numbers)
// Loop #1
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// Loop #2
for (let i in numbers) {
    console.log(numbers[i])
}
// Loop #3
for (let number of numbers) {
    console.log(number)
}
// Loop #4
// sort -> accepts function
// Functional Programming: I. Higher-Order Function (HoF)
//                        II. Pure Function
numbers.sort((x, y) => y - x)
console.log(numbers)
numbers.sort((x, y) => x - y)
console.log(numbers)
names = ["Aşi", "Az", "Asiye", "İsmail", "Şima", "Veli", "Şule", "Zehra"]
names.sort()
console.log(names)
names.sort((x,y) => x.localeCompare(y, "tr"))
console.log(names)

employees = [
    {salary: 500,department: "IT"},
    {salary: 200,department: "SALES"},
    {salary: 200,department: "HR"},
    {salary: 400,department: "FINANCE"},
    {salary: 400,department: "IT"},
]
employees.sort((e1,e2) => e1.salary - e2.salary)
console.log(employees)
employees.sort((e1,e2) => e1.department.localeCompare(e2.department))
console.log(employees)
employees.sort((e1,e2) =>{
    if (e1.salary === e2.salary){
        return e1.department.localeCompare(e2.department)
    }
    return e1.salary - e2.salary;
})
console.log(employees)
