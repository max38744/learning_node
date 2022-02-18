const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글이 입력됩니다.')
    .then(() => {

    })
    .then((data) => {
        console.log(data.toString());
    })

    .catch(() => {
        throw err;
    });