//07 기본 연산자와 수학
//단항연산
let x = 1;
x = -x;
console.log(x);//단항연산자 실행 -1

let a = 1, b = 2;
console.log(a+2);//이항 3

//거듭제곱근
console.log(2**2);
console.log(2**5);
console.log(2**4);

//거듭제곱근의 제곱근
console.log(4**(1/2));// 2( 1/2 거듭제곱의 제곱근)
console.log(8**(1/3));// 2 (1/3 거듭제곱의 세제곱근)

//이항연산자 + 와 문자열
let s = "my"+ "string"
console.log(s);
console.log(1+"score");

//이항연산자 / * 완 문자열
console.log(3 / '6');
console.log(4 * '9');

//이항연산자 시 숫자형변환 하는지 확인
console.log(3 / '문자열형변환 맞나요?'); //NaN



//단항연산자 + 숫자 형변환
let apples = '2';
let oranges = '3';
console.log( +apples + +oranges);


//할당연산자
let assign = 2+2*1;
console.log(assign);

//값으로 반환하는 할당 연산자
let returnValue1 = 1;
let returnValue2 = 2;

let returnResult = 3 - (returnValue1 = returnValue2+1);

console.log(returnValue1);//3
console.log(returnResult);//0


//할당연산자를 아래와 같이 여러개로 연결할 수 있다.
let returnChain1,returnChain2,returnChain3;

returnChain1 = returnChain2 = returnChain3= 2 + 2;

console.log(returnChain1);//4
console.log(returnChain2);//4
console.log(returnChain3);//4

//표현식이 할당연산식보다 우선순위가 높아서 가능하다.
//할당순서는 좌측 c,b,a 순서대로 할당

//위와같이 체이닝할 경우 가독성이 떨어짐으로 아래와같이 하는게 좋다

returnChain3 = 2 + 2;
returnChain2 = returnChain3;
returnChain1 = returnChain3;


//복합연산자
//복합연산자는 할당연산자와 우선순위가 동일하다

let complexOperator = 2;

complexOperator *= 3+5; //16 복합연산자는 우선순위가 낮기 때문 complexOperater*=8과 동일하다에.

console.log(complexOperator);


//증가/감소연산자
let counter = 2;
counter++;//3
console.log(counter);//2

//후위형과 전위형의 차이
//둘다 감소 증가 후 값을 반환의 차이이다.
//전위형 : 새로운 값을 반환한다.
++counter;//4
console.log(counter);//4
//후위형 : 기존값을 반환한다,
counter++;//5
console.log(counter);//5

//전위형 후위형 예측
counter++;//6
++counter;//7
console.log(counter);//7

//다른 연산자 사이의 증감연산자
//가능을 하지만 가독성을 위해 코드한줄에 특정코드 하나씩 하는 것이 좋다,
console.log(2 * ++counter);//16


//과제
//덧셈고치기
let promptA = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let promptB = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

alert(+promptA + +promptB);