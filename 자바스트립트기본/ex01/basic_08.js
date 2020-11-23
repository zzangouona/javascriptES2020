//비교연산자

//1. 불린형반환
//비교연산자는 불린 형을 반환한다.
console.log(2 > 1)    //true
console.log(2 == 1)   //false
console.log(2 != 1)   //true

//2.문자열비교
//문자열을 사전순으로 비교한다.
console.log("H" > "A");//true
console.log("Hello" > "Helle");//true
console.log("Hello" > "Hel");//true

//다른형을 가진 값 비교
//자료형이 다를 경우 숫자형으로 변환하여 비교한다.
console.log("2" > 1); // true;
console.log("01" == 1); // true;

//boolean형인 경우 true는 1 false = 0
console.log(true > 0); //true
console.log(false == 0);//true

//일치연산자
//엄격하 형변환 없이 비교하는 연산자

console.log("1" === 1);//false;
console.log(0 === false) //false;