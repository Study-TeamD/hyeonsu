//1. Use strict
// added in ES 5
// user this for Valina Javascript
'use strict';

// 2. Variable
// let (add in ES6)

// let globalName = 'global name';
// {
// let name = 'ellie';
// console.log(name);
// name='hello';
// console.log(name);
// console.log(globalName);
// }
// console.log(name);
// console.log(globalName);

//var (don't ever use this)
// var hoisting(move declaration from bottom to top 끌어올려줌)
// has no block scope
// {
//     age = 4;
//     var age;
// }
// conosole.log(age);

//3. Constants
// favor immutable data type
// security, thread safety, reduce human mistakes
// const daysInWeek = 7;
// const maxNumber = 5;

//Immutable data types: premitive types, frozen objects
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:


//4. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol -> value가 메모리에 저장된다.
//object, box container -> reference가 메모리에 저장된다.
//function, first-class function

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2; //string을 나누면 nAn 출력
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const bigInt = 1234596186715231985n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  //변수의 값이 자동으로 붙음 template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + 'type: ' + typeof helloBob); 

//boolean
//false : 0 , null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
// let x = undefined; 똑같음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //sybmol은 descripto=ion 붙여서 출력해야됨

// object, real-life object, data structure
const ellie = {name: 'ellie', age : 20 };
ellie.age = 21;
console.log(ellie.age);

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)) //h
;console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); -> typescript 생성