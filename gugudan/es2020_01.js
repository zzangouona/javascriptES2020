//'use strict';//엄격모드는 전역에 선언하는 것은 바람직하지 않다.
(function () {
    'use strict'
    function foo() {
        //x = 10;//엄격모드 시 전역변수를 선언하지 못한다.
        let x = 10;
    }


    //delete x; //delete 호출 불가
    console.log(x);

})
