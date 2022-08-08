let num1 = 10
let num2 = 20
//LOGICAL OPERATORS
let num3 = "10"
let word1 = "Hello";
let word2 = "hello";

console.log(num1 < num2); //less than
console.log(num1 > num2); //greater than
console.log(num1 <= num2); //less than or equal to
console.log(num1 >= num2); //greater than or equal to 
console.log(!true); //not true
console.log(!false); //not false.  ! means not
console.log(num1 == num3);
console.log(num1 === num3); // equality check
console.log(word1 === word2); 
console.log(word1 != word2);  //not equal to 

//CONTROL FLOW
let item = "U2";
if (item === "Annapurna") {
    console.log("Buy Annapurna");
} else if (item === "U2"){
    console.log("Buy U2");
}

// Grading system
let ,score = 900;
if (score>= 90){
    console.log("Excellent");
} else if (score>= 80){
    console.log(VeryGood);
}else if(score>= 70){
    console.log("Good");
} else if (score >= 60){
    console.log("credit");
} else if (score>= 40);{
    console.log("pass");
}  if (score>= 0){
    console.log("fail");
}


let score = 100;
if (score >= 0 &&  100){
 if (score >= 90){
    console.log("Excellent");
 }else if (score >= 80);{
    console.log("very good")
 }
}

// FUNCTION
function sum(a,b){
    let total = a + b;
    return total;
}

let eleven = sum(5, 6);
let fifteen = sum(7, 8);
let nineten = sum(9, 10);
console.log(sum (5, 6));


function multiply(a, b ){
    let total = a*b;
    return total;
}
let twelve = multiply(3, 4);
let twenty = multiply(4, 5);
console.log(multiply (2, 0));

// LOOPS
// For Loop
for (let i = 1; i <= 10 ; i ++){
    console.log(i + ".I will not talk in class again");
}

//While Loop
let num = 1;
while (num <= 10){
    console.log(num);
    num = num + 1;
}

// Do.... While Loop
let age  = 100;
do {
    console.log(age + ".You cant vote");
    age ++;
} while(age < 18) ;

// Array Methods
let ages = [19, 26, 24, 18, 22, 35, 30, 18, 33, 31, 29];

for (let age of ages){
    console.log(Math.pow(age, 2));
}

let  marriage = ages.filter((mark)=>25);
console.log(marriage)

//Map
let squares = ages.map((age)=> age * age);
console.log(squares);

// Find
let eighteen = ages.find((age)=> age === 18);
console.log(eighteen);