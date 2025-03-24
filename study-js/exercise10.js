function fun(numbers){
    return numbers.filter(u => u%2 ===0).length
}

let result = fun([4,8,15,16,23,42])
console.log(result)

function gun(numbers){
    return new Promise((resolve,reject)=>{
        if (!numbers || numbers.length === 0){
            reject("Not a valid array");
        }
        setTimeout(()=>{
           resolve(numbers.filter(u => u%2 ===0).length);
        }, 3_000);
    })
}

gun([4,8,15,16,23,42])
    .then(result=>console.log(result))
    .catch(err => console.error(err));
console.log("Application is running after gun() call!");