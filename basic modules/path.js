const path = require('path');
// 운영체제별로 다른 경로를 처리하기 위해 path 모듈 사용


console.log(path.join(__dirname, '/var.js')); // -> 절대경로로 지정
console.log(path.resolve(__dirname, '..', '/var.js')); // -> 최상의 파일만 보여줌.


// \nodejs-book\var/.js
// /nodejs-book/var.js

// https://www.naver.com/login <- 처럼 오는 경우는 상관없으나 가끔 생략되어 login이 오는 경우가 있어 whatWG 방식과 기존 방식을 모두 알아야함.



// 맥 + 리눅스 = 포식스라고 부름 poxis