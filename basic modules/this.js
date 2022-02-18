console.log(this); //global ? --> 빈 객체.
console.log(this === module.exports) // 전역 스코프의 this만 module.exprots라는 점.
function a() {
    console.log(this ===global);
}

a();