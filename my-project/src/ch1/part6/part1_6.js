var func6_1 = function (a) {
    return 10;
};
// object 안에 함수 만들기
var 회원정보6_1 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { },
};
회원정보6_1.plusOne(4);
// 콜백함수
function func6_2(a) {
    a();
}
function func6_3() { }
func6_2(func6_3);
var cutZero = function (a) {
    return a.charAt(0) === "0" ? a.slice(1) : a;
};
console.log(cutZero("012341234"));
console.log(cutZero("12341234"));
var removeDash = function (a) {
    var answer = "";
    for (var i = 0; i < a.length; i++) {
        if (a.charAt(i) !== "-") {
            answer += a.charAt(i);
        }
    }
    return Number(answer);
};
console.log(removeDash("1-1020-2012"));
var combFunc = function (a, b, c) {
    return c(b(a));
};
console.log(combFunc("010-1111-2222", cutZero, removeDash));
