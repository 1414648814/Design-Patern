/**
 * Created by George on 16/7/9.
 */

// 抽象化构件角色
var Commponent = function () {
    this.name = null;
    this.add = function (c) {
        console.log("add child");
    };
    this.remove = function () {
        console.log("remove child");
    };
    this.getChild = function () {
        console.log("get child");
    };
};

// 部分类构件角色
var Leaf = function () {
    
};
Leaf.prototype = new Commponent();
Leaf.prototype.add = function () {
    
};
Leaf.prototype.remove = function () {
    
};
Leaf.prototype.getChild = function () {
    console.log(this.name + "执行了");
};

// 组合类构件角色
var Composite = function () {
    this.list = [];
};
Composite.prototype = new Commponent();
Composite.prototype.add = function (c) {
    this.list.push(c);
};
Composite.prototype.remove = function (c) {
    this.list.remove(c);
};
Composite.prototype.getChild = function () {
    console.log(this.name + "执行了");
    for (var i = 0;i < this.list.length; i++) {
        this.list[i].getChild();
    }
};


// 主要实现
var root = new Composite();
root.name = "root";

var leftroot = new Composite();
leftroot.name = "leftroot";

var rightroot = new Composite();
rightroot.name = "rightroot";

var leftNode = new Leaf();
leftNode.name = "leftleaf";

var rightNode = new Leaf();
rightNode.name = "rightleaf";

leftroot.add(leftNode);
leftroot.add(rightNode);

rightroot.add(leftNode);
rightroot.add(rightNode);

root.add(leftroot);
root.add(rightroot);

root.getChild();
