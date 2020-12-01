'use strict'
//메서드와 "This"
//과제
/*
calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.

read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
sum()은 저장된 두 값의 합을 반환합니다.
mul()은 저장된 두 값의 곱을 반환합니다.
 */

let calculator = {
    firstNum : 0,
    secondNum : 0,
    read : () => {
        this.firstNum= +prompt("첫번째 값을 입력하세요");
        this.secondNum = +prompt("두번째 값을 입력하세요.");
    },
    sum: () => this.firstNum+=this.secondNum,
    mul: () => this.firstNum*=this.secondNum,
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());