// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('^'); //join을 사용하여 구분자 넣어서 출력가능
    console.log(result);
}

// Q2. make a array out of a string
{
    const fruits ='🍎,🥝,🍌🍒';
    const result = fruits.split(','); // split은 구분자를 꼭 넣어줘야 배열안에서 각각 문자열로 출력가능
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1,2,3,4,5];
    const result = array.reverse(); //reverse는 배열 출력값도 거꾸로 만듦
    console.log(result);
    console.log(array);
}
// Q4. make new array without the first two elements [3,4,5]
{
    const array = [1,2,3,4,5];
    const result = array.slice(2, 5); //splice는 배열 자체를 수정
    console.log(result); //slice는 배열에서 원하는 부분만 리턴해서 받아오고싶을때 사용
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students= [
    new Student ('A', 29, true, 45),
    new Student ('B', 28, false, 80),
    new Student ('C', 30, true, 90),
    new Student ('D', 40, false, 66),
    new Student ('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result); //filter를 이용하여 원하는것만 받아올수있다.
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score ); //map을 이용하면 나열함
    console.log(result);
}
// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50); //조건에 맞는게 있는지 확인은 some
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50); //조건에 모두 맞는지 확인은 every
    console.log(result2); // !는 true -> false , false -> true 

}
console.clear();
// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);  //return 값이 prev로 감
}
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{ // map 은 배열자체 출력
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result);
}

//Bonus! do Q10 sorted in ascending order
//result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a,b )=> a - b)
        // .sort()
        .join(); //string으로 변환
    console.log(result);
}