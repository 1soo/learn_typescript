class Person9_1 {
  // 클래스 필드 값 (constructor과 똑같은 역할)
  data = 0;
  name: string;

  constructor(name: string) {
    // this.필드로 접근할 땐 필드의 값만 접근할 수 있다.
    this.name = name;
  }

  함수(v: string) {
    console.log("안녕" + v);
  }
}

let 사람1 = new Person9_1("kim");
let 사람2 = new Person9_1("park");

console.log(사람1);
사람1.함수(" 반가워");

// 숙제1
class Car9_1 {
  model: string;
  price: number;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax() {
    console.log(this.price / 10);
  }
}

let car9_1 = new Car9_1("소나타", 3000);
console.log(car9_1);
car9_1.tax();

// 숙제2
class Word9_1 {
  num: number[];
  str: string[];

  constructor(...values: (number | string)[]) {
    this.num = new Array();
    this.str = new Array();

    values.forEach((value) => {
      if (typeof value === "number") {
        this.num.push(value);
      } else if (typeof value === "string") {
        this.str.push(value);
      }
    });
  }
}

let obj9_1 = new Word9_1("kim", 9, 5, "park");
console.log(obj9_1);
