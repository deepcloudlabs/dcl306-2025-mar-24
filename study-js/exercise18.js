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
let circle2 = JSON.parse(JSON.stringify(circle1)) // Object "Deep" Cloning
circle2.paint.color = "blue"
circle1.y = 100
console.log(circle1)
console.log(circle2)
