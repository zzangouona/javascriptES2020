//04.자료형
let n = 123;
n = 123.45;

//infinity : 무한대

console.log(1/0);//0으로 나누면 무조건 무한대
console.log(Infinity);//직점 참조 가능

//NaN -> 계산 중 에러가 발생했다고 알려주는 값
console.log("문자열"/0);//문자열을 숫자로 나누면 오류 발생


//문자형

let str = "Hello";
let str2 = "Hello my name is YunAh";
let phrase = `my school is ${str}`; //백틱
let appleNum = `사과 개수는 : ${1+2}`; //표현식
console.log(str, str2, phrase, appleNum);

//05.alert, prompt, confirm을 이용한 상호작용

alert("Hello");

let age = prompt("나이를 선택해주세요.");
alert(`당신의 나이는 ${age} 입니다.`);

let isBoss = confirm("당신은 주인은 누구인가요?");
alert(isBoss);

//과제
//사용자에게 이름을 물어보고, 입력받은 이름을 그대로 출력해주는 페이지를 만들어 보세요.
const PROMPT_USERNAME = "이름이 무엇입니까?";
let userName = prompt(PROMPT_USERNAME);
alert(`사용자 이름은 ${userName} 입니다.`)



