function handleEvent(){
    console.log("New event has arrived!");
}
let timer = setInterval(handleEvent , 1_000)
setTimeout(()=>{
    clearInterval(timer);
}, 10_000)
for (let i = 0; i < 1_000_000; i++) {
    if (i % 10_000 === 0){
        console.log(`Processing ${i}`);
    }
}