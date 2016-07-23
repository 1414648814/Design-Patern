/**
 * Created by George on 16/7/20.
 */
/**
 * 第一种创建对象方式
 * @type {{name: string, drive: Function, panic: Function}}
 */
var myCar = {
    name : "Mini QQ",

    drive : function () {
        console.log("driving.");
    },

    panic : function () {
        console.log("stop.");
    }
};

// 通过Object的create函数实例化一个新的car
var yourCar = Object.create(myCar);
console.log(yourCar.name);

/**
 * 第二种创建对象方式
 * @type {{getModel: Function}}
 */
var verticle = {
    getModel : function () {
        console.log("the model of this vehicle is " + this.model);
    }
};
// 使用create函数的第二个参数来初始化对象属性
var car = Object.create(verticle, {
    "id" : {
        value : 1,
        enumerable : true
    },

    "model" : {
        value : "QQ",
        enumerable : true,
    }
});

car.getModel();

// 如果不用上面那种，则
var vehiclePrototype = {
    init : function (carModel) {
        this.model = carModel;
    },

    getModel : function () {
        console.log("the model of this vehicle is " + this.model);
    }
};

function vehicle (model) {
    function F () {};
    F.prototype = vehiclePrototype;

    var f = new F();
    f.init(model);
    return f;
};

yourCar = new vehicle("QQ");
yourCar.getModel();

/**
 * 第三种方式
 */
var beget = (function () {
    function F () {};
    return function (proto) {
        F.prototype = proto;
        return new F();
    };
})();

yourCar = new beget(vehiclePrototype);
yourCar.init("QQ");
yourCar.getModel();