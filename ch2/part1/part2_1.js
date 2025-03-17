var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// restparameter 타입지정
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a); // [1, 5, 3, 5, 6, 6]
}
함수(1, 5, 3, 5, 6, 6);
// 타입 제한
function 함수1() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
// 배열 붙이기
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3); // [1, 2, 3, 4, 5]
// destructuring
// array destructuring
var _a = ["안녕", 100], 변수1 = _a[0], 변수2 = _a[1];
console.log(변수1); // 안녕
// object destructuring
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
// 이름이 같으면 생략 가능
var _c = { student: true, age: 20 }, student = _c.student, age = _c.age;
// function destructuring
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
var 오브젝트 = { student: true, age: 20 };
함수({ student: true, age: 20 });
함수(오브젝트);
// 숙제1
function 함수1() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var max = 0;
    values.forEach(function (value) {
        max = value > max ? value : max;
    });
    return max;
}
console.log(함수1(6, 3, 7, 2));
var 객체2 = { user: "kim", comment: [3, 5, 4], admin: false };
function 함수2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log("(".concat(user, ", [").concat(comment, "], ").concat(admin, ")"));
}
함수2(객체2);
function 함수2_1(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log("(".concat(user, ", [").concat(comment, "], ").concat(admin, ")"));
}
함수2_1({ user: "kim", comment: [3, 5, 4], admin: false });
// 숙제3
function 함수3(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log("[".concat(a, ", ").concat(b, ", ").concat(c, "]"));
}
함수3([40, "wine", false]);
