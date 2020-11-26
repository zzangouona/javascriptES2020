//참조에 의한 객체 복사

//객체 복사, 병합과 Object.assign
let user = {
    name : "John",
    age:12
};
console.log(user)
//기초적인 객체 복사
let copyUser = {};

for(let key in user){
    copyUser[key] = user[key];
}
console.log("copyUser")
console.log(copyUser);//복사되었다.

//Object.assign을 사용하면 코드가 더 단축된다.

let secondCopyUser = Object.assign({},user);

console.log(secondCopyUser);

//여러객체 병합
let setNameObj = {name:"정윤아"};
let setAgeObj = {age:24};
let setHeightObj = {height : 158};

let profileObject = Object.assign(setNameObj,setAgeObj,setHeightObj);

console.log(profileObject);


//병합 시 목표객체의 프로퍼티가 같을 경우 목표 값이 덮어 버린다.

let setSeoulObj = {address:"서울시"};
let setBusanObj = {address:"부산시"};

let addressObject = Object.assign(setBusanObj,setSeoulObj); //초기값 setBusanObj, 목표값 setSeoulObj => {address:"서울시"}

console.log(addressObject)

//중첩 객체 복사
//만약 객체 안에 프로퍼티가 다른 객체의 참조이라면 복사할 수 있을까?

let studentProfile = {
    name:"정윤아",
    age : 24,
    address : { //프로퍼티가 다른 객체 참조
        city : "서울",
        postcode : 1234
    }
}
//복사하기

let copyStudentObj = Object.assign({},studentProfile);
//복사한 객체의 Object의 프로퍼티 값을 수정한다,
copyStudentObj.name = "시우민";
copyStudentObj.address.city = "부산";

console.log(studentProfile);
//name은 수정이 안되었지만 city 값은 수정되었다.
//프로퍼티의 원시값은 복사할 수 있지만 객체를 복사하는 경우 깊은 복사라고 따로 반복문으로 해줘야한다.
