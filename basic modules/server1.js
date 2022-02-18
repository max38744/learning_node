const http = require('http');
const fs = require('fs').promises;
const express = require('express');
const app = express();

app.use(express.static('public'));

const server2 = http.createServer(async (req,res) => {
    try {
        res.writeHead(200, {'Content-Tyoe' : 'text/html; charset=utf-8'});
        const data = await fs.readFile('./index.html');
        res.end(data);
    }
    catch (error) {
        console.error(error);
        res.writeHead(200, {'Context-Type' : 'text/plane; charset=utf-8'});
        res.end(error.message);
    }
})

    .listen(8081);

/*
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Tyoe' : 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!<h1>'); //스트림 형태임
    res.write('<p> Hello server<p>');
    res.end('<p>Hello zeroMoon<p>')
})

    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다.')
    });

    .listen(8080);
*/

server2.on('listening', () => {
    console.log('8081포트에서 서버 대기 중입니다.');
});

server2.on('error', (error) => {
    console.error(error);
}); // 에러처리 필수