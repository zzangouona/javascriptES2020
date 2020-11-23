//qqustn
let message;
message = 'Hello'//문자열을 저장한다.

alert(message);//hello!;

let message2 = 'Hello!';//변수정의하고 값 할당
alert(message2);

//한줄에 여러변수 선언 가능
//let user='Johne', age= 25, message = 'Hello';

//가독성을 위해 한줄에 하나씩 변수를 작성
let user ='Jone';
let age = 25;
let message = 'Hello';

//변수정의2
let user2 = 'Jone',
    age2 = 25,
    message2 = 'Hello';


//변수정의3
let user3= 'Jone'
    ,age3 = 25
    , message3 = 'Hello';


//개인의 취향이다.

//오래된 자바스크립트에서 var 키워드를 발견할 수 있다. var 역시 let처럼 변수를 선언하는 키워드이다.
//var는 let과 거의 동일하게 동작합니다. var도 let처럼 변수를 선언하는 데 쓰이죠. 다만 var는 ‘오래된’ 방식이다.

let Hello = "Hello World!";
Hello = "message";//값 변경;
let message = Hello; //데이터 복사 가능
//let Hello = "message";//변수 두번 선언시 에러


let $ = "신기하네";
let _ = "이것도";

console.log($,_);

//상수선언
const COLOR_RED= "#ff0000";//하드코딩 시 Uppercase로 변수명 지정이 좋다
const pageLodeTime = 0;//웹페이지 로드하는데 걸리는 시간 => 해당 값은 하드코딩이 안되는 변수임으로 카멜표기법이 좋다.

//과제
/*
변수 가지고 놀기
중요도: 2
admin과 name이라는 변수를 선언하세요.
name에 값으로 "John"을 할당해 보세요.
name의 값을 admin에 복사해 보세요.
admin의 값을 alert 창에 띄워보세요. "John"이 출력되어야 합니다
 */

console.log("과제1");
let admin;
let name;
name = "John";
admin = name;
alert(admin);

/*
과제2
현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
웹사이트를 개발 중이라고 가정하고, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
 */

console.log("과제1")
let planet = '',
    user = '',
    userName = '';


