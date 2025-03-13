let 동물: string | number | undefined;

// 타입 변수
// 대문자 시작이 국룰
type Animal = string | number | undefined;
let 동물1: Animal = 123;

type Animal2 = { name: string; age: number };
let 동물2: Animal2 = { name: "kim", age: 20 };

// const 변수로 객체를 선언했을 경우, 내부 속성의 값은 변경할 수 있다.
const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

// typescript에서 객체 내부 속성 값 변경 막기
type GirlFriend = {
  readonly name: string;
};

const 여친: GirlFriend = {
  name: "엠버",
};
// 여친.name = '유라'; => 컴파일 에러

// type 변수 선언할 때 선택사항으로 설정
type GirlFriend2 = {
  name?: string;
};

// type 변수 같이 사용하기
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object 합치기
type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY;

let position: Position = { x: 10, y: 10 };

// type 변수 재정의 불가능
// type Position = string;

// 숙제1
type 타입1 = { a: number; b: number };
type 타입2 = { b: number; c: number };
type 타입3 = 타입1 & 타입2;
const var1: 타입3 = { a: 1, b: 1, c: 1 };
console.log(var1);

// 숙제2
type 숙제2 = { color?: string; size: number; readonly position: number[] };

// 숙제3
type User = {
  name: string;
  phone: number;
  email: string;
};

// 숙제4
type UserDetail = User & { isAdult: boolean };
const 숙제4: UserDetail = {
  name: "김한수",
  phone: 1234,
  email: "aaa@naver.com",
  isAdult: true,
};
console.log(숙제4);
