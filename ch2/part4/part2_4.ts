class User2_4 {
  private familyName: string = "김";
  public name: string;
  private name1: string;

  constructor(name: string, name1: string, public name2: string) {
    this.name = this.familyName + name;
    this.name1 = this.familyName + name1;
  }

  성씨변경함수(familyName: string) {
    this.familyName = familyName;
    this.name = familyName + this.name.slice(1);
  }
}

let 유저2_4_1 = new User2_4("철수", "영희", "훈이");
// public 변수에 값 설정
// 유저2_4_1.name = "민수";

// private 변수에 값 설정
// 유저2_4_1.name1 = "반가워요"; => 접근 권한이 허용되지 않아 컴파일 에러 발생

console.log(유저2_4_1.name);
유저2_4_1.성씨변경함수("이");
console.log(유저2_4_1.name);

console.log(유저2_4_1.name2);

class User2_4_1 {
  x = 10;
}

// class 복사
class NewUser2_4_1 extends User2_4_1 {}

let 사람2_4_1 = new NewUser2_4_1();
console.log(사람2_4_1);

class User2_4_2 {
  // 현재 클래스에서만 접근 가능
  private x = 10;
  // 자식 클래스에서도 접근 가능
  protected y = 20;
}

class NewUser2_4_2 extends User2_4_2 {
  doThis() {
    this.y = 20;
  }
}

// static을 사용함으로써 자식들이 물려받 않는다.
class User2_4_3 {
  static x = 10;
  y = 20;
}

let 자식2_4_1 = new User2_4_3();
console.log(자식2_4_1);
console.log(User2_4_3.x);

class User2_4_4 {
  static skill = "js";
  intro = User2_4_4.skill + "전문가입니다.";
}

let 철수2_4_4 = new User2_4_4();
console.log(철수2_4_4);

User2_4_4.skill = "ts";
let 철수2_4_5 = new User2_4_4();
console.log(철수2_4_5);

// 숙제1. 다음 x, y, z 속성의 특징을 설명해보시오.
class 숙제2_4_1 {
  private static x = 10; // 1
  public static y = 20; // 2
  protected z = 30; // 3
}

// 1. 클래스 내부에서만 사용되는 상수 같은 값이다.
// 2. 클래스 외부에서도 객체 생성 없이 접근 가능한 클래스의 고유한 값이다.
// 3. 클래스 자신의 객체와 자신을 상속받은 자식의 객체에서 접근 가능한 필드이다.

// 숙제2. x속성에 숫자를 더해주는 함수가 필요하다.
class 숙제2_4_2 {
  private static x = 10;
  public static y = 20;

  public static addOne(value: number) {
    this.x += value;
  }

  public static printX(): void {
    console.log(숙제2_4_2.x);
  }
}

숙제2_4_2.addOne(3);
숙제2_4_2.addOne(4);
숙제2_4_2.printX();
