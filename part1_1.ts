// 변수 타입
let 이름 = "kim";
var 이름2 = "kim";
const 이름3 = "kim";

// 타입 종류
// string, number, boolean, null, undefined..
let 이름4: string = "kim";

// string에 number를 넣지 못하기 때문에 컴파일 에러가 난다.
// 이름 = 123;

let 나이: number = 50;
let 결혼했니: boolean = true;
let 결혼했니2: null = null;
let 결혼했니3: undefined = undefined;

let 회원들: string[] = ["kim", "park"];
let 회원들2: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// 타입 스크립트 갓 배운 사람 특징 : 온갖 곳에 다 타입 지정함.
// 타입 스크립트에서 타입지정은 원래 자동으로 된다.
let 회원들3 = [1, 2, 3]; // number[]

// 퀴즈 1번
let n: string = "김한수";
let a: number = 27;
let b_l: string = "태백시?";

// 퀴즈 2번
let favorite: { song: string; singer: string } = {
  song: "기억의 습작",
  singer: "전람회",
};

// 퀴즈 3번
let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
