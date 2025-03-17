export var 이름2_5_1 = "kim";
export var 나이2_5_1 = 20;
export type 이름타입2_5_1 = string;

// 타입 변수 숨기기 문법
// 이젠 잘 안 쓴다
namespace 네임스페이스2_5_1 {
  export type 이름타입2_5_2 = string | number;
}

let 변수2_5_1: 네임스페이스2_5_1.이름타입2_5_2 = "lee";
