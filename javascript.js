<!-- JavaScript Fundamentals   -->


<!-- JavaScript -->

JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich.

JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!

JavaScript Can Change HTML Content.

The alert function in JavaScript displays a message to the user which they can then dismiss. To show where this would fit into an actual HTML document, here’s an example of a simple page with some JavaScript:

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Hello</title>
        <script>
            alert('Hello, world!');
        </script>
    </head>
    <body>
        <h1>Hello!</h1>
    </body>
</html>


<!-- or -->

One of many JavaScript HTML methods is getElementById().

The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":

Example-
document.getElementById("demo").innerHTML = "Hello JavaScript";


<!DOCTYPE html>
<html>
<body>

<h2>By using JavaScript</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>


output-

JavaScript can change HTML content.

Click Me! with a button.







<!-- introduction -->

<!-- The “script” tag
JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.

For instance: -->

<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>


<!-- To attach several scripts, use multiple tags:   -->

<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>





<!-- variables may hold values that have different data types: -->

Variable	Explanation	Example

String	This is a sequence of text known as a string. To signify that the value is a string, enclose it in single or double quote marks.	let myVariable = 'Bob'; or
let myVariable = "Bob";

Number	This is a number. Numbers don't have quotes around them.	let myVariable = 10;

Boolean	This is a True/False value. The words true and false are special keywords that don't need quote marks.	let myVariable = true;

Array	This is a structure that allows you to store multiple values in a single reference.	let myVariable = [1,'Bob','Steve',10];
Refer to each member of the array like this:
myVariable[0], myVariable[1], etc.

Object	This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn.	let myVariable = document.querySelector('h1');

All of the above examples.


<!-- Operators -->

An operator is a mathematical symbol that produces a result based on two values (or variables). In the following table, you can see some of the simplest operators, along with some examples to try in the JavaScript console.

Operator	Explanation	Symbol(s)	Example
Addition	Add two numbers together or combine two strings.	+	6 + 9;
'Hello ' + 'world!';

Subtraction, Multiplication, Division	These do what you'd expect them to do in basic math.	-, *, /	9 - 3;
8 * 2; // multiply in JS is an asterisk
9 / 3;

Assignment	As you've seen already: this assigns a value to a variable.	=	let myVariable = 'Bob';

Strict equality	This performs a test to see if two values are equal. It returns a true/false (Boolean) result.	===	let myVariable = 3;
myVariable === 4;

Not, Does-not-equal	This returns the logically opposite value of what it precedes. It turns a true into a false, etc.. When it is used alongside the Equality operator, the negation operator tests whether two values are not equal.	!, !==	
For "Not", the basic expression is true, but the comparison returns false because we negate it:

let myVariable = 3;
!(myVariable === 3);

"Does-not-equal" gives basically the same result with different syntax. Here we are testing "is myVariable NOT equal to 3". This returns false because myVariable IS equal to 3:

let myVariable = 3;
myVariable !== 3;



<!-- Conditionals -->

Conditionals are code structures used to test if an expression returns true or not. A very common form of conditionals is the if...else statement. For example:

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");



<!-- Functions -->

Functions are a way of packaging functionality that you wish to reuse. It's possible to define a body of code as a function that executes when you call the function name in your code. This is a good alternative to repeatedly writing the same code. You have already seen some uses of functions. For example:

let myVariable = document.querySelector("h1");
Copy to Clipboard
alert("hello!");



<!-- Events -->

Real interactivity on a website requires event handlers. These are code structures that listen for activity in the browser, and run code in response. The most obvious example is handling the click event, which is fired by the browser when you click on something with your mouse. To demonstrate this, enter the following into your console, then click on the current webpage:

