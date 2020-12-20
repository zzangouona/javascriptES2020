/*
    Created by JungYunAh Hello!
    ProjectName : javascriptES2020
    Date        : 2020/12/03 1:43 오전
    Notion      : https://www.notion.so/a68b9e1475634c1389447ef8f34111b4?v=de124104486840189d382bb67efcffb4
    Github      : http://github.com/zzanunada
    Description :
*/
'use strict'
// 04. 배열
// pop, push shift unshift
console.log("---pop, push shift unshift---")
let fruits = ["사과","배","포도","참외","라임","오렌지"]
fruits.push("샤인머스켓") // 뒤에서 부터 추가
console.log(fruits)
fruits.unshift("수박") // 앞쪽 추가
console.log(fruits)
fruits.pop() //마지막 Index 제거
console.log(fruits)
fruits.shift()// 첫번째 index 제거
console.log(fruits)

console.log("---반복문---")
// push, pop 이 unshift shift 보다 빠르
// 반복문
// 값으로 반복
for(let fruit of fruits){
    console.log(fruit)
}
// 인덱스 반복문
for(let key in fruits){
    console.log(fruits[key])
}
// 하지만 배열에는 for in을 쓰지 않는게 좋다.
// 이유 : 배열에는 for in은 모든 프로퍼티를 대상으로 순회하는 키와 값아닌 유사 배열 즉 length와 같은 프로퍼티도
//      해당하기때문에 for of을 사용하는게 좋다.
// 즉 for in 은 객체에 사용할때 좋고 for of 은 배열에 사용할때 좋다!

console.log("---과제1---")
/*
배열과 관련된 연산
중요도: 5
배열과 관련된 다섯 가지 연산을 해봅시다.

요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
"Rock-n-Roll"을 배열 끝에 추가합니다.
배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
배열의 첫 번째 요소를 꺼내서 출력합니다.
"Rap"과 "Reggae"를 배열의 앞에 추가합니다.
단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 합니다.
 */

let styles = ["Jazz","Blues"]
console.log(styles)
styles.push("Rock-n-Roll")
console.log(styles)
styles[Math.floor(styles.length/2)] = "Classics"
console.log(styles)
styles.shift()
console.log(styles)
styles.unshift("Rap", "Reggae")
console.log(styles)


console.log("---과제2----")
/*
입력한 숫자의 합 구하기
중요도: 4
아래 조건을 만족하는 함수 sumInput()을 작성해 봅시다.

prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장합니다.
숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
배열 요소의 합을 계산하고 리턴합니다.
주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 합니다.
 */

function sumInput(){
    let sumArr = []
    while (true){
        let strNum = prompt("숫자를 입력해주세요")
        if(strNum==''|| strNum == null||!isFinite(strNum)) break
        sumArr.push(strNum)
    }
    let sum = 0
    for(let num of sumArr){
        sum += +num
    }
    return sum
}

console.log(sumInput())