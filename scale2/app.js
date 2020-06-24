var Apple = /** @class */ (function () {
    function Apple(weight, name) {
        this.weight = weight;
        this.name = name;
    }
    Apple.prototype.getName = function () {
        return this.name + ' apple';
    };
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(weight, name) {
        this.weight = weight;
        this.name = name;
    }
    Tomato.prototype.getName = function () {
        return this.name + ' tomato';
    };
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    return Tomato;
}());
var Scale = /** @class */ (function () {
    function Scale() {
        this.products = [];
    }
    Scale.prototype.add = function (product) {
        this.products.push(product);
    };
    Scale.prototype.getSumScale = function () {
        return this.products.reduce(function (sum, product) { return sum + product.getScale(); }, 0);
    };
    Scale.prototype.getNameList = function () {
        return this.products.map(function (product) { return product.getName(); });
    };
    return Scale;
}());
var yellowTomato = new Tomato(300, 'yellow');
var cherryTomato = new Tomato(600, 'cherry');
var bigApple = new Apple(1000, 'big');
var redApple = new Apple(800, 'red');
var myScale = new Scale();
myScale.add(yellowTomato);
myScale.add(cherryTomato);
myScale.add(bigApple);
myScale.add(redApple);
console.log(myScale.getSumScale());
console.log(myScale.getNameList());
//# sourceMappingURL=app.js.map