document.querySelector("html").addEventListener("click", function () {
alert("Ouch! Stop poking me!");







<!-- *variable declaration in javascript -->

var firstName = 'rahim';
console.log (firstName);


<!-- *never use keywords in variable declaration in javascript -->

var ifelse = 10;
console.log(ifelse);


<!-- *data types in javascript -->

String.
Number.
Bigint.
Boolean.
Undefined.
Null.
Symbol.
Object.

<!-- String. -->
var firstName = 'rahim';
console.log (typeof firstName);

<!-- Number. -->
var rahim = 10;
console.log (typeof rahim);

<!-- Bigint. -->

<!-- Boolean. -->
var rahimAge10 = true;
console.log (typeof rahimAge10);

<!-- Undefined. -->
var firstName;
console.log (typeof firstName);

<!-- Null. -->

<!-- Symbol. -->

<!-- Object. -->
var rahim = {
    name:'rahim',
    age: 10,
};
console.log (typeof rahim);


<!-- * string to number convertion by parseInt use for full digit like '20' string -->

var num = '20';
const convertnum = parseInt(num);
console.log(num);

var num1 = 10;
var num2 = '20';
const convertNum2 = parseInt(num2);
const sum = num1 + convertNum2
console.log(sum);


<!-- * string to number convertion by parseFloat use for full digit like '20.333332' string -->

var num = '20.333332';
const convertnum = parseFloat(num);
console.log(num);

var num1 = 10;
var num2 = '20.333332';
const convertNum2 = parseFloat(num2);
const sum = num1 + convertNum2
console.log(sum);


<!-- * string to number convertion no need for multiplication use any digit -->

var num1 = 10;
var num2 = '20.333332';
const sum = num1 * num2
console.log(sum);

<!-- * control or limit fraction digits -->

var num1 = 10;
var num2 = 20.333332;
const sum = num1 + num2
console.log(sum.toFixed(2));


<!-- * control or limit fraction digits -->

var num1 = 10;
var num2 = 20.333332;
const sum = num1 * num2
console.log(sum.toFixed(2));


<!-- * control or limit fraction digits -->

var num1 = 10;
var num2 = 20.333332;
const sum = num1 + num2;
console.log(sum.toFixed(1));



<!-- * if --------------- -->

var name = 'hablu';
if(name == 'maklu'){
    console.log('this is maklu');
}
if(name == 'hablu'){
console.log('this is hablu');
}


<!-- * if/else if --------------- -->

var name = 'hablu';
if(name == 'maklu'){
    console.log('this is maklu');
}
else if(name == 'hablu'){
console.log('this is hablu');
}


<!-- * if/else if/else --------------- -->

var name = 'hablu';
if(name == 'maklu'){
    console.log('this is maklu');
}
else if(name == 'taklu'){
console.log('this is hablu');
}
else{
    console.log('no......');
}


<!-- * if/else if/else if --------------- -->

var num = 20;
if(num == '20'){
    console.log('this is 20');
}
else if(num == '100'){
console.log('this is 100');
}


<!-- * if/else if/else if --------------- -->

var name = 'hablu';
if(name == 'maklu'){
    console.log('this is maklu');
}
else if(name == 'taklu'){
console.log('this is hablu');
}
else if(name == 'hablu'){
    console.log('this is hablu');
}


<!-- * if/else if/else if with &&-------------- -->

var num1 = 20;
var num2 = 30;
if(num1 == 20 && num2 == 40){
    console.log('this is 50');
}
else if(num1 == 20 && num2 == 30){
console.log('it is 50');
}


<!-- * if/else if/else with &&-------------- -->

var num1 = 20;
var num2 = 30;
if(num1 == 20 && num2 == 40){
    console.log('this is 50');
}
else if(num1 == 20 && num2 == 60){
console.log('it is 50');
}
else{
    console.log('nothing is correct');
}


<!-- * if/else if with ||-------------- -->

var num1 = 20;
var num2 = 30;
if(num1 == 20 || num2 == 40){
    console.log('this is 50');
}
else if(num1 == 10 || num2 == 40){
console.log('it is 50');
}


<!-- * if/else if/else with ||-------------- -->

var num1 = 20;
var num2 = 30;
if(num1 == 20 || num2 == 40){
    console.log('this is 50');
}
else if(num1 == 20 || num2 == 60){
console.log('it is 50');
}
else{
    console.log('nothing is correct');
}


<!-- * if/else if/else with > < ------------- -->

var num1 = 100;
if(num1 > 100){
    console.log('this is 100');
}
else if(num1 < 100){
    console.log('it is 100');
}
else{
    console.log('none of above');
}


<!-- * if/else if/else with > < ------------- -->

var num1 = 100;
if(num1 > 100){
    console.log('this is 100');
}
else if(num1 < 100){
    console.log('it is 100');
}
else{
    console.log('yes it equal 100');
}


<!-- * if/else if/else with > = < ------------- -->

var num1 = 100;
if(num1 > 100){
    console.log('this is 100');
}
else if(num1 < 100){
    console.log('it is 100');
}
else if(num1 >= 100){
    console.log('may be 100');
}
else{
    console.log('none of above');
}



<!-- * if/else if/else with > && < -------------- -->

var num1 = 100;
var num2 = 200;
var num3 = 300;
if(num1 > num2 && num1 > num3){
    console.log('num1 is biggest');
}
else if(num2 > num3){
console.log('num2 is biggest');
}
else{
    console.log('num3 is biggest');
}


<!-- * if/else if/else with > && < -------------- -->

var num1 = 300;
var num2 = 500;
var num3 = 400;
if(num1 > num2 && num1 > num3){
    console.log('num1 is biggest');
}
else if(num2 > num3){
console.log('num2 is biggest');
}
else{
    console.log('num3 is biggest');
}



<!-- * if/else if/else with > && < -------------- -->

var num1 = 600;
var num2 = 400;
var num3 = 500;
if(num1 > num2 && num1 > num3){
    console.log('num1 is biggest');
}
else if(num2 > num3){
console.log('num2 is biggest');
}
else{
    console.log('num3 is biggest');
}


<!-- *nested elements of if/if else ---- -->

var number = '30';
if(number == 30){
    if (typeof number == 'string'){
        console.log('all ok');
    }
}


<!-- *nested elements of if/else ---- -->
var number = 30;
if(number == 30){
    if (typeof number == number){
        console.log('all ok');
    }
    else {
        console.log('number is 30 but not string');
    }}
    else {
        console.log('wrong');
    }
    console.log(typeof number == 'string');



<!-- *nested elements of if/else ---- -->
var number = '30';
if(number == 30){
    if (typeof number == 'string'){
        console.log('all ok');
    }
    else {
        console.log('number is 30 but not string');
    }}
    else {
        console.log('wrong');
    }
    console.log(typeof number == 'string');


<!-- *number even or odd------- -->
var num = 100;
if (num % 2 == 1){
    console.log('this is odd number');
}
else{
    console.log('this is even number');
}


<!-- *number even or odd------- -->
var num = 100;
if (num % 2 != 0){
    console.log('this is odd number');
}
else{
    console.log('this is even number');
}


<!-- *grading system------------- -->
var result = 85;
if(result >= 80){
    console.log('A+');
}
else if(result >=70){
    console.log('A');
}
else if(result >= 60){
    console.log('-A');
}
else if(result >=50){
    console.log('B');
}
else if(result >=40){
    console.log('C');
}
else {
    console.log('F');
}


<!-- *grading system my logic----------- -->
0-32=F
33-49=D
50-60=C 
60-69=B 
70-79=A
80-100=A+


var number = 75;
if(number >= 80){
    console.log('A+');
}
else if(number >= 70){
    console.log('A');
}
else if(number >= 60){
    console.log('B');
}
else if(number >= 50){
    console.log('C');
}
else if(number >= 40){
    console.log('D');
}
else if(number < 40){
    console.log('F');
}
    


<!-- *grading system------------- -->
0-32=F
33-49=D
50-60=C 
60-69=B 
70-79=A
80-100=A+


var number = 85;
if(number <= 100 && number >= 80){
    console.log('A+');
}
else if(number < 80 && number >= 70){
    console.log('A');
}
else if(number < 70 && number >= 60){
    console.log('B');
}
else if(number < 60 && number >= 50){
    console.log('B');
}
else if(number < 50 && number >= 40){
    console.log('D');
}
else if(number < 40 && number >= 0){
    console.log('F');
}


<!-- *array numbers length check ----- -->

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(numbers.length);

<!-- *array numbers length check ----- -->

var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0];
console.log(numbers.length);

<!-- *array numbers index check ----- -->

var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0];
console.log(numbers[3]);


