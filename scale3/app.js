var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.productsKey = 'products';
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var products = JSON.parse(localStorage.getItem(this.productsKey));
        if (products) {
            products.push(item);
        }
        else {
            products = [item];
        }
        localStorage.setItem(this.productsKey, JSON.stringify(products));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var products = JSON.parse(localStorage.getItem(this.productsKey));
        var product = products[index];
        return new Product(product.weight, product.name);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var products = JSON.parse(localStorage.getItem(this.productsKey));
        return products.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
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
var Scale = /** @class */ (function () {
    function Scale(_storageEngine) {
        this.storageEngine = _storageEngine;
    }
    Scale.prototype.add = function (product) {
        this.storageEngine.addItem(product);
    };
    Scale.prototype.getSumScale = function () {
        var productsCount = this.storageEngine.getCount();
        var totalScale = 0;
        for (var i = 0; i < productsCount; i++) {
            var product = this.storageEngine.getItem(i);
            totalScale += product.getScale();
        }
        return totalScale;
    };
    Scale.prototype.getNameList = function () {
        var productsCount = this.storageEngine.getCount();
        var allNames = [];
        for (var i = 0; i < productsCount; i++) {
            var product = this.storageEngine.getItem(i);
            allNames.push(product.getName());
        }
        return allNames;
    };
    return Scale;
}());
var myScale1 = new Scale(new ScalesStorageEngineArray());
var yellowTomato = new Product(300, 'yellow tomato');
var redTomato = new Product(500, 'red tomato');
var yellowApple = new Product(300, 'yellow apple');
var redApple = new Product(500, 'red apple');
myScale1.add(yellowTomato);
myScale1.add(redTomato);
myScale1.add(yellowApple);
myScale1.add(redApple);
console.log(myScale1.getNameList());
console.log(myScale1.getSumScale());
var myScale2 = new Scale(new ScalesStorageEngineLocalStorage());
myScale2.add(yellowTomato);
myScale2.add(redTomato);
myScale2.add(yellowApple);
myScale2.add(redApple);
console.log(myScale2.getNameList());
console.log(myScale2.getSumScale());
//# sourceMappingURL=app.js.map