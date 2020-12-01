//숫자형
//과제
/*
수를 입력받아 덧셈하기
중요도: 5
사용자에게 두 수를 입력받고, 두 수의 합을 출력해주는 스크립트를 작성해보세요.

데모 실행하기

P.S. 자료형에 주의하여 함정에 빠지지 않도록 하세요.
 */
console.log("과제1");
let firstNum = +prompt("첫번째 숫자를 입력하세요.");
let secondNum = +prompt("두번째 숫자를 입력하세요.");

let resultSum = firstNum + secondNum;

console.log(resultSum);

console.log("과제2");

/*
 숫자를 입력할 때까지 반복하기
 중요도: 5
 사용자가 유효한 숫자형 값을 입력할 때까지 계속 입력받는 함수 readNumber 를 만들어보세요.

 반환되는 값은 꼭 숫자형 값이어야 합니다.

 사용자가 아무 입력도 하지 않거나 '취소’를 누르면 입력받기를 멈추고 null을 반환하세요.
*/

function readNumber() {
  let userNumber;
  do {
    userNumber = prompt("숫자를 입력하세요.");
  } while (!isFinite(userNumber));
  if (userNumber == null || userNumber === "") return null;
  return +userNumber;
}

alert(`내가 선택한 숫자는 : ${readNumber()}`);
