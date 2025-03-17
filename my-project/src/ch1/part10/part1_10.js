var 네모10_1;
var 네모10_2;
var 학생10_1 = { name: "kim" };
var 선생10_1 = { name: "kim", age: 20 };
var 상품객체10_1 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
console.log(상품객체10_1);
var 장바구니10_2 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
console.log(장바구니10_2);
var 상품객체10_3 = { product: "청소기", price: 7000, card: false };
console.log(상품객체10_3);
var 계산기객체10_4 = {
    plus: function (a, b) { return a + b; },
    minus: function (a, b) { return a - b; },
};
console.log(계산기객체10_4.plus(10, 2));
console.log(계산기객체10_4.minus(10, 2));
