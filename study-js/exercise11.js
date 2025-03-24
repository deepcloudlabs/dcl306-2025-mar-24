async function fun(numbers){
    return numbers.filter(u => u%2 ===0).length
}
async function sun(){
    let result = await fun([4,8,15,16,23,42]);
    return result ** 3;
}

Promise.all([
    fun([4,8,15,16,23,42]),
    fun([1,2,3,4,5,6])
]).then(result=>console.log(result))
console.log("Application is running after Promise.all() call!");