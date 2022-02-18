setImmediate (() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});
// 마이크로 테스크로 분류되는 함수, nextTick, promise이 백그라운드 상에서 우선순위를 갖는다.


setTimeout(()=> {
    console.log('timeout');
}, 0);
// 환경에 따라서 setTimeout이나 setImmediate가 실행됌 따라서, 가급적 setImmediate만 사용 권장

Promise.resolve().then(() => console.log('promise'));