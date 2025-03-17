// 함수 정의
function 함수() {
    // 코드~~~
}
// 함수 호출
함수();
// input: number, output: any
function 함수2_2(x) {
    return x * 2;
}
함수2_2(30); // output: 60
// input: number, output: number
function 함수2_3(x) {
    return x * 2;
}
// input: number, output: void(none)
// 실수로 무언가 return하는 것을 막아준다.
function 함수4(x) {
    x + x;
    // return x + x; => 컴파일 에러 발생
}
// 파라미터가 들어올 수도 있다.
// ? -> undefined
// x?: number === x: number | undefined
function 함수5(x) { }
function 함수6(x) {
    // console.log(x + 3); -> 타입스크립트는 엄격하게 타입에 따른 분기를 지정해주어야 하기 때문에, 컴파일 에러 발생
}
함수6(2);
// 숙제1
function 숙제2_1(name) {
    console.log(name === undefined ? "이름이 없습니다" : "\uC548\uB155\uD558\uC138\uC694 ".concat(name));
}
// 숙제2_1("김한수");
// 숙제2_1();
// 숙제2
function 숙제2_2(str) {
    return String(str).length;
}
// console.log(숙제2_2(9567));
// 숙제3
function 결혼가능하냐(월소득, 집보유여부, 매력점수) {
    var score = 월소득 + (집보유여부 ? 500 : 0) + (매력점수 === "상" ? 100 : 0);
    if (score >= 600) {
        return "결혼가능";
    }
}
console.log(결혼가능하냐(700, false, "중"));
console.log(결혼가능하냐(100, false, "상"));
