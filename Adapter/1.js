/**
 * Created by George on 16/7/2.
 */

// 鸭子
var Duck = function () {};

Duck.prototype.fly = function () {
    throw new Error("该方法必须被重写");
};

Duck.prototype.quack = function () {
    throw new Error("该方法必须被重写");
};

// 火鸡
var Turkey = function () {};

Turkey.prototype.fly = function () {
    throw new Error("该方法必须被重写");
};

Turkey.prototype.gobble = function () {
    throw new Error("该方法必须被重写");
};

//具体的鸭子
var MallardDuck = function () {
    Duck.apply(this);
};
//原型
MallardDuck.prototype = new Duck();

MallardDuck.prototype.fly = function () {
    console.log("鸭子飞翔");
};

MallardDuck.prototype.quack = function () {
    console.log("鸭子嘎嘎");
};

// 具体火鸡
var WildTurkey = function () {
    Turkey.apply(this);
};
//原型
WildTurkey.prototype = new Turkey();

WildTurkey.prototype.fly = function () {
    console.log("火鸡飞翔");
};

WildTurkey.prototype.gobble = function () {
    console.log("火鸡咯咯");
};

//为了让火鸡也能支持鸭子的quack方法
var TurkeyAdapter = function (oTurkey) {
    Duck.apply(this);
    this.oTurkey = oTurkey;
};

TurkeyAdapter.prototype = new Duck();

TurkeyAdapter.prototype.quack = function () {
    this.oTurkey.gobble();
};

TurkeyAdapter.prototype.fly = function () {
    var nFly = 0;
    var nLenFly = 5;
    for (; nFly < nLenFly;) {
        this.oTurkey.fly();
        nFly = nFly + 1;
    }
};

var oMallardDuck = new MallardDuck();
var oWildTurkey = new WildTurkey();
var oTurkeyAdapter = new TurkeyAdapter(oWildTurkey);

//原有的鸭子行为；
oMallardDuck.fly();
oMallardDuck.quack(); //鸭子叫
console.log("------------");
//原有的火鸡行为
oWildTurkey.fly();
oWildTurkey.gobble();  //火鸡叫
console.log("------------");
//适配器火鸡的行为
oTurkeyAdapter.fly();
oTurkeyAdapter.quack();  //

