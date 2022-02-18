const {odd, even} = require('./var'); 
// ./ 현재 내가 있는 폴더의 경로지정 ../ 부모폴더 ../../ 조부모 폴더

console.time("zerocho")
function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    }
    else {
        return even;
    }
}

console.timeEnd("zerocho") // console.time 부터의 시간을 알 수 있다. 코드 수행 타임.
// console.error, console.trace(호출 스택을 알려줌.) 


module.exports = checkOddOrEven;


// console.time
// console.dir({객체 이름 }) <- 객체를 로깅할 때는 dir이 더 나음 