/*
    Created by JungYunAh Hello!
    ProjectName : javascriptES2020
    Date        : 2020/12/02 11:05 오후
    Notion      : https://www.notion.so/a68b9e1475634c1389447ef8f34111b4?v=de124104486840189d382bb67efcffb4
    Github      : http://github.com/zzanunada
    Description :
*/
'use strict'
// 3. 문자열
// 특정 문자열 접근하기
console.log("3. 문자열")
let str = "Hello"
console.log(str[0])
console.log(str.charAt(0))
console.log(str[str.length-1])

for(let char of "Hello"){
    console.log(char)
}

console.log("---문자열의 불변성---")
// 문자열의 불변성
let str1 = "Hi";
//str1[0] = "h" error
let str2 = "h" + str1[1];
console.log(str2);

console.log("---대소문자 변경하기---")
// 대소문자 변경하기
let letter = "helloHEELLO";
console.log(letter.toUpperCase()) //대문자로 모두 변경
console.log(letter.toLowerCase()) //소문자로 모두 변경

console.log("--부분 문자열 찾기---")
// 부분 문자열 찾기
let index_str = "Widget with id";
if(index_str.indexOf("Widget") != -1){
    console.log("찾았다")
}

// ~ 을 이용해서 코드 단축

console.log(~2)// -3
console.log(~4)// -5

// 따라서 기존에 indexof() != -1 하는 것을 ~ indexof 하면 된다
let not_index_of = "Widget width id";
if(~not_index_of.indexOf("Widget")){
    console.log("찾았다!");
}

console.log("---근래에 나온 부분 문자열 찾기---")
// 근래에 나온 부분 문자열 찾기
// .includes starsWith endsWith
let new_letter = "Hello my name is Yun Ah Jung"
console.log(new_letter.includes("name")) //포함되는가 true
console.log(new_letter.startsWith("Hello")) // 첫번째에 시작하는가 true
console.log(new_letter.endsWith("Jung")) // 마지막에 끝나는가 반환값 true
console.log(new_letter.includes("hi")) //포함되는가ㅏ false

console.log("---부분문자열출력하기---")
// 부분 문자열 출력하기
let str_slice = "안녕하세요저는정윤앙입니다."
console.log(str_slice.slice(0,5)) // slice(n,m) n 번째 부터 m-1 번째까지 출력
console.log(str_slice.slice(2)) // slice(n) n 번째부터 끝까지 출력
console.log(str_slice.slice(-4,-1)) // 끝에서 4번째부터 끝에서 1번째까지 출력



// 과제
// 첫글자를 대문자로
console.log("----과제1----")
function ucFirst(str){
    if(!str) return str
    return str[0].toUpperCase()+str.slice(1)
}
console.log(ucFirst("hello"))

console.log("---과제2---")
console.log("스팸문자열 걸러내기")
function checkSpam(str){
    if(!str) return str
    let lowLetter = str.toLowerCase()
    return lowLetter.includes("viagra") || lowLetter.includes("xxxxx")
}
console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))

// 과제
console.log("----과제3---")
console.log("문자열 줄이기")
function truncate(str, maxlength){
   return str.length > maxlength ? str.slice(0,maxlength-1)+"..." : str
}
console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("Hi everyone!", 20))

//과제
console.log("----과제4---")
console.log("숫자만 추출")
function extractCurrencyValue(str) {
    return +str.slice(1)
}
console.log(extractCurrencyValue("$120"))