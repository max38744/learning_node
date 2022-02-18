const fs = require('fs');
const readStream = fs.createReadStream('./readme3.txt', {highWaterMark : 16});

const data = [];
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data', chunk, chunk.length);

});

readStream.on('end', () => {
    console.log('end : ', Buffer.concat(data).toString());
});

readStream.on('error' , (err) => {
    console.log('error', err);
})

// 스트림 방식이 버퍼 방식보다 좋은 이유는, 메모리 절약이 좋다..
// 스트림이 읽는 크기 만큼의 메모리만 필요. 
// 버퍼는 버퍼 크기(스트림 크기 보다 큼.)