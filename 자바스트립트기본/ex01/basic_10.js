//논리연산자

//OR
console.log(true || false) //true
console.log(false || true) //true
console.log(true || false) //true
console.log(false || false) //false

if (1 || 0) { //if(true || false ) 동일
    console.log("truthy");
}

console.log(0 || 1); //truthy
console.log(null || 1);//truthy
console.log(null || 0 || 1);//truthy
console.log(null || undefined || 1); //falsy

//반환값 : 첫번째 truthy 를 찾는 OR
console.log(0 || 0 || 1)//1
console.log(3 || 2 || 3)//3 ->truthy 를 만나면 나머지 값은 무시한다.

//AND
console.log(true && true); //true
console.log(true && false);//false
console.log(false && true);//false
console.log(false && false);//false

if (1 && 0) {    //if(true && false ) 동일
    console.log('falsy');//해당 구문은 실행되지 않음
}

//반환값 : 첫번째 falsy를 찾는 AND
console.log(1 && 2 && 3); //3
console.log(1 && 0 && 3); // 0 -> falsy 를 만나면 나머지 값을 무시하고 해당 값을 반환한다.


//NOT
//피연산자를 불린형으로 변환시키고 역변환 시킨다
let booleanNot = !0;//true
console.log(booleanNot);//true
console.log(!true)//false
console.log(!"")//true
console.log(!"gi")//false

//NOT으로 Boolean 형변환
console.log(!!0); //false
console.log(!!"jkjk")//true;
console.log(!!1);//true


//과제
//age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.
//
// "이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.

let getAge = 0;
if (getAge >= 14 && getAge <= 90) console.log("truthy");


//age(나이)가 14세 이상 90세 이하에 속하지 않는지를 확인하는 if문을 작성하세요.
//
// 답안은 NOT ! 연산자를 사용한 답안과 사용하지 않은 답안 2가지를 제출해 주세요.

if(!(getAge >= 14 && getAge <= 90))console.log("truthy");

if((getAge < 14 || getAge > 90))console.log("truthy");


if (-1 || 0) console.log( 'first' );//true || false
if (-1 && 0) console.log( 'second' );//true && false
if (null || -1 && 1) console.log( 'third' ) //false || ( true && true)



/*
로그인 구현하기
중요도: 3
프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.

사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요.
이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요. 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.

비밀번호 확인 절차는 다음과 같습니다.

맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.
순서도는 다음과 같습니다.
 */

let getUserId = prompt("아이디를 입력하세요.");
const SETADMINID = "Admin";
const SETADMINPW = "TheMaster";

if(getUserId==SETADMINID){
    let getPassWd = prompt("비밀번호를 입력하세요.");
    if(getPassWd==null|| getPassWd== "") alert("취소되었습니다.");
    else if(getPassWd === SETADMINPW) alert("환영합니다.!");
    else alert("인증에 실패하였습니다.");
}
