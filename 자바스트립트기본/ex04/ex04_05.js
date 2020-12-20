/*
    Created by JungYunAh Hello!
    ProjectName : javascriptES2020
    Date        : 2020/12/03 3:30 오전
    Notion      : https://www.notion.so/a68b9e1475634c1389447ef8f34111b4?v=de124104486840189d382bb67efcffb4
    Github      : http://github.com/zzanunada
    Description :
*/
"use strict";
// 5. 배열과 메서드
console.log("---5.배열과 메서드---");
console.log("---splice---");
// splice
let arr = ["I", "go", "home"];
delete arr[1]; // 삭제 되는 기능 원하고 사용했다
console.log(arr); // -> 하지만 [ 'I', <1 empty item>, 'home' ] , 값만 삭제되었고 메머리는 그대로 남아있다
console.log(arr.length); // 길이도 똑같이 3

console.log("---splice 요소 삭제");
// splice 는 교체 삭제 추가를 위해 만들어 졌다.
// splice 삭제
arr.splice(1, 1); // 1 번째방에서부터 1번까지 삭제
console.log(arr); //[ 'I', 'home' ]
// splice 삭제된 요소 반환
let arr_removed = ["I", "Love", "YOU", "시우민"];
let get_removed = arr_removed.splice(1, 2); // love you
console.log(get_removed);

console.log("---splice 요소 추가---");
// splice 새로운 요소 추가하기
let arr_add = ["I", "'m", "Like", "you"];
arr_add.splice(2, 0, "Hello", "My", "Name", "is"); // index 2부터 추가 시작
console.log(arr_add);

console.log("---slice---");
// slice
// 새로운 배열을 반환한다.
// splice 와 유사해 보이지 훨씬 간단하다 star ~ end(end는 제외) 까지 배열을 복사한 배열반환
let arr_slice = ["t", "e", "s", "t"];
console.log(arr_slice.slice(1, 3)); //s ,t
console.log(arr_slice.slice(-2)); // 인덱스가 -2 ~ 끝까지

console.log("---concat---");
// concat
// 새로운 배열을 만들때 사용
let arr_concat = [1, 2, 3, 4, 5];
console.log(arr_concat);
let arr_new_concat = arr_concat.concat([6, 7, 8, 9]); // 반환해준다.
let arr_new_concat2 = arr_concat.concat([6, 7], 8, 9);
console.log(arr_new_concat);
console.log(arr_new_concat2);
// arr_new_concat === arr_new_concat2 둘다 똑같은 결과를 나타냈다.
arr_concat[0] = 0;
console.log(arr_concat);
console.log(arr_new_concat); // 복사한게 아니라 새로 배열을 생성하여 arr_concat 값이 변해도 arr_new_concat 값이 바뀌지 않는다.

console.log("---Concat로 객체와 배열 합치기 ---");
// concat 메소드로 객체와 배열 함치기
let get_arr = [1, 2, 3, 4];
let get_obj = {
  len: 3,
  1: "hello",
};
let concat_arr_obj = get_arr.concat(get_obj);
console.log(concat_arr_obj[4]["len"]); //3

//forEach 로 반복작업하기
console.log("---forEach 화살표 함수---");
let arr_forEach = ["정윤아", "김해림", "송예지", "황주원"];
arr_forEach.forEach((e, index) => {
  console.log(`${e}, ${index}`);
});

console.log("---forEach 함수 ---");
arr_forEach.forEach(function (e, index, array) {
  console.log(`${e}, ${index} in ${array}`);
});

// 배열 탐색하기
// indexOf, lastIndexOf, includes => boolean 값 반환
// indexOf 와 Includes 의 차이점은 NaN을 제대를 처리한다는 것과 boolean 값을 반환한다는 것이다.
// includes 을 사용하는 것이 좋다.
console.log("---배열 탐색하기---");
const arr_indexOf = [NaN];
console.log(arr_indexOf.indexOf(NaN)); // -1 (완전 항등 비교 === 는 NaN엔 동작하지 않으므로 0이 출력되지 않습니다.)
console.log(arr_indexOf.includes(NaN)); //true

console.log("---객체형 배열 탐색하기---");
// find, findIndex
// 객체로 이루어진 배열에서 탐색하기
let obj_users = [
  { name: "이소미", height: 160 },
  { name: "안예슬", height: 160 },
  { name: "정윤아", height: 168 },
  { name: "시우민", height: 180 },
  { name: "오세훈", height: 190 },
];

let xiumin = obj_users.find((obj) => obj.height == 180); // 단 하나의 요소 반환된다만
let osehun = obj_users.findIndex((obj) => obj.height == 190); // 해당 요소의 인덱스 값 반환 1개만
console.log(xiumin);
console.log(osehun);

// 여러개의 조건인 요소들 찾기
// filter
console.log("---filter---");
let tall_user = obj_users.filter((obj)=>obj.height > 160);
console.log(tall_user)


// 배열을 변형시키는 메소드
console.log("---map---")
let lengths = ["hello","안녕","나는","정윤아"].map((obj)=>obj.length )
console.log(lengths)

// 배열을 정렬시키는 메소드
function compare(a,b){
    if(a > b) return 1;
    if(a==b) return 0;
    if (a < b) return -1;
}
console.log("---sort---");
let arr_sort = [1,4,23,5,7,67,9,31,10];
arr_sort.sort(compare)
console.log(arr_sort)


// 역순 정렬
console.log("---reverse---")
let arr_reverse = [1,2,3,4,5,6]
arr_reverse.reverse()
console.log(arr_reverse)

// 문자열 구분자 => 배열로 변환, 배열을 문자열로 구분하여 => 문자열로 변환
console.log("----split join---")
let arr_split = "1234-5678-2345-1234-3423-1234"
let get_split = arr_split.split("-")
console.log(get_split)

let arr_join = ["hello","my","name","is","yunah"];
let get_join = arr_join.join(" ");
console.log(get_join);

// 누산 반복 메소드
console.log("---reduce---");
let arr_reduce = [1,2,3,4,5,6,7,8];
let get_reduce = arr_reduce.reduce((sum, item)=> sum += item)
console.log(get_reduce)

// 배열이 아닌지 구별하기
console.log("---Array.isArray")
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true


//과제
console.log("---과제---")
/*
"my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.

대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.
 /
function camelize (str){
    return str.split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
        .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // joins ['my', 'Long', 'Word'] into 'myLongW
}
console.log(camelize("-hello-how-i-m"))*/

