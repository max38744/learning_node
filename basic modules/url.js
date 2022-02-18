const url = require('url');

const URL = url.URL;

const myURL = new URL('http://https://www.google.com/search?q=cssd&rlz=1C5CHFA_enKR987KR987&oq=cssd&aqs=chrome..69i57j0i67l6j69i60.22550j0j9&sourceid=chrome&ie=UTF-8.gilbut.co.kr/bookList.aspx?sercate1=0010010#anchor');

console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));

console.log('---------------------');

const parsedUrl = url.parse('https://www.google.com/search?q=cssd&rlz=1C5CHFA_enKR987KR987&oq=cssd&aqs=chrome..69i57j0i67l6j69i60.22550j0j9&sourceid=chrome&ie=UTF-8');

console.log('url.parse():', parsedUrl);

console.log('url.format():', url.format(parsedUrl));
