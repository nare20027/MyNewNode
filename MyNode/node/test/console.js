//console
const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
	outside : {
		inside : {
			key : 'value',
		},
	},
};
console.time('전체 시간'); // timeEnd와 대응되어 같은 레이블을 가진 time과 timeEnd사이의 시간을 측정 
console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요.');

/*
console.table(배열) : 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현 
console.dir(객체, 옵션) : 
 - 객체를 콘솔에 표시할 때 사용, 
 - 첫 번째 인수로 표시할 객체를 넣고, 두 번째 인수로 옵션을 넣음
 - 옵션 colors true로 하면 콘솔에 색 추가
 - depth로 객체 안의 객체 몇 단계까지 보여줄 지 결정 (default : 2) 
┌─────────┬────────┬───────┐
│ (index) │  name  │ birth │
├─────────┼────────┼───────┤
│    0    │ '제로'  │ 1994  │
│    1    │ 'hero' │ 1988  │
└─────────┴────────┴───────┘
 
 */
console.table([{ name : '제로', birth : 1994 }, { name : 'hero', birth : 1988}]); 

console.dir(obj, { colors : false, depth : 2 }); 
console.dir(obj, { colors : true, depth : 1 });

console.time('시간 측정');
for( let i = 0; i< 100000; i++) {}
console.timeEnd('시간 측정');
// 시간 측정 : 두번째 console.time과 첫번째 console.timeEnd 대응 

/*
console.trace() 에러가 어디서 발생했는지 추적 -> 에러 위치를 찾을 수 없을 때 사용 
*/
function b() {
	console.trace('에러 위치 추적');
}
function a() {
	b();
}
a();

console.timeEnd('전체 시간');
// 전체 시 : 첫번째 console.time과 두번째 console.timeEnd 대응 