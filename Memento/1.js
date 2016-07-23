/**
 * Created by George on 16/7/16.
 */
// 发起角色
var Originator = function () {
    this.getState = function () {
        return this.state;
    };
    this.setState = function (state) {
        this.state = state;
    };
    this.createMemento = function () {
        return new Memento(this.state);
    };
    this.restoreMemento = function (memento) {
        this.setState(memento.getState());
    };
};

// 备忘录
var Memento = function (state) {
    this.state = state;

    this.getState = function () {
        return this.state;
    };

    this.setState = function (state) {
        this.state = state;
    };
};

// 负责人角色
var Caretaker = function () {
    this.memento = null;
    this.getMemento = function () {
        return this.memento;
    };

    this.setMemento = function (memento) {
        this.memento = memento;
    };
};

var originator = new Originator();
originator.setState("状态1 ");
console.log("初始状态 " + originator.getState());

var caretaker = new Caretaker();
caretaker.setMemento(originator.createMemento());
originator.setState("状态2 ");

console.log("改变后状态 " + originator.getState());

originator.restoreMemento(caretaker.getMemento());

console.log("恢复状态 " + originator.getState());