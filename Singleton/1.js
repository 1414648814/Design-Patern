var Singleton = (function () {
    //保持了Singleton的一个引用
    var instance;
    function init () {
        var privateRandomNum = Math.random();
        return {
            getRandomNum : function () {
                return privateRandomNum;
            }
        }
    };
    return {
        getInstance : function () {
            if (!instance)
                instance = init();
            return instance;
        }
    };

})();

var singleA = Singleton.getInstance();
var singleB = Singleton.getInstance();
console.log(singleA.getRandomNum() === singleB.getRandomNum());

var WRSingleton = (function () {
    var instance;
    function init () {
        var privateRandomNum = Math.random();
        return {
            getRandomNum : function () {
                return privateRandomNum;
            }
        }
    };
    return {
        getInstance : function () {
            instance = init();
            return instance;
        }
    };
})();

var wrsingleA = WRSingleton.getInstance();
var wrsingleB = WRSingleton.getInstance();
console.log(wrsingleA.getRandomNum() === wrsingleB.getRandomNum());
