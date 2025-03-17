// narrowing 추가 방법
// 1. undefined는 false로 처리되기 때문에, 조건에 파라미터를 넣어도 된다.
function 함수(a: string | undefined) {
  // a가 undefined면 if문 실행 x, string이면 실행
  if (a && typeof a === "string") {
  }
}

// 2. in 키워드로 object narrowing 가능
type Fish = { swim: string };
type Bird = { fly: string };

function 함수(animal: Fish | Bird) {
  // typeof 연산자는 number, string, object 등의 간단한 연산자만 사용 가능
  if ("swim" in animal) {
    animal.swim;
  }
}

// 3. instanceof 연산자로 object narrowing 가능
let 날짜 = new Date();
if (날짜 instanceof Date) {
}

// 4. object 마다 literaltype을 만들어둔다.
type Car = {
  wheel: "4개";
  color: string;
};

type Bike = {
  wheel: "2개";
  color: string;
};
function 함수(x: Car | Bike) {
  if ("wheel" in x && x.wheel === "4개") {
    // Car 타입 narrowing
    console.log("x는 Car 타입이에요");
  }
}
