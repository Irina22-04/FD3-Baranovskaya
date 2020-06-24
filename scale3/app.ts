interface IStorageEngine {

    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;

}

class ScalesStorageEngineArray implements IStorageEngine {
    products: Array<Product>;

    constructor() {
        this.products = [];
    }

    addItem(item:Product):void {
        this.products.push(item);
    }

    getItem(index:number):Product {
        return this.products[index];
    }

    getCount():number {
        return this.products.length;
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    productsKey: string;

    constructor() {
        this.productsKey = 'products';
    }

    addItem(item:Product):void {
        let products:Array<any> = JSON.parse(localStorage.getItem(this.productsKey));
        if(products) {
            products.push(item);
        } else {
            products=[item];
        }

        localStorage.setItem(this.productsKey, JSON.stringify(products));
    }

    getItem(index:number):Product {
        const products:Array<any> = JSON.parse(localStorage.getItem(this.productsKey));
        const product = products[index];
        return new Product(product.weight, product.name);
    }

    getCount():number{
        const products:Array<any> = JSON.parse(localStorage.getItem(this.productsKey));
        return products.length;
    }
}

class Product {

    private weight: number;
    private name: string;

    constructor(weight: number, name: string) {
        this.weight = weight;
        this.name = name;
    }

    getScale(): number {
        return this.weight;
    }

    getName(): string {
        return this.name;
    }
}

class Scale<StorageEngine extends IStorageEngine> {
    storageEngine: IStorageEngine;
    constructor(_storageEngine){
        this.storageEngine = _storageEngine;
    }

    add(product: Product): void {
        this.storageEngine.addItem(product);
    }

    getSumScale():number {
        const productsCount = this.storageEngine.getCount();
        let totalScale = 0;
        for (let i=0; i<productsCount; i++) {
            const product = this.storageEngine.getItem(i);
            totalScale+= product.getScale();
        }

        return totalScale;
    }

    getNameList():Array<string> {
        const productsCount = this.storageEngine.getCount();
        let allNames:Array<any> = [];
        for (let i=0; i<productsCount; i++) {
            const product = this.storageEngine.getItem(i);
            allNames.push(product.getName());
        }

        return allNames;
}
}

const myScale1 = new Scale(new ScalesStorageEngineArray());
const yellowTomato: Product = new Product(300, 'yellow tomato');
const redTomato: Product = new Product(500, 'red tomato');
const yellowApple: Product = new Product(300, 'yellow apple');
const redApple: Product = new Product(500, 'red apple');
myScale1.add(yellowTomato);
myScale1.add(redTomato);
myScale1.add(yellowApple);
myScale1.add(redApple);

console.log(myScale1.getNameList());
console.log(myScale1.getSumScale());

const myScale2 = new Scale(new ScalesStorageEngineLocalStorage());
myScale2.add(yellowTomato);
myScale2.add(redTomato);
myScale2.add(yellowApple);
myScale2.add(redApple);

console.log(myScale2.getNameList());
console.log(myScale2.getSumScale());