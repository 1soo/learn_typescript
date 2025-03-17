// restparameter 타입지정
function 함수(...a) {
  console.log(a); // [1, 5, 3, 5, 6, 6]
}

함수(1, 5, 3, 5, 6, 6);

// 타입 제한
function 함수1(...a: number[]) {
  console.log(a);
}

// 배열 붙이기
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5]

// destructuring
// array destructuring
let [변수1, 변수2] = ["안녕", 100];
console.log(변수1); // 안녕

// object destructuring
var { student: student, age: age } = { student: true, age: 20 };
// 이름이 같으면 생략 가능
var { student, age } = { student: true, age: 20 };

// function destructuring
function 함수({ student, age }) {
  console.log(student, age);
}
let 오브젝트 = { student: true, age: 20 };
함수({ student: true, age: 20 });
함수(오브젝트);

// 숙제1
function 함수1(...values: number[]): number {
  let max = 0;
  values.forEach((value) => {
    max = value > max ? value : max;
  });
  return max;
}

console.log(함수1(6, 3, 7, 2));

// 숙제2
interface 인터페이스2 {
  user: string;
  comment: number[];
  admin: boolean;
}

let 객체2: 인터페이스2 = { user: "kim", comment: [3, 5, 4], admin: false };

function 함수2({ user, comment, admin }: 인터페이스2) {
  console.log(`(${user}, [${comment}], ${admin})`);
}

함수2(객체2);

function 함수2_1({ user, comment, admin }) {
  console.log(`(${user}, [${comment}], ${admin})`);
}

함수2_1({ user: "kim", comment: [3, 5, 4], admin: false });

// 숙제3
function 함수3([a, b, c]: [number, string, boolean]) {
  console.log(`[${a}, ${b}, ${c}]`);
}

함수3([40, "wine", false]);
