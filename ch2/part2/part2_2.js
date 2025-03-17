// narrowing 추가 방법
// 1. undefined는 false로 처리되기 때문에, 조건에 파라미터를 넣어도 된다.
function 함수(a) {
    // a가 undefined면 if문 실행 x, string이면 실행
    if (a && typeof a === "string") {
    }
}
function 함수(animal) {
    // typeof 연산자는 number, string, object 등의 간단한 연산자만 사용 가능
    if ("swim" in animal) {
        animal.swim;
    }
}
// 3. instanceof 연산자로 object narrowing 가능
var 날짜 = new Date();
if (날짜 instanceof Date) {
}
function 함수(x) {
    if ("wheel" in x && x.wheel === "4개") {
        // Car 타입 narrowing
        console.log("x는 Car 타입이에요");
    }
}
