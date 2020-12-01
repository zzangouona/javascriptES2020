/*
    Created by JungYunAh Hello!
    ProjectName : javascriptES2020
    Date        : 2020/12/02 1:26 오전
    Notion      : https://www.notion.so/a68b9e1475634c1389447ef8f34111b4?v=de124104486840189d382bb67efcffb4
    Github      : http://github.com/zzanunada
    Description :
*/
"use strict";
//2. 숫자형
// 숫자를 입력하는 다양한 방법
let billion = 1000000000;
let billion_e = 1e9; // 10억, 1과 9개의 0
if (billion == billion_e) console.log("둘다 10억");
console.log(7.3e9); // 73억

// e 소수점 표현
let ms = 0.000001;
let ms_e = 1e-6; // 1에서 왼족으로 6번 소수점 이동
if (ms == ms_e) console.log("둘다 같다");

// 점두래와 메소드 호출(숫자 자체로 메소드 호출하기)

console.log((1234).toString(36));

// 어림수 구하기
let num_math = 3.145;
console.log("----어림수 구하기---");
console.log(Math.floor(num_math)); // 소수점 첫번째 자리에서 내림
console.log(Math.ceil(num_math)); // 소수점 첫번째 자리에서 올림
console.log(Math.round(num_math)); // 소수점 처번째 자리에서 반올림
console.log(Math.trunc(num_math)); // 소수부 버림

// isNaN 과 isFinite
let str = "sdfadf";
let str_num = "234234";
let num_yes = 1234;
let num_null = null;
let num_zero = 0;

// isNaN
// 인수를 숫자로 변환 후 NaN인 경우만 true 로 반환
console.log("----isNaN----");
console.log(isNaN(str)); // true
console.log(isNaN(str_num)); // false
console.log(isNaN(num_yes)); // false
console.log(isNaN(num_null)); // false
console.log(isNaN(num_zero)); // false
console.log(isNaN(undefined));

// isFinite
// 인수를 숫자로 변환 후 숫자인 경우만 true 로 반환
console.log("----isFinite----");
console.log(isFinite(str)); // false
console.log(isFinite(str_num)); // true
console.log(isFinite(num_yes)); // true
console.log(isFinite(num_null)); // true
console.log(isFinite(num_zero)); // true
console.log(isFinite(undefined)); // false

// Object.is
// === 와 비슷한 기능으로 더 신뢰한 기능이라고한다.
// === 와 다른 점
console.log("----Object.is----");
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
console.log(Object.is(0, -0)); //false
console.log(0 === -0); //true

console.log("---parseInt parseFloat---");
// parseInt 와 parseFloat
// 숫자를 형변형할 경우 + , Number 를 사용하는데 이 두 기능은 숫자만 들어가야하는 엄격한 규칙이 있다.
// parseInt 와 parseFloat 는 이 + Number 보다 비교적 규칙이 느슨하다,
// 숫자를 읽다가 오류를 발견하면 기존에 읽던 숫자만 형변환을 하여 반환한다.
// 따라서 100px 100원 등 숫자 뒤에 붙어 있는 문자열을 무시하고 숫자만 추출할 수 있다.
// parseInt => 정수를 반환
// parseFloat => 부동 소수점을 반환

console.log(parseInt("100000[sdfsdf"));
console.log(parseFloat("1.23423djfsfjooew"));

console.log(parseInt("123.43434")); // 정수 부분만 반환
console.log(parseFloat("1234.5.6.7.")); // 첫번 째 콤마만 반환
console.log(parseInt("a1231231")); // NaN a 가 숫자가 아니여서 읽는걸 중지한다.

console.log("---기타 수학 함수 ----");
console.log(Math.random()); // 0 1 난수
console.log(Math.max(1, 5, 6, 3, 2, 23, 1, 211, 234));
console.log(Math.min(5, 6, 3, 2, 1, 2, 3, 4, 5, 6, 3, 4, 5, 3, 1));

console.log("----과제----");

function readNumber() {
  let getNum;
  do {
    getNum = prompt("숫자를 입력해주세요.");
  } while (!isFinite(getNum));
  if (getNum == "" || getNum == null) return null;
  return +getNum;
}

console.log(readNumber());
