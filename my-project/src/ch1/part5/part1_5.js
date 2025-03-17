var 이름5_1;
// 더 강하게 지정 (Literal types)
var 이름5_2;
// 이름5_2 = 'hi'; => 컴파일 에러
var 이름5_3;
function 함수5_1(a) {
    return 1;
}
// 퀴즈
function rsp(x) {
    return ["가위"];
}
var 이름5_5 = "대머리";
var 자료1 = {
    name: "kim",
};
function 함수5_2(a) { }
// 함수5_2(자료1.name); => 타입이 아닌 값이 kim이기 때문에 컴파일 에러 발생 (타입이 kim이어야 한다.)
// Liter type
// object의 속성을 그대로 타입으로 지정
// object 속성들에 모두 readonly 설정
var 자료2 = {
    name: "kim",
};
function 함수5_3(a) { }
함수5_3(자료2.name);
