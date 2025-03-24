// Dynamically-Typed
// Isomorphic Programming Language
x = 42;
console.log(typeof(x))
x = "Jack Bauer";
x = true;
x = {};
x = 42;
console.log(typeof(x))
x = "Jack bauer"
console.log(typeof(x))
o = {}
o.x = 10
o.y = 20
o.radius = 100
console.log(o)
o.area = function(){ return Math.PI * this.radius ** 2; }
console.log(typeof(o.area))
console.log(o.area)
console.log(o.area())
console.log(typeof(o))
