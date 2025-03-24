o = {
    x: 1,
    y: 2,
    radius: 100,
    style: {
        color: 'red',
        thickness: 2
    },
    area: function(){
        return Math.PI * this.radius ** 2;
    }
}

console.log(o)
console.log(o.area())
console.log(o.style.color)
let serialized = JSON.stringify(o);
console.log(serialized)
o = JSON.parse(serialized);
console.log(o);
