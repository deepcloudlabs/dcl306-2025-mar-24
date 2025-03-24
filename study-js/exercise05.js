function fun(x, y, z) {
    if (arguments.length !== 3) {
        throw "You must provide three integers...";
    }
    for (let arg of arguments) {
        if (typeof (arg) !== "number") {
            throw `${arg} is not a valid integer`;
        }
    }
    return x * y + z;
}

console.log(fun("one", 2, 4))
console.log(fun(1, 10, 20))