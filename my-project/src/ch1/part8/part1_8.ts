// 비슷한 object를 많이 만들게 된다면 class를 만들어 쓰는 것이 좋다.
// this는 기계로부터 생성되는 object (instance)
function 기계(q: string, w: string) {
  this.q = q;
  this.w = w;
}

기계.prototype.name = "kim";

// 기계 객체 생성
var nunu = new 기계("consume", "snowball");
console.log(nunu);

var garen = new 기계("strike", "courage");
console.log(garen);

class Hero {
  // field
  q: string;
  w: string;

  // constructor
  constructor(q: string, w: string) {
    this.q = q;
    this.w = w;
  }
}

var man1 = new Hero("hi", "bye");
console.log(man1);

var man2 = new Hero("hi1", "bye2");
console.log(man2);

// Hero.prototype.name = "park"; -> 클래스는 안된다.

// 배열 선언 및 초기화
var 배열1 = [4, 2, 1];

// 위의 코드가 내부적으로 아래 코드처럼 작동한다.
var 배열2 = new Array(4, 2, 1);

// sort()는 Array의 함수이다.
배열2.sort();
console.log(배열2);

/* Array.prototype.함수8_1 = function () {
  console.log("hello");
};
배열2.함수8_1(); */
