/**
 * Created by George on 16/7/12.
 */

// 抽象表达式
var Expression = function () {
    // 以环境为主，本方法解释给定的任何一个表达式
    this.interpret = function (context) {
        
    };
};

// 具体表达式
var Variable = function (value) {
    this.value = value;
};
Variable.prototype = new Expression();
Variable.prototype.interpret = function (context) {
    return context.lookup(this);
};


// 具体表达式
var Add = function (variable1, variable2) {
    this.variable1 = variable1;
    this.variable2 = variable2;
};
Add.prototype = new Expression();

Add.prototype.interpret = function (context) {
    return this.variable1.interpret(context) + this.variable2.interpret(context);
};


// 环境类定义出从变量到布尔值的一个映射
var Context = function () {
    this.map = new Array(2);
};
Context.prototype.assign = function (variable, value) {
    this.map[variable.value] = value;
};
Context.prototype.lookup = function (variable) {
    var value = this.map[variable.value];
    if (value !== null)
        return value;
};


//主函数
var x = new Variable(0);
var y = new Variable(1);
var context = new Context(x, y);
context.assign(x, "x");
context.assign(y, "y");

var result = new Add(x, y);
console.log(result.interpret(context));