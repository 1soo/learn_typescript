// 함수 타입 지정
type Func_type6_1 = (a: string) => number;

let func6_1: Func_type6_1 = function (a) {
  return 10;
};

// object 안에 함수 만들기
let 회원정보6_1 = {
  name: "kim",
  plusOne(a: number): number {
    return a + 1;
  },
  changeName: () => {},
};

회원정보6_1.plusOne(4);

// 콜백함수
function func6_2(a) {
  a();
}
function func6_3() {}

func6_2(func6_3);

// 숙제1
type 숙제6_함수1 = (a: number) => number;
type 숙제6_함수2 = () => void;

type 회원정보 = {
  plusOne: 숙제6_함수1;
  changeName: 숙제6_함수2;
};

type 숙제6_함수3 = (a: string) => string;
type 숙제6_함수4 = (a: string) => number;

const cutZero: 숙제6_함수3 = (a) => {
  return a.charAt(0) === "0" ? a.slice(1) : a;
};
console.log(cutZero("012341234"));
console.log(cutZero("12341234"));

const removeDash: 숙제6_함수4 = (a) => {
  let answer: string = "";
  for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) !== "-") {
      answer += a.charAt(i);
    }
  }
  return Number(answer);
};

console.log(removeDash("1-1020-2012"));

type 숙제6_함수5 = (a: string, b: Function, c: Function) => string;
const combFunc: 숙제6_함수5 = (a, b, c) => {
  return c(b(a));
};

console.log(combFunc("010-1111-2222", cutZero, removeDash));
