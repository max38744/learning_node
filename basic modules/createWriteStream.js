const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
});
// write -> end -> on 순서로 실행됨. 

writeStream.write('이글을 쓰니다. \n');
writeStream.write('한 번더 씁니다. \n');
writeStream.end();