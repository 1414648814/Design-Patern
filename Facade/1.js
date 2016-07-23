/**
 * Created by George on 16/6/25.
 */

//子系统
function Eletricity()
{
    this.cost = 100;
};
Eletricity.prototype.PayEletricity = function(peole)
{
    console.log("pay eletricity...");
    peole.PayMoney(this.cost);
};

function NetWork()
{
    this.cost = 100;
};
NetWork.prototype.PayNetWork = function(peole)
{
    console.log("pay network...");
    peole.PayMoney(this.cost);
};

function Water()
{
    this.cost = 100;
};
Water.prototype.PayWater = function(peole)
{
    console.log("pay water...");
    peole.PayMoney(this.cost);
};

//客户端
function People()
{
    this.money = 500;
};
People.prototype.PayMoney = function (money) {
    console.log("people pay the money $" + money);
    this.money -= money;
    console.log("people left the money $" + this.money);
};

//外观角色
function Facade()
{
    this.eletricity = new Eletricity();
    this.network = new NetWork();
    this.water = new Water();
    this.money = 0;
};
Facade.prototype.PayAll = function (people) {
    people.PayMoney(this.GetAllMoney());
    this.money += this.GetAllMoney();
    this.eletricity.PayEletricity(this);
    this.network.PayNetWork(this);
    this.water.PayWater(this);
    this.money = 0;
};
Facade.prototype.GetAllMoney = function () {
    return this.eletricity.cost + this.network.cost + this.water.cost;
};
Facade.prototype.PayMoney = function (money){
    console.log("facade pay the money $" + money);
    this.money -= money;
    console.log("facade left the money $" + this.money);
};

//使用外观模式
var people = new People();
var facade = new Facade();
facade.PayAll(people);

//没有使用外观模式
//people = new People();
//var eletricity = new Eletricity();
//var network = new NetWork();
//var water = new Water();
//eletricity.PayEletricity(people);
//network.PayNetWork(people);
//water.PayWater(people);