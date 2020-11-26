'use strict'
//'new' 연산자와 생성자 함수
//과제
/*
함수 두 개로 동일한 객체 만들기
중요도: 2
new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요?
 */

let obj = {};
function A(){
    return obj;//obj를 참조한다.
}
function B(){
    return obj;//obj를 참조한다.
}

let a = new A();
let b = new B();

console.log(a==b);
//과제2
/*

아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.

read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장합니다.
sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다.
 */

console.log("과제2")
function Calculator(){
    this.read = function (){
        this.firstNum = +prompt("첫번째 숫자를 입력하세요", 0 );
        this.secondNum = +prompt("두번째 숫자를 입력하세요", 0 );
    };
    this.sum = function () {
        console.log(this.firstNum+" "+this.secondNum+"\n");
        return this.firstNum += this.secondNum;
    };
    this.mul = function (){
        console.log(this.firstNum+" "+this.secondNum+"\n");
        return this.firstNum *=  this.secondNum;
    };
}

let calculator = new Calculator();
calculator.read();

console.log(calculator.sum());
console.log(calculator.mul())


//과제3
/*
생성자 함수 Accumulator(startingValue)를 만들어 보세요.

Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건을 충족해야 합니다.

프로퍼티 value에 현재 값(current value)을 저장합니다. 최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아옵니다.
메서드 read()에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더해줍니다.
프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장됩니다.

데모를 위한 코드는 다음과 같습니다.
 */

console.log("과제3")
function Accumulator(startingValue){
    this.value =  startingValue;
    this.read = function () {
        this.value += +prompt("숫자를 입하세요.",0);
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);