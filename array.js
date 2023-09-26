'use strict';

// Array

// 1.Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2.Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits

for( let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for( let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
//push : add an item to the end
fruits.push('strawberry, peach');
console.log(fruits);
//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('strawberry', 'lemon');
console.log(fruits);

//shift: remove an item from the benigging
// fruits.shift();
// fruits.shift();
console.log(fruits);

// shift, unshift are slower than pop, push!!!!!
// 데이터들을 다 옮겨서 빈 공간을 만들고 새로운 데이터를 삽입하기때문
// slice: remove an item by index position

fruits.push('straw', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1); // 시작하는인덱스 번호,지우려고하는 인덱스 갯수
console.log(fruits);
fruits.splice(1,1,'apple','watermelon'); 
//1번 인덱스부터 한개의 인덱스만 지우고 사과와 수박을 넣어줘

//combine two arrays
const fruit2 = ['배','코코넛'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

//5.Searchin
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));  // indexOf -> index number
console.log(fruits.indexOf('코코넛')); // 없으면 -1 출력
//includes
console.log(fruits.includes('watermelon')); //   incluses -> true/false
console.log(fruits.includes('코코넛'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits.indexOf('apple')); // 중복된 값이 있으면 가장 첫번째 인덱스 값 출력
console.log(fruits.lastIndexOf('apple')); // 이건 제일 마지막 인덱스 값 출력