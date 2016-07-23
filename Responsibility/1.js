/**
 * Created by George on 16/7/15.
 */

var Levels = {
    smallBoss : 1,
    middleBoss : 2,
    bigBoss : 3
};

var AbstractRequest = function (content) {
    this.content = content;
    this.getContent = function () {
        return this.content;
    };
    this.getRequestLevel = function () {

    };
};

var Request01 = function (content) {
    this.content = content;
    AbstractRequest.call(this, content);
    this.getRequestLevel = function () {
        return Levels.smallBoss;
    };
};


var Request02 = function (content) {
    this.content = content;
    AbstractRequest.call(this, content);

    this.getRequestLevel = function () {
        return Levels.middleBoss;
    };
};

var Request03 = function (content) {
    this.content = content;
    AbstractRequest.call(this, content);

    this.getRequestLevel = function () {
        return Levels.bigBoss;
    };
};

var AbstractHandler = function () {
    // 下个责任处理者
    this.nextHandler = null;

    // 捕获具体请求，并将责任传递给下个责任处理者
    this.handleRequest = function (request) {
        // 层级相同
        if (this.getHandlerLevel() == request.getRequestLevel())
            this.handle(request);
        else {
            if (this.nextHandler != null) {
                console.log("当前处理者层级" + this.getHandlerLevel() + "\n" + "不足以处理请求" + request.getRequestLevel());

                // 递归
                this.nextHandler.handleRequest(request);
            }
            else {
                console.log("链上所有处理者都不能处理该请求");
            }
        }
    };

    // 设置责任链的下个处理者
    this.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };

    // 获取当前处理者的级别
    this.getHandlerLevel = function () {
        
    };

    // 定义链中每个处理者具体的处理方式
    this.handle = function (request) {
        
    };
};

// 具体处理者1
var Handler01 = function () {

};
Handler01.prototype = new AbstractHandler();
Handler01.prototype.getHandlerLevel = function () {
    return Levels.smallBoss;
};
Handler01.prototype.handle = function (request) {
    console.log("small boss 处理" + request.getContent() + "\n");
};

// 具体处理者2
var Handler02 = function () {

};
Handler02.prototype = new AbstractHandler();
Handler02.prototype.getHandlerLevel = function () {
    return Levels.middleBoss;
};
Handler02.prototype.handle = function (request) {
    console.log("middle boss 处理" + request.getContent() + "\n");
};

// 具体处理者3
var Handler03 = function () {

};
Handler03.prototype = new AbstractHandler();
Handler03.prototype.getHandlerLevel = function () {
    return Levels.bigBoss;
};
Handler03.prototype.handle = function (request) {
    console.log("big boss 处理" + request.getContent() + "\n");
};

// 创建结点
var handler01 = new Handler01();
var handler02 = new Handler02();
var handler03 = new Handler03();

// 组装链
handler01.setNextHandler(handler02);
handler02.setNextHandler(handler03);

// 创建请求
var request01 = new Request01("请求1");
var request02 = new Request02("请求2");
var request03 = new Request03("请求3");

// 每次提交都要从链头开始遍历
handler01.handleRequest(request01);
handler01.handleRequest(request02);
handler01.handleRequest(request03);
