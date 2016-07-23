//抽象组件者
var MacbookPro = function () {

};

//具体组件者
MacbookPro.prototype = {
    addEngraving : function () {
    },
    addParallels : function () {
    },
    add4GBRam : function () {
    },
    add8GBRam : function () {
    },
    addCase : function () {
    },
    getPrice : function () {
        return 900.00;
    }
};

//继承函数
function extend( subClass, superClass ){
    var F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    // 此处指向superClass的prototype 比直接保存superClass使用更为方便
    subClass.superclass = superClass.prototype;
    if( superClass.prototype.constructor === Object.prototype.constructor ){
        superClass.prototype.constructor = superClass;
    }
}

//中间装饰者
var MacbookDecorator = function (macbook) {
    this.macbook = macbook;
};

MacbookDecorator.prototype = {
    addEngraving : function () {
        return this.macbook.addEngraving();
    },
    addParallels : function () {
        return this.macbook.addParallels();
    },
    add4GBRam : function () {
        return this.macbook.add4GBRam();
    },
    add8GBRam : function () {
        return this.macbook.add8GBRam();
    },
    addCase : function () {
        return this.macbook.addCase();
    },
    getPrice : function () {
        return 900.00;
    }
};

//具体装饰者
var CaseDecorator = function (macbook) {
    CaseDecorator.superclass.constructor.call(this,macbook);
};

//扩展超类
extend(CaseDecorator, MacbookDecorator);

CaseDecorator.prototype.addCase = function () {
    return this.macbook.addCase() + "Adding case to macbook";
};

CaseDecorator.prototype.getPrice = function () {
    return this.macbook.getPrice() + 45.00;
};

var pro = new MacbookPro();
console.log(pro.getPrice());

pro = new CaseDecorator(pro)
console.log(pro.getPrice());