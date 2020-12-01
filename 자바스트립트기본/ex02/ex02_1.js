//1. 객체
//과제
/*
과제 1번
객체야 안녕?
중요도: 5
코드 한 줄로 아래 문제를 각각 풀어보세요.

빈 객체 user를 만듭니다.
user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
name의 값을 Pete로 수정해보세요.
user에서 프로퍼티 name을 삭제하세요.
 */

console.log("과제1")
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user;

/*
객체가 비어있는지 확인하기
중요도: 5
객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.

아래와 같이 동작해야 합니다.
 */

let schedule = {};
let isEmpty = (obj)=>{
    for(let key in obj){
        return false;
    }
    return true;
};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


/*

모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요. sum엔 390이 저장되어야겠죠?

주의: salaries가 비어있다면 sum에 0이 저장되어야 합니다.
 */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(let key in salaries){
    sum+= obj.data;
}

/*
프로퍼티 값 두 배로 부풀리기
중요도: 3
객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.

 */

// 함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// 함수 호출 후
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

function multiplyNumeric (obj) {
    for (let key in obj) {
        if(typeof obj[key] =="number")
            obj[key]*=2;
    }
}