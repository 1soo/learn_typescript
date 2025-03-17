// Generic
function 함수2_6_1(x) {
    return x[0];
}
var a2_6_1 = 함수2_6_1([4, 2]);
console.log(a2_6_1);
// console.log(a2_6_1 + 1); -> unknown 타입에 연산을 시도했기 때문에, 컴파일 에러가 발생한다.
// Generic 함수 선언 및 정의
function 함수2_6_2(x) {
    return x[0];
}
var a2_6_2 = 함수2_6_2([4, 2]);
console.log(a2_6_2 + 1);
// MyType에 number가 확실히 온다는 보장이 없어서 컴파일 에러가 발생
function 함수2_6_3(x) {
    // return x - 1;
}
// extends를 통해 우측 속성을 상속받은 타입으로 제한할 수 있다.
function 함수2_6_4(x) {
    return x - 1;
}
function 함수2_6_5(x) {
    return x.length;
}
var a2_6_3 = 함수2_6_5(["100"]);
console.log(a2_6_3);
function 숙제2_6_1_b(x) {
    return x.length;
}
console.log(숙제2_6_1_b("1234"));
console.log(숙제2_6_1_b(["1234", "1234"]));
var 숙제2_6_2_b = '{"name" : "dog", "age": 1}';
function 숙제2_6_2_c(data) {
    return JSON.parse(data);
}
console.log(숙제2_6_2_c(숙제2_6_2_b));
// 숙제3. class의 속성에 타입을 generic으로 설정하기
var 숙제2_6_3_a = /** @class */ (function () {
    function 숙제2_6_3_a(a) {
        this.name = a;
    }
    return 숙제2_6_3_a;
}());
var 숙제2_6_3_b = new 숙제2_6_3_a("어쩌구");
console.log(typeof 숙제2_6_3_b.name);
var 숙제2_6_3_c = new 숙제2_6_3_a(123);
console.log(typeof 숙제2_6_3_c.name);
var 숙제2_6_3_d = new 숙제2_6_3_a(["어쩌구", "저쩌구"]);
console.log(typeof 숙제2_6_3_d.name);
