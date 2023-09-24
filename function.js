//Function 

// 1. Function declaration
//function name(param1, param2) {body... return;}
//one function === one thing
//function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234)

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) { //changeName  함수는 이름을 바꿔줌
    obj.name = 'coder'
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

//4. Rest parameters (add in ES6) 배열형태
function printAll(...args) { //args 는 배열을 뜻함
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // for(const arg of args) { //for of 문법을 사용
    //     console.log(arg);
    // }

    // args.forEach((arg) => console.log(arg)); //forEach문법 사용
}
printAll('dream', 'coding', 'ellie');

// 5. Local Scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); 내부 함수를 외부에서 출력하면 오류 발생
}
printMessage();

// 6. Return a value
function sum(a,b){
    return a + b; 
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit -> bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}

//good -> 조건에 맞지 않은 함수는 return 해서 빨리 종료시켜주는게 좋음
function upgrade(user) {
    if(user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

// 1.Function expression
const print = function () { //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2.Callback function using function expression
function randomQuiz(answer, printYes, printNo) { //함수 전달
    if (answer === 'love you'){
        printYes()
    } else {
        printNo();
    }
}
//anonymous function
const printYes = function() {
    console.log('yes!');
};
//named function function print()
const printNo = function print() {
    console.log('no!');
    // print(); 함수내부에서 호출할때 named function 사용
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous
// const simplePrint = function() {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');

// const add = function (a+b) {
//     return a + b;
// };

const add = (a, b) => a + b;
const simpleMultiply = (a,b) => {
    //do something more 블록 사용가능, 마지막엔 return 사용
    return a * b;
};

// IIFE: immediately Invoked Fuction Expression
function hello() {
    console.log('IIFE');
}
hello();

//IIFE ex -> function부터 처음에 소괄호로 묶어줌
(function hello(){
    console.log('IIFE');
})();

//Quiz 1
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch(command){ //정해진 데이터 처리에는 switch문 사용용이
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add',2,3));