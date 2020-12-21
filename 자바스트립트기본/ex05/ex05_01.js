/*
    Created by JungYunAh Hello!
    ProjectName : javascriptES2020
    Date        : 2020/12/20 5:53 오후
    Notion      : https://www.notion.so/a68b9e1475634c1389447ef8f34111b4?v=de124104486840189d382bb67efcffb4
    Github      : http://github.com/zzanunada
    Description :
*/
'use strict'
//재귀와 스택

let company = { // 동일한 객체(간결성을 위해 약간 압축함)
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

// 급여 합계를 구해주는 함수
function sumSalaries(department) {
    console.log("department")
    console.log(department)
    if (Array.isArray(department)) { // 첫 번째 경우
        return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
    } else { // 두 번째 경우
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
        }
        return sum;
    }
}

console.log(sumSalaries(company)); // 7700

// 과제1
console.log("===과제1===")

function sumTo(n) {
    if(n==1) return 1;
    return n + sumTo(n-1)
}

console.log( sumTo(100) ); // 5050

// 과제2
console.log("====과제2====");
//팩토리얼 계산하기
// n! = n * (n - 1) * (n - 2) * ...*1
function factorial(n){
    if(n==1) return 1;
    return n * factorial(n-1)
}
console.log(factorial(5) )

//과제 3
console.log("====과제3====");
// 피보나치 수 계산하기
// Fn = Fn-1 + Fn-2
function fib(n){
    return n <= 1 ? n: fib(n-1)+ fib(n-2);
}
console.log(fib(7))

// 과제 4
console.log("====과제4====")
// 단일 연결 리스트
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list){
    console.log(list.value);
    if(list.next){
        printList(list.next);
    }
}
printList(list)