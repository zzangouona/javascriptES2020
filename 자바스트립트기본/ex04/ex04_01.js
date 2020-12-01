/*
    Created by JungYunAh Hello!
    ProjectName : javascriptES2020
    Date        : 2020/12/01 7:40 오후
    Notion      : https://www.notion.so/a68b9e1475634c1389447ef8f34111b4?v=de124104486840189d382bb67efcffb4
    Github      : http://github.com/zzanunada
    Description :
*/
'use strict'
// 1. 원시값의 메서드
//- 자바스크립트는 원시값(문자열, 숫자 등)을 마치 객체처럼 다룰 수 있게 한다.
// 함수를 프로퍼티로 저장하기
let user = {
    name : "John",
    sayHi : function(){
        console.log("만나서 반가워");
    }
}
user.sayHi()

// 원시값을 객체처럼 사용하기
// 기존 원시값을 작업할때 메서드를 사용하면 편할것 같다는 아이디어에서 착안해서 만든 방법
// 원시값이 프로퍼나 메서드에 접근하면 "원시 래퍼 객체"로 잠시 변환된다.
// toUpperCase()

let upperWord = "hello"; //원시값
console.log(upperWord.toUpperCase())
// 원시값인 upperWord 가 프로퍼티 toUpperCase를 접근하면 그 순간 특별한 객체인 래퍼 객체로 변환해 이 메서드가 실행횐다.
// 그리고 문자열이 변환되고 해당 메서드가 종료되면 다시 원시값 형태로 돌아온 후 HELLO 라는 문자열이 반환된다.

// 소수점 반올림 메소드 toFixed(n)
let num = 1.2345
num.toFixed(2) // 1.235
console.log(num)

// 래퍼 객체 직접 만들기
// 자바스크립트에 혼동을 일으키기 때문에 추천하고 싶지 않는 방법
console.log(typeof 0) // number
console.log(typeof new Number(0)) // object

let zero  = new Number(0);
if(zero){ // zero 가 object 임으로 참이다
    console.log("참입니다.")
}

