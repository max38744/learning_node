const fs = require('fs');

fs.readFile('./readme.txt', (err,data) => {
    if (err) {
        throw err;
    }
    console.log('number 1', data.toString());
})

fs.readFile('./readme.txt', (err,data) => {
    if (err) {
        throw err;
    }
    console.log('number 2', data.toString());
})
fs.readFile('./readme.txt', (err,data) => {
    if (err) {
        throw err;
    }
    console.log('number 3', data.toString());
})
fs.readFile('./readme.txt', (err,data) => {
    if (err) {
        throw err;
    }
    console.log('number 4', data.toString());
})

// 비동기식 방법이기 때문에, 운영체제가 먼저 읽은 순서로 테스크 큐에 넣어준다. 
// 