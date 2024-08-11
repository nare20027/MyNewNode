const express = require('express');

const router = express.Router();

//Get / 라우터
router.get('/', (req, res) => {
	res.send('Hello, Express');
});

/*
res.render( 템플릿, 변수 객체)는 익스프레스가 res 객체에 추가한 템플릿 렌더링을 위한 메서드 
index.pug를 HTML로 렌더링 하면서 { title : 'Express' }라는 객체를 변수로 집어넣음 
layout.pug와 index.pug의 title 부분이 모두 Express로 치환 ----> HTML에도 변수 사용 가능해짐 
*/
router.get('/', (req, res, next) => {
	res.render('index', { title: 'Expres' }); 
});

module.exports = router;