/**
 * Created by George on 16/7/10.
 */
//电梯状态
function LiftState () {
    this._context = null;
    this.setContext = function (context) {
        this._context = context;
    };
    // 开门
    this.open = function () {
        
    };
    // 关门
    this.close = function () {
        
    };
    // 运行
    this.running = function () {
        
    };
    // 停止
    this.idle = function () {
        
    };
};

//环境类
function Context () {
    this._openState = new OpenState();
    this._closeState = new CloseState();
    this._runningState = new RunningState();
    this._idleState = new IdleState();

    // 获取和设置状态
    this._liftState = new LiftState();
    this.getLiftState = function () {
        return this._liftState;
    };
    this.setLiftState = function (state) {
        this._liftState = state;
        this._liftState.setContext(this);
    };

    // 更改状态
    this.open = function () {
        this._liftState.open();
    };
    this.close = function () {
        this._liftState.close();
    };
    this.running = function () {
        this._liftState.running();
    };
    this.idle = function () {
        this._liftState.idle();
    };
};

// 具体开门状态
function OpenState () {

};
OpenState.prototype = new LiftState();
OpenState.prototype.close = function () {  // 开门后会关闭
    this._context.setLiftState(this._context._closeState);
    this._context.getLiftState().close();
    console.log("open to close");
};

// 关门状态
function CloseState () {

};
CloseState.prototype = new LiftState();
CloseState.prototype.running = function () {  // 开门后可能会运行
    this._context.setLiftState(this._context._runningState);
    this._context.getLiftState().running();
    console.log("close to running");
};
CloseState.prototype.idle = function () {  // 开门后可能空闲
    this._context.setLiftState(this._context._idleState);
    this._context.getLiftState().idle();
    console.log("close to idle");
};

// 运行状态
function RunningState () {

};
RunningState.prototype = new LiftState();
RunningState.prototype.idle = function () {  // 运行后可能会空闲下来
    this._context.setLiftState(this._context._idleState);
    this._context.getLiftState().idle();
    console.log("running to idle");
};

// 空闲状态
function IdleState() {

};
IdleState.prototype = new LiftState();
IdleState.prototype.open = function () {  //空闲之后会开门
    this._context.setLiftState(this._context._openState);
    this._context.getLiftState().open();
    console.log("idle to open");
};


// 主函数
var context = new Context();
context.setLiftState(new IdleState());

// 大概操作的意思是先处于限制状态，然后再开门，关上门，然后运行，到达后至于限制，最后开门
context.open();
context.close();
context.running();
context.idle();
context.open();

