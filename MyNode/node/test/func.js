//func.js var.js 참조 - 다른 모듈을 참조하는 또다른 모듈을 생성 
/*
	- require('불러올 모듈 주소 - 확장자 생략 가능');
	- 구조분해할당 : 객체나 배열로 부터 속성이나 요소를 쉽게 꺼낼 수 있음
	- 변수명과 객체속성이 같을 경우 변수명 생략 가능 
*/
const { odd, even } = require('./var');

function checkOddOrEven(num) {
	if (num % 2) {
		return odd;
	}return even;
}

module.exports = checkOddOrEven;