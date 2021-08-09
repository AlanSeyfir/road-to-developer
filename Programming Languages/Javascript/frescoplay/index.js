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

console.groupCollapsed('Functions');
    //You can make a function to a variable
    const functionName = function showName(name){
        return console.log('Hello' + ' ' + name);
    }

    functionName('Alan');

    //Also can be passed as a argument
    const showCar = function() {
        return console.log("My car is Shelby Cobra");
    };

    const executeShowCar = function(showCarFunction){
        showCarFunction();
    }

    executeShowCar(showCar);

    //Functions as property
    let myObj = {
        testProp: true,
        functionInObject: function(description){console.log(description);}
    }
    myObj.functionInObject('Function in Object1');

    myObj.property1 = function(){
        console.log("Function in Object2");
    }
    myObj.property1();

    //Functions as arguments. NOTE: arguments IS NOT a name a just put it, is a reserved word
    let add = function(){
        let i, sum = 0;

        for (i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    console.log(add(1,2,3,4,5,6));
    console.log(add(1,2,3));

console.groupEnd();

//Javascript Constructors. Better way instead coding the same in objects
console.groupCollapsed('Constructors');
    testObj = {
        name: 'dsdsd',
        age: 18,
        vision: 'sd',
    }

    genshinCharacter = function(name, age, vision){
        this.name = name;
        this.age = age;
        this.vision = vision;
    }

    let benny = new genshinCharacter('Benny', 15, 'Pyro');
    benny.weapon = 'sword';
    benny.hasFriends = true;

    let Hu_Tao = new genshinCharacter('Hu Tao', 16, 'Pyro');
    Hu_Tao.weapon = 'Spear';
    Hu_Tao.hasFriends = true; 

    console.table(benny); 
    console.table(Hu_Tao);
console.groupEnd();

console.groupCollapsed('Arrays and forEach');
    weapons = ['sword', 'shield', 'spear', 'bow', 'staff', 'book', 'gun'];
    //Easier this way lmao
    weapons.forEach(element => {
        console.log(element);
    });

    //See this in a tutorial...but it was from 2016
    let myFunction = function(item){
        console.log("For an element " + item);
    }
    weapons.forEach(myFunction);
console.groupEnd();

//Scope
let productId = 12345;
function showProductId(){
    function fix(){
        let productId = 9876;
        console.log('in fix:', productId);
    }
    fix();
    console.log('in showProductId: ', productId);
}
showProductId();

//Closure
let myClosure = (function(){
    let i = 0;
    return function () {
        return console.log(i += 1);
    }
})();

myClosure();// i = 1
myClosure();// i = 2
myClosure();// i = 3
console.log('---------------------------------------')

//DOM
//getElementById
function changeColor(){
    let p1 = document.getElementById('demo').style.color = 'red';
}

//We can add a for or forEach loop getElementsByTagName
function changeFont(){
    let h3 = document.getElementsByTagName("h3");
    h3[0].style.fontStyle = 'italic';
    h3[1].style.fontStyle = 'italic';
    h3[2].style.fontStyle = 'italic';
    h3[3].style.fontStyle = 'italic';
}

// let d = document.getElementById("top");
// let d_nested = document.getElementById("nested");
//d.removeChild(d_nested); <- Why Uncaught TypeError: Cannot read property 'removeChild' of null
// d_nested.remove();

document.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'blue';
})

function myEventHandler(e){}

let content = document.getElementById('content');
let button =  document.getElementById('show-content');

// button.onclick = function(){
//     if(content.className == 'open'){
//         //shrink the box
//         content.className = "";
//         button.innerHTML = 'Show More';
//     }else{
//         //expand the box
//         content.className = 'open';
//         button.innerHTML = 'Show Less';
//     }
// }

//This uses the onload in body
function loadFunction(){
    //call the function in load time
    document.write('Inside the function!');
}

let form = document.getElementById('form');
//Focus event
form.addEventListener('focus', function(e){
    e.target.style.backgroundColor = 'lightblue';
},true);

//Blur event
form.addEventListener('blur', (e) =>{
    e.target.style.backgroundColor = '';
}, true);
