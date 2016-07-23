/**
 * Created by George on 16/7/14.
 */
// 抽象对象
var AbstractObject = function () {
    this.operation = function () {
        
    };
};

// 真实对象
var RealObject = function () {

};
RealObject.prototype = new AbstractObject();
RealObject.prototype.realOperation = function () {
    console.log("do something");
};

// 代理对象
var ProxyObject = function () {

    this.realObj = new RealObject();
};
ProxyObject.prototype = new AbstractObject();
ProxyObject.prototype.operation = function () {
    console.log("before");
    this.realObj.realOperation();
    console.log("after");
};

// 主函数
var obj = new ProxyObject();
obj.operation();

