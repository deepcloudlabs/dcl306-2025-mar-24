function* fun(n){
    console.log(`inside fun(): yielding ${n}`);
    yield n;
    while (n>1){
        if (n%2===0){
            n = n /2;
        } else {
            n = 3 * n + 1;
        }
        console.log(`inside fun(): yielding ${n}`);
        yield n;
    }
}

for (let value of fun(17)) {
    console.log(`inside for loop: ${value}`);
}