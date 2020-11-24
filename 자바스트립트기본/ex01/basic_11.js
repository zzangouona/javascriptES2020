//null 병합 연산자 '??"
//null 병합 연산자 없이 작성한 예시
let a = null,
    b = "b";
let getText = (a != null && a != undefined) ? a : b;
console.log(getText);

//위의 코드를 null 병합 연산자 ?? 로 바꾸면 다음과 같다.

getText = a ?? b;
console.log(getText);

//null 병합 연산자 체잉

let firstletter = null;
let secondletter = null;
let thirdletter="hi";

let getLetterText = firstletter ?? secondletter ?? thirdletter ?? "Notiong Letter Text";

console.log(getLetterText);

//or이랑 같은 것인가? => 다르다

let isSameOR = 0;

console.log(isSameOR || 100); //100
console.log(isSameOR ?? 100); // 0

