var Person9_1 = /** @class */ (function () {
    function Person9_1(name) {
        // 클래스 필드 값 (constructor과 똑같은 역할)
        this.data = 0;
        // this.필드로 접근할 땐 필드의 값만 접근할 수 있다.
        this.name = name;
    }
    Person9_1.prototype.함수 = function (v) {
        console.log("안녕" + v);
    };
    return Person9_1;
}());
var 사람1 = new Person9_1("kim");
var 사람2 = new Person9_1("park");
console.log(사람1);
사람1.함수(" 반가워");
// 숙제1
var Car9_1 = /** @class */ (function () {
    function Car9_1(model, price) {
        this.model = model;
        this.price = price;
    }
    Car9_1.prototype.tax = function () {
        console.log(this.price / 10);
    };
    return Car9_1;
}());
var car9_1 = new Car9_1("소나타", 3000);
console.log(car9_1);
car9_1.tax();
// 숙제2
var Word9_1 = /** @class */ (function () {
    function Word9_1() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var _this = this;
        this.num = new Array();
        this.str = new Array();
        values.forEach(function (value) {
            if (typeof value === "number") {
                _this.num.push(value);
            }
            else if (typeof value === "string") {
                _this.str.push(value);
            }
        });
    }
    return Word9_1;
}());
var obj9_1 = new Word9_1("kim", 9, 5, "park");
console.log(obj9_1);
