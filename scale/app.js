var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(weight, name) {
        this.weight = weight;
        this.name = name;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(weight, name) {
        return _super.call(this, weight, name) || this;
    }
    Apple.prototype.getName = function () {
        return _super.prototype.getName.call(this) + ' apple';
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(weight, name) {
        return _super.call(this, weight, name) || this;
    }
    Tomato.prototype.getName = function () {
        return _super.prototype.getName.call(this) + ' tomato';
    };
    return Tomato;
}(Product));
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