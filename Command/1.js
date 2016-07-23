/**
 * Created by George on 16/7/2.
 */
//命令接口
var Command = function () {
    this.execute = function () {
        
    };
};

//命令接收者Receiver
var TV = function () {
    this.curChannel = 0;
    this.turnOn = function () {
        console.log("the tv is on");
    };
    this.turnOff = function () {
        console.log("the tv is off");
    };
    this.changeChannel = function (channel) {
        this.curChannel = channel;
        console.log("now the tv is " + this.curChannel);
    };
};

//开机命令
var CommandOn = function (tv) {
    Command.apply(this);
    this.tv = tv;
    this.execute = function () {
        this.tv.turnOn();
    };
};


//关机命令
var CommandOff = function (tv) {
    Command.apply(this);
    this.tv = tv;
    this.execute = function () {
        this.tv.turnOff();
    };
};

//切换频道命令
var CommandChange = function (tv, channel) {
    Command.apply(this);
    this.tv = tv;
    this.channel = channel;
    this.execute = function () {
        this.tv.changeChannel(this.channel);
    };
};

//遥控器作为Invoker
var Control = function (onCommand, offCommand, changeCommand) {
    this.onCommand = onCommand;
    this.offCommand = offCommand;
    this.changeCommand = changeCommand;

    this.turnOn = function () {
        this.onCommand.execute();
    };

    this.turnOff = function () {
        this.offCommand.execute();
    };

    this.changeChannel = function () {
        this.changeCommand.execute();
    };
};

//电视
var tv = new TV();
//开电视命令
var commandOn = new CommandOn(tv);
//关电视命令
var commandOff = new CommandOff(tv);
//切换命令
var commandChange = new CommandChange(tv, 2);
//遥控器
var control = new Control(commandOn, commandOff, commandChange);
control.turnOn();
control.turnOff();
control.changeChannel();