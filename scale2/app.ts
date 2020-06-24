interface IScaleble {
    getScale():number;
    getName():string;
}

class Apple implements IScaleble{
    weight: number;
    name: string;

    constructor(weight: number, name: string) {
        this.weight = weight;
        this.name = name;
    }

    getName(): string {
        return this.name + ' apple';
    }

    getScale(): number {
        return this.weight;
    }

}

class Tomato implements IScaleble {
    weight: number;
    name: string;

    constructor(weight: number, name: string) {
        this.weight = weight;
        this.name = name;
    }

    getName(): string {
        return this.name + ' tomato';
    }

    getScale(): number {
        return this.weight;
    }
}

class Scale {
    products: Array<IScaleble>;

    constructor() {
        this.products = []
    }

    add(product: IScaleble): void {
        this.products.push(product);
    }

    getSumScale():number {
        return this.products.reduce((sum, product) => sum + product.getScale(),0)
    }

    getNameList():Array<string> {
        return this.products.map(product => product.getName());
    }
}

const yellowTomato: Tomato = new Tomato(300, 'yellow');
const cherryTomato: Tomato = new Tomato(600, 'cherry');

const bigApple: Apple = new Apple(1000, 'big');
const redApple: Apple = new Apple(800, 'red');

const myScale:Scale = new Scale();
myScale.add(yellowTomato);
myScale.add(cherryTomato);
myScale.add(bigApple);
myScale.add(redApple);

console.log(myScale.getSumScale());
console.log(myScale.getNameList());