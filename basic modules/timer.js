const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500)

const interval = setInterval(() => {
    console.log('1초 마다 실행.');
}, 1000);

const timeout2 = setTimeout(() =>  {
    console.log('실행되지 않습니다.');
})

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('즉시 실행');
})

const immediate2 = setImmediate(() => {
    console.log('실행되지 않았습니다.');
});

clearImmediate(immediate2);

// clearImmediate를 사용해 immediate를 취소할 수 있는 이유는 호출스택에 의해 백그라운드로 이동 후 데스크 큐에 머물다가 호출되는 형식임으로 가능하다.