<!-- *array numbers position check indexof ----- -->

var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0];
console.log(numbers.indexOf('tabul'));


<!-- *array push---add number or string in last  position ----------------- -->

var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0];
numbers.push('tal');
console.log(numbers);


<!-- *array pop---less number or string from last  position ----------------- -->

var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0, 'tal'];
numbers.pop('tal');
console.log(numbers);

// or--
var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0, 'tal'];
numbers.pop();
console.log(numbers);


<!-- *array unshift---add number or string at first position ----------------- -->

var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0, 'tal'];
numbers.unshift(0);
console.log(numbers);



<!-- *array shift---remove number or string from first position ----------------- -->

var numbers = [0, 1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0, 'tal'];
numbers.shift(0);
console.log(numbers);

// or--
var numbers = [0, 1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0, 'tal'];
numbers.shift();
console.log(numbers);


<!-- *splice check -----splice 3,5 means index 0,1,2,3 
position hold 4, to last 5 degit--- -->

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(numbers.splice(3,5));


<!-- *slice check -----slice 3,5 means index 0,1,2 
position hold 3, to up to mentioned degit 6, 
cutting like cake--- -->

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(numbers.slice(2,6));


<!-- *concat ['a', 'b'] ['c', 'd']; 
combination of array  -->

var number1 = ['a', 'b', 'u', 'l'];
var number2 = ['t', 'a', 'b', 'l'];
number = number1.concat(number2);
console.log(number);


