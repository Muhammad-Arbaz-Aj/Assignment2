// Question No 1

function add (num1){
    return function(num2){
        console.log(num1 + num2);
    }
};

let innerFunction = add(5);
let innerFunction2 = add(9);
innerFunction(5);
innerFunction2(8);

// Question No 2

let arr = [2, 4, 6, 8, 10, 9];
let searchNum = arr.filter(function(val){
    if (val % 3 === 0){
        return true;
    } else {
        return false;
    }
});

console.log(searchNum);

// Question No 3

function addPara (text){
    let para = document.querySelector('body');
    let content = document.createTextNode(text);
    para.appendChild(content);
};

console.log(addPara('Hello Ishaq What Are you Doing'));


// Question No 4

function addListItem (text){
    let find = document.querySelector('ul');
    let listItem = document.createElement('li');
    let content = document.createTextNode(text);
    find.appendChild(listItem);
    listItem.appendChild(content);

};
console.log(addListItem('Bannana'));

// Question No 5

function changeBgColor (Id , color){
    let para = document.getElementById(Id);
    para.style.backgroundColor = color;
};

console.log(changeBgColor('para2', '#00f'));

// Question No 6

function saveObj(animalName, eyesColor){
    let animal ={
        name: animalName,
        eyesColor: eyesColor,
        eatsMeat: true,
    }
    let stringify = JSON.stringify(animal);
    localStorage.setItem('animal', stringify);
};

console.log(saveObj('lion', 'Black'));

// Question No 7

let prevanimal = localStorage.getItem('animal');
let animal = prevanimal ? JSON.parse(prevanimal) : [];

function getObj (){
    
}

console.log(getObj());


// Question No 8

let prevStudents = localStorage.getItem('students'); 
let students = prevStudents ? JSON.parse(prevStudents) : [];

function provideStudents () {
    let std = {
    name: 'Arbaz',
    rollNo: 5679,
    teacher: 'Ishaq',
};
  students.push(std);
  console.log(students);
  let stringify = JSON.stringify(students); 
  localStorage.setItem('students', stringify); 
};