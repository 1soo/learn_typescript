// type키워드와 interface 키워드는 같은 의미와 용도로 사용된다.
type Square10_1 = { color: string; width: number };
interface Square10_2 {
  color: string;
  width: number;
}
let 네모10_1: Square10_1;
let 네모10_2: Square10_2;

interface Student10_1 {
  name: string;
}

interface Teacher10_1 {
  name: string;
  age: number;
}

// interface 상속
interface Teacher10_2 extends Student10_1 {
  age: number;
}

let 학생10_1: Student10_1 = { name: "kim" };
let 선생10_1: Teacher10_2 = { name: "kim", age: 20 };

// type에서 인터페이스 상속하기
type Animal10_1 = { name: string };
type Cat10_1 = { age: number } & Animal10_1;

// type와 인터페이스 차이
// 1. interface는 중복 선언이 가능하지만, type은 중복 선언이 불가능하다.
interface 사람10_1 {
  name: string;
}
interface 사람10_1 {
  score: number;
}

type 사람10_2 = {
  name: string;
};
/*
타입은 중복 선언이 불가능하기 때문에, 컴파일 에러가 발생한다.
type 사람10_2 = {
  score: number;
};
*/

// 2. type은 중복 속성 설정이 가능하다.
// 이 경우엔 name이 string과 number 두 가지 타입을 만족해야
// 한다고 선언한 것과 같아서 타입이 never이 된다.
type 사람10_3 = {
  name: string;
};
type 사람10_4 = {
  name: number;
} & 사람10_3;

interface 사람10_5 {
  name: string;
}
/*
name 속성이 중복되기 때문에 컴파일 에러가 발생한다.
interface 사람10_6 extends 사람10_5 {
  name: number;
}
*/

// 숙제1
interface 상품10_1 {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품객체10_1: 상품10_1 = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};
console.log(상품객체10_1);

// 숙제2
interface 상품10_2 {
  product: string;
  price: number;
}

let 장바구니10_2: 상품10_2[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];
console.log(장바구니10_2);

// 숙제3
interface 상품10_3 extends 상품10_2 {
  card: boolean;
}
const 상품객체10_3: 상품10_3 = { product: "청소기", price: 7000, card: false };
console.log(상품객체10_3);

// 숙제4
type 함수10_4 = (a: number, b: number) => number;

interface 계산기10_4 {
  plus: 함수10_4;
  minus: 함수10_4;
}

const 계산기객체10_4: 계산기10_4 = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
};
console.log(계산기객체10_4.plus(10, 2));
console.log(계산기객체10_4.minus(10, 2));
