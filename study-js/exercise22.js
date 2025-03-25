function circumference({radius}){
    return 2.0 * Math.PI * radius;
}

let circle1 = {
    x: 0,
    y: 0,
    radius: 5,
    paint: {
        color: 'red',
        thickness: 4,
        style: "solid"
    }
}

console.log(circumference(circle1));