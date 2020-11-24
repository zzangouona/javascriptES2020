//if'?" 사용한 조건처리
let year = prompt("ECMASCript-2015 명세 몇년도에 출판되었습니까?");

if (year == 2015) {
    console.log("정답입니다.");
} else if (year < 2015) {
    console.log("숫자를 좀더 올리세요.");
} else if (year > 2015) {
    console.log("숫자를 좀 더 내리세요.");
} else {
    console.log("틀렸습니다.")
}

//조건부 ? = 삼항 연사자 만들기
let accessAllowed;
let age = prompt("나이를 입력해 주세요.", "");

if (age > 18) accessAllowed = true;
else accessAllowed = false;
console.log(accessAllowed);


//다중 ? 조건부
let age2 = prompt('나이를 입력해주세요.', 18);
let message = (age2 < 3) ? '아기야 안녕?' : (age2 < 18) ? '안녕!' : (age2 < 100) ? '환영합니다!' : '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
console.log(message);

//과제1
let javascriptName = prompt("자바스크립트 공식 명칭은 무엇입니까? ","");

if(javascriptName=="ECMAScript") {
    alert("정답입니다.");
} else{
    alert("모르셨군? 정답은 ECMAScript입니다.");
}

//과제2
let getNum = prompt("숫자를 입력하세요.");
if(getNum>0) alert(1);
else if(getNum < 0) alert(-1);
else  alert(0)

//과제3
let result03 = a+b<4 ? "미만" : "이상";

//과제4
let login ="";
let message04 = login=="직원" ? "안녕하세요." : (login=="임원") ? "환영합니다." : (login=="") ? "로그인이필요합니다." : "";


