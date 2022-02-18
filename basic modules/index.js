const {odd, even} = require('./var'); //구조분해 할당할 시에는 변수명과 프로퍼티 명이 같아야함
const checkNum = require('./func');

function checkStringOddEven(str) {
    if (str.length % 2 ) {// 홀수인 경우
        return odd;
    }
    else {
        return even;
    }
}

console.log(checkNum(10));
console.log(checkStringOddEven('hello'));

// 한번 실행된 파일을 불러올 때는 캐시 메모라에서 불러오게 된다.