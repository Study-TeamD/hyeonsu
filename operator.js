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