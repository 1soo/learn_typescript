// Generic
function 함수2_6_1(x: unknown[]) {
  return x[0];
}

let a2_6_1 = 함수2_6_1([4, 2]);
console.log(a2_6_1);
// console.log(a2_6_1 + 1); -> unknown 타입에 연산을 시도했기 때문에, 컴파일 에러가 발생한다.

// Generic 함수 선언 및 정의
function 함수2_6_2<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a2_6_2 = 함수2_6_2<number>([4, 2]);
console.log(a2_6_2 + 1);

// MyType에 number가 확실히 온다는 보장이 없어서 컴파일 에러가 발생
function 함수2_6_3<MyType>(x: MyType) {
  // return x - 1;
}

// extends를 통해 우측 속성을 상속받은 타입으로 제한할 수 있다.
function 함수2_6_4<MyType extends number>(x: MyType) {
  return x - 1;
}

// custom interface를 상속받은 타입
interface LengthCheck {
  length: number;
}

function 함수2_6_5<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

let a2_6_3 = 함수2_6_5<string[]>(["100"]);
console.log(a2_6_3);

// 숙제1. 문자를 넣으면 문자의 개수, array를 집어넣으면 array안의 자료 개수를 콘솔창에 출력해주는 함수
interface 숙제2_6_1_a {
  length: number;
}

function 숙제2_6_1_b<MyType extends 숙제2_6_1_a>(x: MyType) {
  return x.length;
}

console.log(숙제2_6_1_b("1234"));
console.log(숙제2_6_1_b(["1234", "1234"]));

// 숙제2. string 타입을 object 타입으로 변환
interface 숙제2_6_2_a {
  name: string;
  age: number;
}

let 숙제2_6_2_b = '{"name" : "dog", "age": 1}';

function 숙제2_6_2_c<MyType extends 숙제2_6_2_a>(data: string): MyType {
  return JSON.parse(data);
}

console.log(숙제2_6_2_c<숙제2_6_2_a>(숙제2_6_2_b));

// 숙제3. class의 속성에 타입을 generic으로 설정하기
class 숙제2_6_3_a<MyType> {
  name: MyType;

  constructor(a: MyType) {
    this.name = a;
  }
}

let 숙제2_6_3_b = new 숙제2_6_3_a<string>("어쩌구");
console.log(typeof 숙제2_6_3_b.name);

let 숙제2_6_3_c = new 숙제2_6_3_a<number>(123);
console.log(typeof 숙제2_6_3_c.name);

let 숙제2_6_3_d = new 숙제2_6_3_a<string[]>(["어쩌구", "저쩌구"]);
console.log(typeof 숙제2_6_3_d.name);
