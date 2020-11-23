//06. 형변환
//문자형 변환
let value = true;
console.log(typeof value); //boolean
value = String(value);//문자형변환
console.log(typeof value);//string


//숫자형 변환
let str = "123";
console.log(typeof str);
str = Number(str);
console.log(typeof str);

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN ("z"를 숫자로 변환하는 데 실패함)
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

//불린형
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("0"));

