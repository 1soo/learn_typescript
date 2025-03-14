var 제목 = document.querySelector("#title");
// narrowing1
if (제목)
    제목.innerHTML = "반가워요";
// narrowing2
if (제목 instanceof Element)
    제목.innerHTML = "반가워요";
// narrowing3 - 어떤 값이든 as 뒤의 클래스로 취급해주세요 (비상시 사용)
var 제목2 = document.querySelector("#title");
// narrowing4 - 값이 null일 경우 undefined가 던져진다.
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = "반가워요";
}
// narrowing5 - config 파일에서 strict 모드 해제
// narrowing을 상세히 해야 하는 경우도 있다. - Element 타입은 많이 든 것이 없다.
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
// narrowing6 - 데이터가 있으면 처리하고, 없으면 이 자리를 undefinedf로 대체한다.
var 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
// 숙제1 - 버튼을 누르면 이미지를 바꾸기
var 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
}
// 숙제2 - 바꾸고 싶은 html 요소가 많다.
var 이미지들 = document.querySelectorAll(".naver");
이미지들.forEach(function (value) {
    if (value instanceof HTMLAnchorElement) {
        value.href = "https://kakao.com";
    }
});
