const express = require('express'); // express에서는 http모듈을 사용한다.
const path = require('path');
const app = express();


app.set('port', process.env.PORT || 3000); // 서버에 속성을 심는다. port라는 app.get()메서드로 가져올 수 있음.

app.use((req, res, next) => {
    console.log('모든 요청에 실행하고 싶어요.')
    next();
}, (req, res, next) => {
    try {
        console.log(fdfdsfs);
    }catch (error) {
        console.log('error')
        next(error); //next에 인수를 주면 에러 처리 함수로 넘어감.
    }
}
); //모든 요청에 응답하는 코드는 use를 이용한다. 그러나 이런 미들웨어를 사용하면 next를 인자로 주고 실행해줘야 다음 코드도 반응한다.
 // 미들웨어란 (res, req) 등의 중간 메서드가 미들웨어임.. 
 // 하나의 라우터는 및 함수는 여러 미들웨어를 가질 수 있다.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    //res.send('안녕하세요.');
    //res.json({hello : 'zerocho'});
    // 한 라우터에서 send를 여러번 하거나 json응답을 하면 에러가 난다. 
}); 

app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
}) //주소에 와일드카드를 주어 사용할 수 있다.
// 와일드 카드를 사용하는 경우는 가장 하단에 위치해야한다..(다음 메소드로 넘어가지 않기 때문에.)
// error 미들웨어는 맨 하단에

app.post('/' , (req,res) => {
    res.send('Hello exrpess!');
})

app.get('/about', (req, res) => {
    res.send('hello exrpess')
});

app.use((req,res,next) => {
    res.status(404).send('404지롱');
})

app.use((err,req,res,next)=> {
    console.error(err);
    res.status(404).send('에러났지롱, 근데 안 알려주지롱') //브라우저에게는 status 지정해서 발생한 오류와 다르게 알려줄 수 있다.
});

app.listen(app.get('port'), () => {
    console.log('express sever running')
});

// 메서드와 주소를 가진 것은 라우터, 