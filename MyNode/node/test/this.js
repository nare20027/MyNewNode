//this.js\
/*최상위 스코프에 존재하는 this는 module.exports or exports 객체를 가리킨다.*/
console.log(this);
console.log(this === module.exports);
console.log(this === exports);
/*함수선언문 내부의 this는 global 객체를 가리킨다*/
function whatIsThis() {
	console.log('function', this === exports, this === global);
}
whatIsThis();