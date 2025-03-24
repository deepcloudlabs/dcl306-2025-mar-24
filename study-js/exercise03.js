const Circle = function (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius ** 2;
    }
};

let circle1 = new Circle(1,2,100);
console.log(circle1);
console.log(circle1.area());
console.log(circle1.x);
console.log(circle1['y']);
let attr = "radius";
console.log(circle1[attr]);
for (let field in circle1) {
    if (typeof(circle1[field]) === "function") continue;
    console.log(`circle1.${field}: ${circle1[field]}`);
}