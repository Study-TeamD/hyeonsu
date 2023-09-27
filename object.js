'use strict';

//Objects
// object = { key : value }; 집합체
const obj1 = {}; // object literal 
const obj2 = new Object(); // object constructor -> new 키워드 사용

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4}; 
print(ellie); // class가 없어도 중괄호를 이용해 object 생성가능

ellie.hasJob = true;
console.log(ellie.hasJob); //바로바로 동적 할당 가능

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
console.log(ellie.name); //2가지 접근방식
console.log(ellie['name']); 
//무조건 대괄호 안에 string type으로 지정해서 받아와야함
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

 // 4. Constructor function
function Person(name,age) {
    // this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator: property existence check(key in obj 확인가능)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for(key in obj)  // 실행안됨
console.clear();

// for(key in ellie) {
//     console.log(key);
// }

// // for ( value of iterable )
// const array = [1,2,4,5];
// for(value of array) {
//     console.log(value);
// }

// 7.Fun Cloning
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);


//old way
// const user3 = {};        새로운 ref에 복사하기
// for (key in user){       복사 순서 1.name 2.age
//     user3[key] = user[key];
// }
// console.log(user3);

const user4 = {}; //텅 빈 ref 선언 후 user4에 user내용 복사
Object.assign(user4, user); // = const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); 
console.log(mixed.color); // 여러개의 값을 써도 뒤로 갈수록 덮어씌어서 fruit2의 속성이 나옴
console.log(mixed.size);

