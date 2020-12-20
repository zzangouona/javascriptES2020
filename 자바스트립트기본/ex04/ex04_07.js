/*
    Created by JungYunAh Hello!
    ProjectName : javascriptES2020
    Date        : 2020/12/19 6:25 오후
    Notion      : https://www.notion.so/a68b9e1475634c1389447ef8f34111b4?v=de124104486840189d382bb67efcffb4
    Github      : http://github.com/zzanunada
    Description :
*/
"use strict";
// 맵과 셋
console.log("========MapR============")
// 맵(Map)은 키가 있는 데이터를 저장한다는 점에서 객체와 유사합니다. 다만, 맵은 키에 다양한 자료형을 허용한다는 점에서 차이가 있습니다
let map = new Map();

map.set("1", "strit"); //문자형 키
map.set(1, "hihih"); //숫자형 키
map.set(true, "hello22"); //불린형 키

console.log(map.get("1"));
console.log(map.get(1));
console.log(map.size);

// 맵은 키로 객체도 허용한다.
let jorn = { name: "horn" };
let visitsCountMap = new Map();

// 맵의 키로 객체 사용
visitsCountMap.set(jorn, 123);
console.log(visitsCountMap.get(jorn));

//체이닝
visitsCountMap.set("123", 45).set("hello", "윤아").set(12, "ehj");
console.log(visitsCountMap.size);

// 맵의 요소에 반복 작업하기
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);


// 키를 대상으로 순회
for (let vegetable of recipeMap.keys()){
    console.log(vegetable);//안녕하세요
}

// 값을 대상으로 순회
for (let amount of recipeMap.values()){
    console.log(amount);
}

// 키, 값 쌍으로 순회
for(let entry of recipeMap.entries()){
    console.log(entry);
}

// 객체를 맵으로 바꾸기
// Object.entries
let obj = {
    name : "yunAh",
    age : 30
}
let objectToMap = new Map(Object.entries(obj))
console.log(objectToMap.get("name"))


// 맵을 객체로 바꾸기
// Object.fromEntries

let mapToObject = Object.fromEntries([
    ["name", "hello"],
    [1,"34534"],
    [true,"intrue"]
]);
// let mapToObjec = Object.fromEntries(map.entries());
console.log(mapToObject.name);

console.log("========Set============")
// 셋
// 셋(Set)은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션입니다. 셋에 키가 없는 값이 저장됩니다.
let set_user = new Set();
let set_johb = {name:"John"};
let set_petb = {name:"petb"};
let set_mary = {name : "Mary"};
// 중복 허용하지 않는 컬렉션
set_user.add(set_johb);
set_user.add(set_petb);
set_user.add(set_mary);
set_user.add(set_johb);
set_user.add(set_petb);
set_user.add(set_mary);
set_user.add(set_johb);

console.log(set_user.size); // -> 중복값을 허용하지 않기에 사이즈가 3이 나온다.
for(let user of set_user){ //Set은 키 값이 없다.
    console.log(user.name)
}

// set 반복 작업하기
let set_fruit = new Set(["apples","bananas","strawberry"]);
set_fruit.forEach((value, valueAgain, set )=> {
    console.log(value);
    console.log(valueAgain);
    console.log(set);
});

for(let fruit of set_fruit.values()){
    console.log(fruit);
};


for (let user of set_user.values()){
    console.log(user);
}
console.log("====Object.keys, values, entries===")
//Object.keys, values, entries
/*
일반 객체엔 다음과 같은 메서드를 사용할 수 있습니다.

Object.keys(obj) – 키가 담긴 배열을 반환합니다.
Object.values(obj) – 값이 담긴 배열을 반환합니다.
Object.entries(obj) – [key, value] 쌍이 담긴 배열을 반환합니다.

 */
let user = {
    name: "John",
    age: 30
};

// 값을 순회합니다.
for (let value of Object.values(user)) {
    console.log(value); // John, 30
}

// 객체 변환 하기
/* 객체엔 map, filter 같은 배열 전용 메서드를 사용할 수 없습니다.
하지만 Object.entries와 Object.fromEntries를 순차적으로 적용하면 객체에도 배열 전용 메서드 사용할 수 있습니다. 적용 방법은 다음과 같습니다.
Object.entries(obj)를 사용해 객체의 키-값 쌍을 요소로 갖는 배열을 얻습니다.
1.에서 만든 배열에 map 등의 배열 전용 메서드를 적용합니다.
2.에서 반환된 배열에 Object.fromEntries(array)를 적용해 배열을 다시 객체로 되돌립니다.*/

let price = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrice = Object.fromEntries(
    Object.entries(price).map(([key, value])=> [key, value*2])
)
console.log(doublePrice.meat);


console.log("=====과제=====");
console.log("과제1")
/*
배열에서 중복 요소 제거하기
중요도: 5
arr은 배열이라 가정합시다.

arr에서 중복 값을 제거해 주는 함수 unique(arr)를 만들어보세요.
 */

function unique(arr) {
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.

console.log("과제2");
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
    let mapStr = new Map();
    for (let str of arr){
        let sortStr = str.toLowerCase().split("").sort().join("");
        mapStr.set(sortStr, str);
    }
    return Array.from(mapStr.values());
}

console.log( aclean(arr) );


console.log("과제3");
/*
반복 가능한 객체의 키
중요도: 5
map.keys()를 사용해 배열을 반환받고, 이 배열을 변수에 저장해 .push와 같은 배열 메서드를 적용하고 싶다고 해봅시다.

작동하지 않네요.
 */

let map3 = new Map();

map3.set("name", "John");

let keys = Array.from(map3.keys());
keys.push("more")
console.log(keys)


console.log("과제4");
/*
프로퍼티 값 더하기
중요도: 5
급여 정보가 저장되어있는 객체 salaries가 있습니다.

Object.values 와 for..of 반복문을 사용해 모든 급여의 합을 반환하는 함수 sumSalaries(salaries)를 만들어보세요.

salaries가 빈 객체라면, 0이 반환되어야 합니다.

 */
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumSalaries(obj){
    let sumSlaries = 0;
    for (let money of Object.values(obj) ){
        sumSlaries += money;
    }
    return sumSlaries;
}

console.log( sumSalaries(salaries) ); // 650


console.log("과제5");
/*
객체 프로퍼티 개수를 반환하는 함수 count(obj)를 만들어보세요.


 */

let count_user = {
    name: 'John',
    age: 30
};
function count(obj){
    return Object.keys(obj).length
}
console.log( count(count_user) ); // 2