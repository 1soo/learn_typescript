let 이름5_1: string;

// 더 강하게 지정 (Literal types)
let 이름5_2: 123;
// 이름5_2 = 'hi'; => 컴파일 에러

let 이름5_3: "대머리" | "솔로";
function 함수5_1(a: "hello"): 1 | 0 {
  return 1;
}

// 퀴즈
function rsp(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

// const 변수 한계
// 변하지 않는 값으로 선언을 했지만, 객체 내부의 속성 값은 변경할 수 있다.
type 이름5_4 = "대머리" | "솔로";
const 이름5_5: 이름5_4 = "대머리";

var 자료1 = {
  name: "kim",
};
function 함수5_2(a: "kim") {}
// 함수5_2(자료1.name); => 타입이 아닌 값이 kim이기 때문에 컴파일 에러 발생 (타입이 kim이어야 한다.)

// Liter type
// object의 속성을 그대로 타입으로 지정
// object 속성들에 모두 readonly 설정
var 자료2 = {
  name: "kim",
} as const;

function 함수5_3(a: "kim") {}

함수5_3(자료2.name);
