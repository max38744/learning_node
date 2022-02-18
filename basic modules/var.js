const odd = '홀수입니다.';
const even = '짝수입니다.';




// 두 가지 이상을 export 할 때는 아래의 방법을 사용.
module.exports = {
    odd,
    even,
}; // module export를 사용하면 아래의 객체 형식으로 사용된 것은 무시된다.

//exports.odd = odd;
//exports.even = even;



// 한가지만 export할 때는 
//module.export = odd (함수를 넣어도 됨.);