<!-- *reverses an array's elements---
reverse all array number or string -->

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(numbers.reverse());


<!-- *toString combain array elements----- -->
var num = 123;
var newNum = String(num);
console.log(newNum);

var bool = true;
newBool = bool.toString();
console.log(newBool);

var obj = {name: "John"};
newObj = obj.toString();
console.log(newObj);


<!-- *join("-"); array elements----- -->

let message = ['abul', 'is', 'good'];
let joinedMessage = message.join(" ");
console.log(joinedMessage);



<!-- *loop-to perform repeated tasks based on a condition is called loop------- -->


JavaScript supports different kinds of loops:
for - 
loops through a block of code a number of times.
[syntax-The for loop starts with a for statement followed by 
a set of parameters inside the parenthesis]
for/in - 
loops through the properties of an object.
for/of - 
loops through the values of an iterable object.
while - 
loops through a block of code while a specified condition is true.



<!-- *loop syntax----------- -->

for (var i = 0; i < 10; i++){
    console.log(i);
}

output-
1
2
3
4
5
6
7
8
9


<!-- *array solveing by loop syntax----------- -->

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

for (var i = 0; i < numbers.length; i++){
var element = numbers [i];
console.log(element);
}

output-
1
2
3
4
5
6
7
8
9


// or ---

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

for (var i = 0; i < numbers.length; i++){
var element = numbers [i];
if (element == 5){
    console.log('salary is 5k')
}
}

output-
salary is 5k


// or ------

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

for (var i = 0; i < numbers.length; i++){
var element = numbers [i];
if (element == 5){
    console.log('salary is 5k')
}
console.log(element);
}


output-
1
2
3
4
salary is 5k
5
6
7
8
9


// or ------

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

var temp = [];
for (var i = 0; i < numbers.length; i++){
var element = numbers [i];
if (element % 2 == 0){
    temp.push(element);
}
}
console.log(temp);

oputput-
[ 2, 4, 6, 8 ]


// or ----


const friends = ['mahi', 'robin', 'ratul', 'mim'];

for (var i = 0; i < friends.length; i++){
    const element = friends[i];
    console.log(element);
}


output-
mahi
robin
ratul
mim


// or ----

const friends = ['mahi', 'robin', 'ratul', 'mim'];

for (var i = 0; i < friends.length; i++){
    const element = friends[i];
    if (element == 'mahi'){
    console.log('she is good');
}
}

output-
she is good





<!-- Loops-  -->
<!-- are used in JavaScript to perform repeated tasks based on a condition. -->

JavaScript supports different kinds of loops:
for - 
loops through a block of code a number of times.
for/in - 
loops through the properties of an object.
for/of - 
loops through the values of an iterable object.
while - 
loops through a block of code while a specified condition is true.


<!-- *for loop ------ -->

for (var i = 0; i < 10; i++){
     console.log('welcome');
}


output-
welcome
welcome
welcome
welcome
welcome
welcome
welcome
welcome
welcome
welcome


<!-- *loop array -------- -->

var friends = ['min', 'robin', 'jabbar', 'borkot'];

for (var i = 0; i < friends.length; i++){
     var element = friends[i];
    console.log(i);
} 

output-
 0
 1
 2
 3


<!-- * Array Symbol= [] = square bracket
Object Symbol = {} = curly bracket
to contain the list = () = parentheses  -->


<!-- *Object --------- -->

var human = {
    name: 'rahim',
    age: 25,
    friends: ['hero', 'alom', 'robin', 'manna'],
    country: 'bangladesh',
}

  console.log(human.name);

   output-
   rahim

// or ---

 var human = {
     name: 'rahim',
     age: 25,
     friends: ['hero', 'alom', 'robin', 'manna'],
     country: 'bangladesh',
 }

 console.log(human.friends);

 output-
 [ 'hero', 'alom', 'robin', 'manna' ]


 // or ---

var human = {
     name: 'rahim',
    age: 25,
    friends: ['hero', 'alom', 'robin', 'manna'],
    country: 'bangladesh',
 };

 for(var i =0; i < human.friends.length; i++){
     var element = human.friends[i];
    console.log(element);
}

output-
 hero
 alom
 robin
 manna

// or ----

 var human = {
     name: 'rahim',
     age: 25,
     friends: ['hero', 'alom', 'robin', 'manna'],
     country: 'bangladesh',
 };
console.log(human.friends[2]);


 output-
 robin


// or ----


 var human = {
     name: 'rahim',
     age: 25,
     friends: ['hero', 'alom', 'robin', 'manna'],
     country: 'bangladesh',
     married: true,
 };
 console.log(human.married);


 output-
 true






































































