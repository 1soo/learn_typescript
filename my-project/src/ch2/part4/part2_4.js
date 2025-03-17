var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User2_4 = /** @class */ (function () {
    function User2_4(name, name1, name2) {
        this.name2 = name2;
        this.familyName = "김";
        this.name = this.familyName + name;
        this.name1 = this.familyName + name1;
    }
    User2_4.prototype.성씨변경함수 = function (familyName) {
        this.familyName = familyName;
        this.name = familyName + this.name.slice(1);
    };
    return User2_4;
}());
var 유저2_4_1 = new User2_4("철수", "영희", "훈이");
// public 변수에 값 설정
// 유저2_4_1.name = "민수";
// private 변수에 값 설정
// 유저2_4_1.name1 = "반가워요"; => 접근 권한이 허용되지 않아 컴파일 에러 발생
console.log(유저2_4_1.name);
유저2_4_1.성씨변경함수("이");
console.log(유저2_4_1.name);
console.log(유저2_4_1.name2);
var User2_4_1 = /** @class */ (function () {
    function User2_4_1() {
        this.x = 10;
    }
    return User2_4_1;
}());
// class 복사
var NewUser2_4_1 = /** @class */ (function (_super) {
    __extends(NewUser2_4_1, _super);
    function NewUser2_4_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser2_4_1;
}(User2_4_1));
var 사람2_4_1 = new NewUser2_4_1();
console.log(사람2_4_1);
var User2_4_2 = /** @class */ (function () {
    function User2_4_2() {
        // 현재 클래스에서만 접근 가능
        this.x = 10;
        // 자식 클래스에서도 접근 가능
        this.y = 20;
    }
    return User2_4_2;
}());
var NewUser2_4_2 = /** @class */ (function (_super) {
    __extends(NewUser2_4_2, _super);
    function NewUser2_4_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser2_4_2.prototype.doThis = function () {
        this.y = 20;
    };
    return NewUser2_4_2;
}(User2_4_2));
// static을 사용함으로써 자식들이 물려받 않는다.
var User2_4_3 = /** @class */ (function () {
    function User2_4_3() {
        this.y = 20;
    }
    User2_4_3.x = 10;
    return User2_4_3;
}());
var 자식2_4_1 = new User2_4_3();
console.log(자식2_4_1);
console.log(User2_4_3.x);
var User2_4_4 = /** @class */ (function () {
    function User2_4_4() {
        this.intro = User2_4_4.skill + "전문가입니다.";
    }
    User2_4_4.skill = "js";
    return User2_4_4;
}());
var 철수2_4_4 = new User2_4_4();
console.log(철수2_4_4);
User2_4_4.skill = "ts";
var 철수2_4_5 = new User2_4_4();
console.log(철수2_4_5);
// 숙제1. 다음 x, y, z 속성의 특징을 설명해보시오.
var 숙제2_4_1 = /** @class */ (function () {
    function 숙제2_4_1() {
        this.z = 30; // 3
    }
    숙제2_4_1.x = 10; // 1
    숙제2_4_1.y = 20; // 2
    return 숙제2_4_1;
}());
// 1. 클래스 내부에서만 사용되는 상수 같은 값이다.
// 2. 클래스 외부에서도 객체 생성 없이 접근 가능한 클래스의 고유한 값이다.
// 3. 클래스 자신의 객체와 자신을 상속받은 자식의 객체에서 접근 가능한 필드이다.
// 숙제2. x속성에 숫자를 더해주는 함수가 필요하다.
var 숙제2_4_2 = /** @class */ (function () {
    function 숙제2_4_2() {
    }
    숙제2_4_2.addOne = function (value) {
        this.x += value;
    };
    숙제2_4_2.printX = function () {
        console.log(숙제2_4_2.x);
    };
    숙제2_4_2.x = 10;
    숙제2_4_2.y = 20;
    return 숙제2_4_2;
}());
숙제2_4_2.addOne(3);
숙제2_4_2.addOne(4);
숙제2_4_2.printX();
