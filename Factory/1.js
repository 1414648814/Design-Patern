/**
 * Created by George on 16/7/3.
 */
//汽车
function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "new";
    this.color = options.color || "white";
}

//卡车类
function Truck(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

// 工厂
function VehicleFactory() {}
// 定义该工厂factory的原型和试用工具，默认是car
VehicleFactory.prototype.vehicleClass = Car;
// 创建工厂方法
VehicleFactory.prototype.createVehicle = function (options) {
    if (options.vehicleType === "car") {
        this.vehicleClass = Car;
    }
    else {
        this.vehicleClass = Truck;
    }
    return new this.vehicleClass(options);
}

//创建生成汽车的工厂实例
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
    vehicleType : "car",
    color : "yellow",
    doors : 6,
});
console.log(car instanceof Car);
console.log(car);

//创建生成卡车的工厂实例
var movingTruck = carFactory.createVehicle({
    vehicleType : "truck",
    state : "new",
    color : "red",
    wheelSize : "small",
});
console.log(car instanceof Truck);
console.log(movingTruck);

///////////////////////////

//将VehicleFactory归入子类来创建一个构建Truck的工厂类
function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory();
// 定义该工厂factory的原型和试用工具，默认是car
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var bigTruck = truckFactory.createVehicle({
    state : "bad",
    color : "black",
    wheelSize : "big",
});
console.log(bigTruck instanceof Truck);
console.log(bigTruck);