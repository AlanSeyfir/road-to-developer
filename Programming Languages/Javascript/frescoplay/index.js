//Object literal
let myCar = {
    color: 'red',
    size: 'M',
    brand: 'shelby'
}

//You can add some 
myCar.prop = 'Test';
myCar.prop2 = 'Test2'
console.log(`${myCar.prop} and this is other ${myCar.prop2} and ${myCar.color}`);

console.log(myCar);

console.log('This give a value of ' + myCar.name);//name is Undefined

//With the keyword new like Java class creation
var obj= new Object();
obj.prop1="Hello";
obj.prop2="World";
console.log(`${obj.prop1} ${obj.prop2}`);


//Nested Objects
let student = {
    name: 'Alan',
    age: 20,
    favFood: '🌮',
    subject: {
        group: 'A',
        class: 'Web dev',
        classNumber: 401
    }
}
//Dot & [] operator can be mixed
student.subject.newClassNumber = 221;
console.log('My class number is ' + student.subject['newClassNumber']);

console.log('My class is ' + student.subject.class);

//Remove a property of an Object
console.log(student);
delete student.favFood;
console.log(student);
console.log("Appear undefined if I especifically search it " + student.favFood);


let fruits = ['apple', 'grape', 'orange', 22, 111]
fruits[5] = 'var';
fruits[222] = 'too much'; //DON'T index too high the number
fruits["foo"] = 'abc'; //DON'T use strings
console.log(fruits.length);//Checks the last index that's why length is 223
console.log('------------');
//Food for thought
//Following is the code to alert max number in an array. 
//Can you think of a way to get the result without using loops? Explore yourself..
let numbers = [3,342,23,22,124];
let max = numbers.reduce((a,b) => {
    return Math.max(a,b);
}, 0);
// for(let i=0;i<numbers.length;i++){
//   if(numbers[i] > max){
//     max = numbers[i];
//   }
// }
console.log("With array.reduce() " + max);
console.log("Math.max & Spread syntax " + Math.max(...numbers));//... is magical lmao


//Try it out 1 - Removing duplicates in an array
console.groupCollapsed('Try it out 1');
    let characters = ['Beidou', 'Benny', 'Benny','Zhongli' , 'Zhongli', 'Mona', 'Hu Tao', 'Keqing', 'Xinyan'];
    function findDuplicates(value, index, self){
        return self.indexOf(value) === index;
    }

    let notDuplicate = characters.filter(findDuplicates);
    console.table(characters);
    console.log('NOT DUPLICATE BELOW');
    console.table(notDuplicate);

    //With ES6
    let notDuplicate2 = characters.filter((v,i,a) => a.indexOf(v) === i);
    console.table(notDuplicate2);

    //Simple way
    let notDuplicate3 = [...new Set(characters)];
    console.table(notDuplicate3);
console.groupEnd();

//Try-it-out - Arrays - 2
//Write a JavaScript program that will sort the array by title and display.

let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
]; 

library.sort((a,b) =>{
    let nameA = a.title.toUpperCase();
    let nameB = b.title.toUpperCase();

    if(nameA > nameB){
        return 1;
    }

    if(nameA < nameB){
        return -1;
    }

    return 0;
});
console.log(library);