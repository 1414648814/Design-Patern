/**
 * Created by George on 16/7/5.
 */

// 抽象化角色
var AbstractRoad = function () {
    this.car = null;

    this.setCar = function (car) {
        this.car = car;
    };

    this.run = function () {
        console.log("在路上");
    };
};

// 具体化角色
var SpeedRoad = function () {};
SpeedRoad.prototype = new AbstractRoad();
SpeedRoad.prototype.run = function () {
    this.car.run();
    console.log("在高速公路");
};

var StreetRoad = function () {};
StreetRoad.prototype = new AbstractRoad();
StreetRoad.prototype.run = function () {
    this.car.run();
    console.log("在街道");
};

// 抽象化实现
var AbstractCar = function () {
    this.run = function () {
        console.log("车");
    };
};

// 具体化实现
var Car = function () {};
Car.prototype = new AbstractCar();
Car.prototype.run = function () {
    console.log("汽车");
};

var Bus = function () {};
Bus.prototype = new AbstractCar();
Bus.prototype.run = function () {
    console.log("公交车");
};


var speedRoad = new SpeedRoad();
var car = new Car();
speedRoad.setCar(car);
speedRoad.run();

console.log("----------------");

var streetRoad = new StreetRoad();
var bus = new Bus();
streetRoad.setCar(bus);
streetRoad.run();
