//var.js 변수 모듈
/*
const odd = '홀수입니다.';
const even = '짝수입니다.';

module.exports = {
	odd,
	even
};
// 다른 파일에서 var.js 호출 시 module.exports에 대입된 값을 사용할 수 있다. 
*/

exports.odd = '홀수입니다.';
exports.even = '짝수입니다.';
/*
	exports -> module.exports -> {}
	--> module.exports와 exports가 같은 객체를 참조하기 때문에 위와 같이 코드를 변경해도 객체 참조가 가능 
	module.exports는 어떤 값이든 참조가 가능하지만 exports에는 반드시 객체처럼 속성명과 속성값을 대입해야함 
	----> exports는 객체 모듈에서만 사용 가능 
	둘은 참조관계에 있으므로 exports 객체와 module.exports 동시 사용 지양 ㅍ  
*/