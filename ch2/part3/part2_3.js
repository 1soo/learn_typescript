// never type 조건
// 1. return 값이 없어야 한다.
// 2. endpoint가 없어야 한다. (함수가 끝나지 않아야 한다.)
function 함수() {
    // throw new Error();
    while (true) { }
}
// never type 사용처 : 거의 쓰지 않는다. (void를 사용하기 때문)
// never type 등장하는 경우 1
function 함수1(parameter) {
    if (typeof parameter === "string") {
        console.log(parameter);
    }
    else {
        // 여기서 parameter의 타입이 never가 된다.
        // 절대 도달하지 않기 때문이다.
        console.log(parameter);
    }
}
// never type 등장하는 경우 2
var 함수3_2 = function () {
    throw new Error();
};
