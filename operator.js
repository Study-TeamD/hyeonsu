// 1.String concatenation
console.log('my' +  ' cat');
console.log('1' + 2);
console.log(`string literals:

''''
1 + 2 = ${1+2}`); //$를 변수값을 계산해서 문자열로 출력

console.log('ellie\'s book'); // \를 사용해야 특수 문자 출력가능

// 2. Numeric operators
console.log(1+1); //add
console.log(1-1); //subtract
console.log(1/1); //divide 
console.log(1*1); //multiply
console.log(1%1); //remainder 나머지
console.log(2**3); //exponentiation 거듭제곱

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //->3
//counter = counter +1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; //->4
//postIncrement = counter;
//counter = counter +1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter; //->4
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--; //->4
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+y;
x -= y;
x *= y;
x /= y; 

// 5. Comparison operators 비교
console.log(10 < 6); //less than 
console.log(10 <= 6); //less than or equal 
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal 

// 6.Logical operators: || (or), && (and), !(Not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value /처음으로 true가 나오면 계산 멈춤 
// 그래서 true가 나오는 함수를 맨 앞에 두는 코드가 좋은코드!
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy  value
console.log(`and: ${value1 && value2 && check()}`);

function check(){
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('');
    }
    return true;
}

// !(NOT) 값 변경
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 =  {name: 'ellie'};
const ellie2 =  {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//equality - puzzler 
console.log(0 == false);
console.log(0 === false); //boolean type이 아니아서 f
console.log('' == false);
console.log('' === false); //boolean type이 아니아서 f
console.log(null == undefined); // null = undefined 
console.log(null === undefined); //null 과  undefined 는 다름

// 8. Conditional operators: if
// if, else if, else

const name = 'coder';
if( name === 'ellie'){ //true시 안에 내용 출력
    console.log('Welcome, Ellie!');
} else if (name ==='coder'){
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2; 간단할때만 사용
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check un Ts
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'FireFox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loop
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) { //false 나오기전까지 무한 루프, 조건 미충족시 자동 break
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is excuted first,
// then check the condtition.
do { //블럭을 먼저 실행하고 싶을때 do while 사용
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step) 
for(i = 3; i > 0; i--){ // 3 2 1
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i -2 ){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops -> O(n^2) CPU에 안좋음
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

//break, continue
//Q1. literate from 0 to 10 and print only even numbers
//use continue

for(let i = 0; i < 11; i++){
    if(i % 2 !== 0 ){
    continue;
    }
    console.log(`q1: ${i}`);
}

//Q2. iterate from 0 to 10 and print numbers until reachin 8
//(use break)

for(let i = 0; i < 11; i++){
    if(i > 8){
        break;
    }
    console.log(`q2: ${i}`);
}
