/**
 * Created by George on 16/7/6.
 */

// 抽象迭代器
var Iterator = function () {
    this.next = function () {
        
    };

    this.hasNext = function () {
        
    };

};

// 具体迭代器实现迭代器接口
var ConcreteIterator = function (list) {
    this.list = list;
    this.cursor = 0;
};
ConcreteIterator.prototype = new Iterator();
ConcreteIterator.prototype.hasNext = function () {
    return !(this.cursor == this.list.length);
};
ConcreteIterator.prototype.next = function () {
    var obj = null;
    if (this.hasNext()) {
        obj = this.list[this.cursor++];
    }
    return obj;
};

// 抽象容器
var Container = function () {
    this.add = function (obj) {
        
    };
    this.remove = function (obj) {
        
    };
    this.iterator = function () {
        
    };
};

// 具体容器实现容器接口
var ConcreteContainer = function (list) {
    this.list = list;
};
ConcreteContainer.prototype = new Container();
ConcreteContainer.prototype.add = function (obj) {
    this.list.push(obj);
};
ConcreteContainer.prototype.iterator = function () {
    return new ConcreteIterator(this.list);
};
ConcreteContainer.prototype.remove = function (obj) {
    this.list.remove(obj);
};

var list = ["a", "b", "c"];
var container = new ConcreteContainer(list);
var iterator = container.iterator();

while (iterator.hasNext()) {
    var str = iterator.next().toString();
    console.log(str);
}