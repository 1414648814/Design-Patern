/**
 * Created by George on 16/6/27.
 */

//产品
function Product()
{
    this._partA = null;
    this._partB = null;
    this._partC = null;
};
Product.prototype.setPartA = function (part) {
    this._partA = part;
};
Product.prototype.getPartA = function () {
    return this._partA;
};
Product.prototype.setPartB = function (part) {
    this._partB = part;
};
Product.prototype.getPartB = function () {
    return this._partB;
};
Product.prototype.setPartC = function (part) {
    this._partC = part;
};
Product.prototype.getPartC = function () {
    return this._partC;
};


//抽象建造者
function Builder()
{
    this.buildPartA = function () {

    };

    this.buildPartB = function () {
        
    };

    this.buildPartC = function () {
        
    };
};

//具体建造者（这里没办法实现继承抽象建造者）
function ConcreteBuilder()
{
    this.product = new Product();

    this.buildPartA = function () {
        this.product.setPartA("A");
    };

    this.buildPartB = function () {
        this.product.setPartB("B");
    };

    this.buildPartC = function () {
        this.product.setPartC("C");
    };

    this.getProduct = function () {
        return this.product;
    };
};

//导演角色
function Director()
{
    this.concreteBuilder = new ConcreteBuilder();

    this.Director = function (builder) {
        this.concreteBuilder = builder;
    };

    this.setBuilder = function (builder) {
        this.concreteBuilder = builder;
    };

    this.construct = function () {
        this.concreteBuilder.buildPartA();
        this.concreteBuilder.buildPartB();
        this.concreteBuilder.buildPartC();
        //要从建造者处获得
        return this.concreteBuilder.getProduct();
    };
};

var builder = new ConcreteBuilder();
var director = new Director(builder);
var product = director.construct();  //这样就获取到了建造好的产品
console.log(product.getPartA() + "\t" + product.getPartB() + "\t" + product.getPartC());
