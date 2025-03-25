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
let {x,y,...rest} = circle1 // Object "Shallow" Cloning
// shorthand notation for the following:
// let x = circle1.x
// let y = circle1.y
console.log(x)
console.log(y)
console.log(rest)
rest.paint.color = "blue"
console.log(rest)
console.log(circle1)

