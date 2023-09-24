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
}
printMessage();