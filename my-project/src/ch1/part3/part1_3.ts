// Type이 하나로 확정되지 않았을 경우, Type Narrowing을 써야 한다.
// TypeNarroing: if문 등으로 타입을 하나로 지정하는 것것

// typeof 해당 변수의 타입을 확인할 수 있는 키워드
// in이나 instanceof 키워드드도 사용 가능하다.
function 함수1(x: number | string) {
  // return x + 1; -> number인지 string인지 몰라 컴파일 에러가 난다.
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}
// 함수1(123);

function 함수2(x: number | string) {
  let array: number[] = [];
  // array[0] = x; -> 배열에 넣을 값이 number인지 string인지 몰라 컴파일 에러가 난다.
  if (typeof x === "number") {
    array[0] = x;
  }
}
// 함수2(123);

// assertion 문법의 용도
/*
    1. Narrowing할 때 쓴다.
    2. 무슨 타입이 들어올 지 100% 확실할 때 쓴다.
    3. assertion 대신 if문을 쓰는 것이 좋다.
*/
function 함수3(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
  console.log(array);
}
// 함수3("123");

// 숙제1
function 숙제1(x: (number | string)[]): number[] {
  return x.map((v: number | string) => (typeof v === "string" ? Number(v) : v));
}

// console.log(숙제1(["1", 2, "3"]));

// 숙제2
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

function 숙제2(x: { subject: string | string[] }): string {
  return x.subject instanceof Array
    ? x.subject[x.subject.length - 1]
    : typeof x.subject === "string"
    ? x.subject
    : "없쪄";
}

console.log(숙제2({ subject: "math" }));
console.log(숙제2({ subject: ["science", "art", "korean"] }));
// console.log(숙제2({ hello: "hi" }));
