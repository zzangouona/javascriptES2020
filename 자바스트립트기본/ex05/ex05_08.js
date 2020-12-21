/*
    Created by JungYunAh Hello!
    ProjectName : javascriptES2020
    Date        : 2020/12/21 3:30 오전
    Notion      : https://www.notion.so/a68b9e1475634c1389447ef8f34111b4?v=de124104486840189d382bb67efcffb4
    Github      : http://github.com/zzanunada
    Description :
*/
'use strict'
//프로토 타입 상속
console.log("==과제1==")
// 검색 알고리즘
// pockets → bed → table → head
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__:head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
};

let pockets = {
    money: 2000,
    __proto__:bed
};

console.log(pockets.pen);
console.log(pockets.glasses);


console.log("===과제2===")
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach = [food];
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// 햄스터 한 마리가 음식을 찾았습니다.
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// 이 햄스터도 같은 음식을 가지고 있습니다. 왜 그럴까요? 고쳐주세요.
console.log( lazy.stomach ); // apple