// var string = "Furqan Zamir";
// var string2 = "Rahima Khan"
// console.log(string + " "+ string2);

// //sol 1
// var intiger = 7;
// console.log(intiger ** intiger); // 7 ** 7 meand seven into the power 7
// console.log(10**-1);

// //sol2
// console.log(5 + "furqan"); // output 5furqan
// console.log(5 - "furqan"); // output NaN its a bug

//sol3
// var a=10;
// var b=5;
// // output a=5; b=10
// var c = b; //c = 5
// b=a; // b = 10
// a=c; // a = 5
//console.log("The value of a is " + a + " "+ "The value of b is " + b);

//sol4
// var a=10;
// var b=5;

// a = a + b; // a = 15
// b = a - b; // b = 10
// a = a - b; // a = 5
// console.log("The value of a is " + a + " "+ "The value of b is " + b);

// if(age > 30){
//     console.log("You are eligible to the next round");
// }else{
//     console.log("You are not eligible to the next round");
// }

//value1 is ture and value2 is false condition show 
//variblename = (condition)?value1:value2
// var age = 40;
// agecondition = (age > 40)? "you are eligible for next round" : "You are not eligible for the next round";
// console.log(agecondition);

// var PI=3.142,l=10,b=5,r=2,area;
// area = "circle";

// if(area == "circle"){
//     console.log("the are of the circle is" + PI*r**2);
// }else if(area == "traingle"){
//     console.log("the are of the traingle is" + (l*b)/2);
// }else if(area == "rectangle"){
//     console.log("the are of the circle is" + (l*b));
// }else{
//     console.log("Please enter a correct value");
// }


// switch(area){
//     case "circle":
//         console.log("the are of the circle is " + PI*r**2);
//         break;
//     case "traingle":
//         console.log("the are of the traingle is " + (l*b)/2);
//         break;
//     case "rectangle":
//         console.log("the are of the circle is " + (l*b));
//         break;
//     default:
//         console.log("Please enter a correct value");
// }

// while loop

// var num = 0;
// //Block Scope

// while(num <= 10){
//     console.log(num);
//     num ++
// }

// Do while loop

// var num = 100;

// do{
//     console.log(num);
//     num ++;
// }while(num<=10)

//For loop
// var tablenumber = 457987;
// for(var num = 1; num <= 10; num++){
//     console.log(num + " x " + tablenumber + " = " +num*tablenumber);
// }

//Sum Funciton 
//function sum(a,b) a and b is called parameter and calling function sum(10,30) is argument value 
// why function, reused code in smart way 
// function sum(a,b){
//     var a,b;
//     var total= a + b;
//     console.log(total);
// }
// sum(10,50);
// sum(60,550);
// sum(100,545450);


// //function expression
// function sum(a,b){
//     return total= a + b;
// }
// var funcexpr = sum(10,50);
// console.log("The sum of two number is "+funcexpr)


//Ananymouse function
// var funcexpr = function(a,b){
//     return total= a + b;
// }
// var sum = funcexpr(5,66);
// //console.log(funcexpr(5,66));
// console.log("The sum of two number is "+sum)


//Let, Const, var

// let name = "Furqan Zamir";
// console.log(name);

// name = "zamir ahmed";
// console.log(name);

// const name = "furqan zamir";
// console.log(name);

// name = "zamir ahmed";
// console.log(name);
//var we can used anywhere but let keyword has block scope
//const we can not change the value and block scope
// function biodata(){
//     var myfirstname = "Furqan Zamir"
//     console.log(myfirstname);
//     if(true){
//         var mylastname = "zamir"
//         console.log("inner" + mylastname)
//         console.log("inner" + myfirstname)
//     }
//     console.log("innerouter" + mylastname)
// }
// biodata();

//For loop with Literals Template
// var tablenumber = 12;
// for(var num = 1; num <= 10; num++){
//     //console.log(num + " x " + tablenumber + " = " +num*tablenumber);
//     console.log(`${num} + ${tablenumber} = ${num*tablenumber}`)
// }

//Default Parameter 
//One parameter you assign the value below is the example 
// function Mult(a,b=5){
//     return a + b;
// }
// console.log(Mult(10))


// function sum(){
//     var a = 10;
//     var b = 20;
//     var total = a + b;
//     return `the sum two number is ${total}`;
// }
// console.log(sum());

// Arrow Function 
// const sum = () =>{
//     var a = 10;
//     var b = 20;
//     var total = a + b;
//     return `the sum two number is ${total}`;
// }
// console.log(sum());

//Arrow function shorten the code
// const mult = (a,b) => a*b;
// console.log(mult(10,9));

//2015 Let const 
//Template String
//Default Argument
//Destructure
//Rest Operator 
//Object Operator
//Arrow Function


//Array In Javascript

// var myarr = ["Furqan","faisal","fawad","farrukh"]
// console.log(myarr[0]);

//Traversal Array 

// var myarr = ["Furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];
// console.log(myarr[0])

// //if we want to check the length of element of an array
// console.log(myarr.length -1);

//For in Loop

//var myarr = ["Furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];

//For In Loop array index will show 
// for(let element in myarr){
//     console.log(myarr[element]);
// }

//var myarr = ["Furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];

//For of loop array element will show 
// for(let element of myarr){
//     console.log(element)
// }


//forEach has three argument with function element, index and array
// var myarr = ["Furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];

// myarr.forEach(function(element,index,array){
//     console.log(element +" "+ index + " "+ array);
// })

//const cars = ["Saab", "Volvo", "BMW"];

// cars.forEach(function(element,index,array){
//     console.log(element,index,array)
// })

//function convert arrow function

// cars.forEach((element,index,array)=>{
//     console.log(element)
// })

//indexof searching in array 
//var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];

// var myarrayfind = myarr.indexOf("faisal")
// console.log(myarrayfind);

//LastIndexof searching in array and match last of array 
// var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed","faisal","anas","khurram","faisal"];
// var myarrayfind = myarr.lastIndexOf("faisal")
// console.log(myarrayfind);

//include() This allows us to check if an element is present in the array (including, NaN,unlike,indexOf) 
// var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed","faisal","anas","khurram","faisal"];
// var myarrayfind = myarr.includes("ahmed")
// console.log(myarrayfind);

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple");
// console.log(position)

//Find array 
// const fruits = [8,7,9,10,45,98,11];
// let position = fruits.find(mygreaterfunction);

// function mygreaterfunction(value,index,arr){
//     return value > 50;
// };
// console.log(position);
//Find array with map 
// const fruits = [8,8,20,30,40];
// var mynewarray = fruits.map((curelm,index,arr)=>{
//     return curelm > 18
// })

// console.log(mynewarray);

// Array of length 
// console.log(myarr.length);

// // Array of index value get
//var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];
// console.log(myarr.at(2)); //outpt fawad indexing start from 0
// console.log(myarr[2]); // output same as above fawad

// // Array of join 
//var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];
// console.log(myarr.join(" * ")); // out furqan * faisal * fawad etc

// Array of toString
//var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];
//console.log(myarr.toString()); // out furqan,faisal,fawad etc

//Array The pop() method returns the value that was "popped out": ahmed
//var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];
//console.log(myarr.pop());

//Array The push() method adds a new element to an array (at the end) // sufyan
//var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];
// console.log(myarr.push("sufyan"));
// console.log(myarr)

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
// var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];
// console.log(myarr.shift());
// console.log(myarr)

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
//var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];
// console.log(myarr.unshift("abdullah"));
// console.log(myarr)

// Changing Elements
// Array elements are accessed using their index number:

// Array indexes start with 0:

// [0] is the first array element
// [1] is the second
// [2] is the third ...
// var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];
// myarr[1] = "zamir"
// console.log(myarr);

//The length property provides an easy way to append a new element to an array:
// var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];
// myarr[myarr.length] = "zamir"
// console.log(myarr);

//The concat() method creates a new array by merging (concatenating) existing arrays:

// var myarr = ["furqan","faisal","fawad","farrukh","maaz","saad","ahmed"];
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// const arr1 = ["Cecilie", "Lone"];
// var concatarray = fruits.concat(myarr,arr1);
// console.log(concatarray);

//splice(1,1,"maaz") means first 1 value index
//Return value of splice is array
//var myarr = ["furqan","faisal","fawad","farrukh","zain","saad","ahmed"];
// var namearray = myarr.splice(2,0,"Fawad");
// console.log(myarr);


//search and update through indexOf find the array index, if not found the return -1 otherwise indexing

// var mynamearrayupdate = myarr.indexOf("faisal");
// if(mynamearrayupdate != -1){
//     var namearray = myarr.splice(mynamearrayupdate,1);
//     console.log(myarr)
// }else{
//     console.log("No such data found!");
// }
// map array return new array , it return new array didnt disturb the actual array but forEach method change the actual array 
//map method we used other function also sort, reduce, filter
//var myarr = [1, 4, 9, 16, 25];
// let newarray =myarr.map((currElm,index,arr)=>{
//     return currElm > 9;
// })
// console.log(myarr);
// console.log(newarray);

// let newarr = myarr.forEach((currElm,index,arr)=>{
//     return `index no = ${index} and the value is ${currElm} belong to ${arr}`
// })
// console.log(newarr)

// const mynewarray = myarr.map((curelm,index,arr)=>{
//     return curelm * 2
// })
// console.log(mynewarray);

// var myarr = [25,36,49,64,81];
// let arrasquare=myarr.map((currElm,index,arr)=>{
//     return Math.sqrt(currElm);
// });

// console.log(arrasquare)
//changing effect filter used the same current array in filter
// var myarr = [2,3,4,6,8];
// let arrasquare=myarr.map((currElm,index,arr)=>{
//     return currElm * 2;
// }).filter((currElm)=>{
//     return currElm > 10;
// })
//one line above code .
// var myarr = [2,3,4,6,8];
// let arrasquare2=myarr.map((currElm,index,arr)=>currElm * 2).filter((currElm)=>currElm > 10)

// console.log(arrasquare2)

//Flatten an array menas to convert the 3d or 2d array into a single dimension array
//https://www.w3schools.com/jsref/jsref_reduce.asp
// let mynewarray = [20,20];
// let myarr = [10,10];
// let finalarray = mynewarray.concat(myarr);
// let sum = finalarray.reduce((accumulator,currElm,index,arr)=>{
//     return accumulator += currElm;
// })
// console.log(sum);

// var myarr = [2,3,4,6,8];
// let arrasquare2=myarr.map((currElm,index,arr)=>currElm * 2).filter((currElm)=>currElm > 10).reduce((accumulator,currElm)=>{
//     return accumulator += currElm;
// })
// console.log(arrasquare2);

// const arr =[
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8']
// ];

// let mynewarr = arr.reduce((accum,curnval)=>{
//     return accum.concat(curnval);
// })
// console.log(mynewarr);

// let myarr = [2,3,4,8,10,16,18];

// let mynewarr = myarr.map((value,index,arr)=>{
//     if(value > 10){
//         console.log(value)
//     }
// })

//function stringFunc(param) this is pararmeter 
// function stringFunc(param) {
//     console.log(param);
// }
// //stringFunc("Furqan Zamir") this is argument
// stringFunc("Furqan Zamir")

//findindex return the index of the array where condition true means 10 > array that is 16 index 5 will showS 
// let myarr = [2,3,4,8,10,16,18];
// let mynewarray = myarr.findIndex(findingarray);
// function findingarray(value,index,arr){
//     return value > 10
// }
// console.log(mynewarray)

//ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
// let myarr = [789,3,4,10,16,18.158,192,500,658,8,2];
// let mynewarray = myarr.findLast(x => x > 10);
// console.log(mynewarray)

//The findLastIndex() method finds the index of the last element that satisfies a condition.
// let myarr = [789,3,4,10,16,18.158,192,500,658,8,2];
// let mynewarray = myarr.findLastIndex(x => x > 10);
// console.log(mynewarray)

// Remove the Negative Number
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// let mynewarrs = myNumbers.forEach((value,index,arr)=>{
//     if(value >=0){
//         console.log(value);
//     }
// })
// let mynewarr = myNumbers.map((curElm,index,arr)=>{
//     if(curElm >= 0){
//         console.log(curElm);
//     }
// })
// console.log(mynewarr);

// const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// var largest = 0;

// for(var i=0; i<=myNumbers.length; i++){
//     if(myNumbers[i]>largest){
//         largest = myNumbers[i];    
//         console.log(largest);    
//     }
// }

//reduce function new array combine, new array create and addition, percentage, average etc
//100 is a initial value we can pass one value eg for subject value in array and one value is string so we can pass as a initial value.
// let arr = [5,6,2];
// let newarr = arr.reduce((accum,curElm)=>{
//     return accum *=curElm;
// },100)
// console.log(newarr);

// Array inside array we have to check another method
// const arr =[
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8',['zone_5','zone_6']]
// ];

// let mynewarr = arr.reduce((accum,curnval)=>{
//     return accum.concat(curnval);
// })
// console.log(mynewarr);

//String, Used single quote and double quote, storing and manipulating text

// let myname = "Furqan Zamir";
// let myjobtitle = "Consultant Frontend Developer";

// let ytname = new String("Furqan Zamir");

// console.log(myname);
// console.log(myjobtitle);
// console.log(ytname); // string convert into array or split in character wise

//String Length 
// let myname = "Furqan Zamir";
// console.log(myname.length);

//Escape Character
// let myname = 'furqan zamir \'Consultant developer\'';
// console.log(myname);

// finding a string in a string

// let myname = 'furqan zamir Consultant developer';
// console.log(myname.indexOf("t",13));

//Last Index of find in the last element of the string
// let myname = 'furqan zamir Consultant developer';
// console.log(myname.lastIndexOf("t"));

//Searching for a string in a String // output where match the string the show the index of the starting string.
// let myname = 'furqan zamir Consultant developer';
// console.log(myname.search("zamir"))

//there are 3 method for extracting a part of a string:
// slice(start, end) // slide extract a part of a string and return the extracted part in a new string
// substring(start, end)
// substr(start, end)

//In slice last index will not show  
// let myname = 'Apple, Banana, Kiwi, Mango';
// //let res = myname.slice(0,5);
// //let res = myname.slice(5,-2);
// console.log(res);

//Create code and limit 280 character 

// let mystring="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// let res = mystring.slice(0,280);
// console.log(res.length);
// console.log(res);

//substring is similar to slice but negation can not add
// let myname = 'Apple, Banana, Kiwi, Mango';
// //let res = myname.substring(0,4);
// let res = myname.substring(7,-2); // start 7 character
// console.log(res);


// the substr() method
// let myname = 'Apple, Banana, Kiwi, Mango';
// let res = myname.substr(0,4); 
// //let res = myname.substr(-5); //output Mango
// console.log(res); //output Appl

//Replacing string content
// let mynewarr="Furqan Zamir";
// let myres = mynewarr.replace("Furqan","zamir")
// console.log(myres); //Output zamir Zamir 
// console.log(mynewarr); //output Origina data never change

//Extracting Character Method
// let str = "Hello World"
// console.log(str.charAt(0)); //output H

//charcodeAt return the unicode of the string 0 to 65535
// let str = "Hello World"
// console.log(str.charCodeAt(0)); //output H unicode 72

//Last Character find from the string
// let str = "Hello World"
// let strlength = str.length -1;
// console.log(str.charCodeAt(strlength)); //output d unicode 100

//Character string as a Array 
// var str = "HELLO WORLD";
// console.log(str[2]); //Output L 


//TO upercase and ToLowercase 
// var str = "Furqan Zamir";
// //console.log(str.toLowerCase()); // Output furqan zamir
// console.log(str.toUpperCase()); // Output FURQAN ZAMIR

//Concat Method in String
// let fName = "Furqan Zamir"
// let lName = "Zamir Ahmed"
// console.log(`${fName} and ${lName}`)
// console.log(fName + " " +lName );
// console.log(fName.concat(lName));
// console.log(fName.concat(" ",lName));

//String trim method remove starting and end remove the white space
// let str = "          HELLO WORLD"
// console.log(str.trim());

//String convert into array we used split
// let str = "abcdef"
// console.log(str.split(","));
// console.log(str.split(" "));
// console.log(str.split("|"));

//Split with space bar or without space they convert into array
// let text = "How are you doing |today?.";
// const myArray = text.split("");
// const myArray2 = text.split(",");
// console.log(myArray);
// console.log(myArray2);

//Date and Time in Javascript Four formate for Date new Date Constructor
// new Date();
// new Date(year, month, day, hours, minutes, seconds, miliseconds)
// new Date(miliseconds)
// new Date(date string)

//let currentDate = new Date();
// console.log(currentDate); //Thu Aug 15 2024 13:47:50 GMT+0500 (Pakistan Standard Time)
// console.log(currentDate.toLocaleDateString()); //8/15/2024
// console.log(currentDate.toString()); //Thu Aug 15 2024 13:47:50 GMT+0500 (Pakistan Standard Time)
// console.log(currentDate.toLocaleString(2024, 11)); // 8/15/2024, 1:54:05 PM


//Date method 
// console.log(currentDate.toLocaleString()) //8/15/2024, 2:09:43 PM
// console.log(currentDate.getFullYear()) //2024
// console.log(currentDate.getMonth()) //7
// console.log(currentDate.getDate())// 15
// console.log(currentDate.getDay()) // 4

//set Date method means its show in milisecond
// console.log(currentDate.setFullYear(2024))
// console.log(currentDate.setMonth(10))
// console.log(currentDate.setDate(15))
// console.log(currentDate.toLocaleString(10))

//Time Methods

// const curTime = new Date()
// console.log(currentDate.getTime(2024))
// console.log(currentDate.getHours(10))
// console.log(currentDate.getMinutes(15))
// console.log(currentDate.getMilliseconds(10))

//const curTime = new Date()
//console.log(currentDate.setTime())
// console.log(currentDate.setHours(10))
// console.log(currentDate.setMinutes(15))
// console.log(currentDate.setMilliseconds(10))

//Only Time
//console.log(curTime.toLocaleTimeString());

//Only Date
//console.log(curTime.toLocaleDateString());

//Only Houes
//console.log(curTime.toLocaleString());

//To Math Object in Javascript

// console.log(Math.PI); //Output 3.14159
// console.log(Math.round(10.52598)); //output 11 10.5 means its 11 in round
// console.log(Math.pow(2,4))// output 16 e.g 2*2*2*2

//Math.sqrt
// console.log(Math.sqrt(25));
// console.log(Math.abs(-10)); //abs means absolute positive number
// console.log(Math.abs(-55)); //abs means absolute positive number
// console.log(Math.abs(-0.59898)); //abs means absolute positive number
// console.log(Math.abs(10-80)); //abs means absolute positive number

//Math.ceil return the value of x rounded up to its nearest integer after 1.2 means next number will show 2
// console.log(Math.ceil(2.1)); //output 3
// console.log(Math.round(2.1)); //output 2

//Math.floor() return befor decimal show that number
//console.log(Math.floor(2.8)); //output 2

//Math.min minimum number
//console.log(Math.min(10,55,-10,-59,-47)); //output -59

//Math.max maximum number
//console.log(Math.max(10,55,-10,-59,-47)); //output 55

//Math.roundom()
//Math.random() return a random number between 0 (inclusive), and 1 (included)

// console.log(Math.random()*10); // 0 to 9 output 2.4073445470084898
// console.log(Math.floor(Math.random()*10)); // output always before . digit 2 1 7 9

//Math.trunc()
//The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

//DOM in Javascript
//window is a container and global object, entire browser window
//All the member like object,methods or properties

//Document means body part of the object or child of window object

//window child related means inside the Html
//BOM browser object model
//BOM related to the window navigator, screen, location,frames,history XML.HttpRequest

// let divselect = document.querySelector('body');
// divselect.style.backgroundColor ="#494949"

// let firstchildElm = document.body.children;
// console.log(firstchildElm) // Output div.container

// let parentelem = document.body.parentElement
// console.log(parentelem) // html

// let parentelem = document.body.previousSibling
// console.log(parentelem) // html

//document.getElementsByTagName('gender'); // Get all the element value of name="gender"

//document.querySelectorAll('p')

//Event, Onload,OnClick, onChange, Mouse event, Key Event, Event Handler attribute etc 

//4 four of javascript event alert(); or Function calling, Inline Event, addEventListener

//addEventListener if we call multiple all will be run, console or alert both will be run,

//Onclick event call last one this overide, last one will be execute.

//Event Object is the parent-object of the event object.

//MouseEvent, focusEvent, KeyboardEvent etc

//Input Event onchange event

//settimeout or setinterval and cleartimeout

//Spread Operator to combine two array

// const colors = ['red', 'green', 'blue', 'white'];
// const mycolors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];
// const mynewcolors = [...colors, 'yellow', 'black']
// console.log(mynewcolors);


//Array include 
// const mycolors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];
// const incarray = mycolors.includes('blue');
// console.log(incarray);

//Exponential operator
 
// console.log(2**4); //output 16

// //ES8 Feature 2017 Years

// const message = "my name is furqan";
// console.log(message.padStart(5));
// console.log(message.padEnd(10));

 //cleartimeout example 
//  function myfunctionnew(){
//     alert('Welcome to my team');
// }

// //settimeout example 
// const btnme = document.querySelector('#btnme');
// const showme = document.querySelector('#showme');

// //setinterval
// const showmyname = ()=>{
//     showme.innerHTML = 'Loading ..... ';
//     setTimeout(() => {
//         showme.innerHTML = 'Furqn Zamir';
//     }, 1000);
// }

// btnme.addEventListener('click',showmyname);

// function myalertfun(){
//     alert('i am awesome!');
// }
// const thirdevent = document.getElementById('thirdevent');
// thirdevent.onclick= function () { 
//     alert('i am awesome again!');
//  }

//  //clikc event in addeventlistener
//  const fourthevent = document.getElementById('fourthevent');
//  fourthevent.addEventListener('click',()=>{
//     alert('i am awesome again and again!')
//  })

//  //events
//  const fivethevent = document.getElementById('fivethevent');
//  const checkeventfn = () =>{
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);        
//  }

//  fivethevent.addEventListener('click',checkeventfn);

//  //mousedown event
//  function mousedown(){
//     document.getElementById('sixthevent').style.backgroundColor="red";
//  }

//  //mouseup event
//  function mouseup(){
//     document.getElementById('sixthevent').style.backgroundColor="green";
//  }


//  //mouseevnt with addeventlister
//  const seventhevent = document.getElementById('seventhevent');
//  const mouseenter = ()=>{
//     seventhevent.style.backgroundColor = 'purple'
//  }
//  seventhevent.addEventListener('onmouseenter',mouseenter);

//  //mouseleave with addeventlister
//  const seventhevent2 = document.getElementById('seventhevent');
//  const mouseleave = ()=>{
//     seventhevent2.style.backgroundColor = 'yellow'
//  }
//  seventhevent2.addEventListener('onmouseleave',mouseleave);

//  //keypress, keup and keydown
//  const keypress = ()=>{document.getElementById('keys').innerHTML= `your press ${event.key} and its code is ${event.code}`};
//  const keydown = ()=>{document.getElementById('keys').innerText='Keys its Down'}
//  const keyup = ()=>{document.getElementById('keys').innerText='Keys its Up'}

//  //select event 
// const selectElement = () =>{
//     const iceCreams = document.getElementById('iceCreams').value;
//     const inputchange = document.getElementById('ice').value;
//     const result = document.getElementById('result');
//     result.innerHTML = `Furqan select this falavour ${iceCreams} and ${inputchange}`
//     console.log(`${iceCreams} and ${inputchange}`)
// }
// const iceCreams = document.getElementById('iceCreams');

// //onchange evenet
// iceCreams.addEventListener('change',() => {
//     const iceCreams = document.getElementById('iceCreams').value;
//     const inputchange = document.getElementById('ice').value;
//     const result = document.getElementById('result');
//     result.innerHTML = `Furqan select this falavour ${iceCreams} and ${inputchange}`;
//     console.log(`${iceCreams} and ${inputchange}`);
// });

// //mouseenter event
//  function mouseenter(){
//     document.getElementById('seventhevent').style.backgroundColor="purple";
//  }

//  //mouseleave event
//  function mouseleave(){
//     document.getElementById('seventhevent').style.backgroundColor="yellow";
//  }


// function changeContent(){
//     document.getElementById("textchange").innerHTML="Welcome to Furqan Zamir";
//     let txtchange= document.querySelector('#textchange');
//     txtchange.innerHTML="Welcome to furqan zamir"
// }

// alert(location.href);

// //confirm 
// if(confirm("right now you are in Javascript Tutorial")){
//     location.href="https://www.w3schools.com/";
// }
// function goback(){
//     window.history.back();
// }

// function myfunction(){
//     let d = new Date();
//     d.setHours(5);
//     d.setDate(16);
//     document.getElementById("demo").innerHTML=d;
// }
// (function(){
//     setInterval(() => {
//         var d = new Date().toLocaleTimeString();
//         document.getElementById("time").innerHTML=d;
//     }, 1000);
// })();

//Object

// let biodata= {
//     myname:"furqan zamir",
//     lastname: "zamir ahmed",
//     myage:36,
//     getdata(){
//         console.log(`my name is ${biodata.myname} and my age is ${biodata.myage}`)
//     }
// }

// biodata.getdata();

// let biodata= {
//     myname:{
//         realname: "furqan Zamir Real Namr",
//         chanelname:" Furqan Zamir Channel Name"
//     },
//     lastname: "zamir ahmed",
//     myage:36,
//     getdata(){
//         console.log(`my name is ${biodata.myname} and my age is ${biodata.myage}`)
//     }
// }

// console.log(biodata.myname.realname);

//This object

// console.log(this);
// console.log(this.alert("awesome "));

// var mynewname = "furqan"
// function myfun() {
//     console.log(this.mynewname);
// }
// myfun();


// const obj={
//     myage:35,
//     myname(){
//         console.log(this);
//     }
// }
// obj.myname();

//fat arrow function we can not used this function, it will call window object
// const obj={
//     myage:35,
//     myname:()=>{
//         console.log(this);
//     }
// }
// obj.myname();

// let biodata= {
//     myname:{
//         realname: "furqan Zamir Real Namr",
//         chanelname:" Furqan Zamir Channel Name"
//     },
//     lastname: "zamir ahmed",
//     myage:36,
//     getdata(){
//         console.log(`my name is ${this.myname.chanelname} and my age is ${this.myage}`)
//     }
// }
// biodata.getdata();

//Array Destructuring and object destructuring

// const mybiodata =["furqan", "zamir", 26];

// // let myfname = mybiodata[0];
// // let mylastname = mybiodata[1];
// // let myage = mybiodata[2];

// let [myfname,mylastname,myage,mydegree="BCIT"] = mybiodata;
// console.log(mydegree);

// const mybiodata ={
//     myname : "furqan 1225",
//     myage : 26,
// }
// let age =mybiodata.age;
// let myname= mybiodata.myname;

// console.log(myname);


//Dynamic data how to pass in array object, we used square bracket in dynamic

// let myname = "Furqan Zamir";
// let biodata={
//     [myname]:"Hello how are you!",
//     [20+6]:"is my age"
// }
// console.log(biodata);

//Create own key value in array object

// let myname = "Furqan zamir";
// let myage = 26;

// // const biodata = {
// //     myname: myname,
// //     myage:myage
// // }

// const biodata = {myname,myage};
// console.log(biodata)

// let biodata = {myname:"furqan",myage:26}
// console.log(Object.values(biodata));
// console.log(Object.entries(biodata));


//rest spread opeator in array
// const person = {name:"furqan", myage:26,degree:"bcit",lastname:"zamir ahmed"};
// const eperson = {...person};

// console.log(person);
// console.log(eperson);

//flat in array 
// const arr =[
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8',['zone_5','zone_6']]
// ];

// console.log(arr.flat());
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));

//fromEntries

// let person = {myname:"furqan Zamir", myage:26}
// let arrobj = Object.entries(person);
// console.log(arrobj)
// console.log(Object.fromEntries(arrobj));

// use strict force to declare variable 
// "use strict"
// let x=3.14;
// console.log(x);

//that function call as a argument its higher function
// const add = (a,b)=>{
//     return a+b;
// }
//console.log(add(5,10));

// const sub = (a,b)=>{
//     return Math.abs(a-b);
// }
//console.log(sub(20,-10));

// const mul = (a,b)=>{
//     return a*b;
// }
//console.log(mul(20,10));

// const calculation = (num1,num2,operator)=>{
//     return operator(num1,num2);
// }
//sub,mul,add is callbcak function
// console.log(calculation(5,2,sub));
// console.log(calculation(5,2,mul));
// console.log(calculation(5,2,add));

//Asyncrhronouse JavaScript Programming
//Hoisting Javascipt is a mechanism where variables and functions(var used in this, Hoisting mean function call before declaration)
//Declaration are moved to the top of their scope before the code execute

//We have a creation phase and execution phase
// console.log(myname);
// var myname;
// myname = "furqan";

//Scope change in javascript lexically define
//const PI = 3.142;

//Its allow parant function and variable but if you call function scope outside the function, it will be not defin see the next example
// let a = "Hello Guyz..."
// const first =()=>{
//     let b ="How are you?"
//     let second=()=>{
//         let c = "Hi i am fine thank you"
//         console.log(a+b+c);
//     }
//     second();
// }
// first();


// let a = "Hello Guyz..."
// const first =()=>{
//     let b ="How are you?"
//     let second=()=>{
//         let c = "Hi i am fine thank you"        
//     }
//     second();
//     console.log(a+b+c); // here c is not define
// }
// first();

//Closure in Javascript

// const outerfunction = (a)=>{
//     let b = 10;
//     const innerfunction = () =>{
//         let sum = a+b;
//         console.log(`the sum of two no is ${sum}`)
//     }
//     innerfunction();
// }
// console.log(outerfunction(5));


// const outerfunction = (a)=>{
//     let b = 10;
//     const innerfunction = () =>{
//         let sum = a+b;
//         console.log(`the sum of two no is ${sum}`)
//     }
//     return innerfunction;
// }
// let checkclosour = outerfunction(5);
// console.dir(checkclosour());

//Synchronous and Asynchronous Javascript
//Synchronouse javascript one by one execute the function etc
//and Asycnhronouse javascript run as a parallel 

//Asynchronouse Example
// const funct2 = () =>{
//     console.log("The function 2 is called") 
// }
// const func1=()=>{
// console.log("the function 1 is called")
// funct2();
// console.log("the another function called function2");
// }
// func1();

//Asynchronouse 
// const funct3 = () =>{
//     setTimeout(()=>{
//         console.log("The function 2 is called")
//     },2000);    
// }
// const func4=()=>{
//     console.log("the function 1 is called")
//     funct3();
//     console.log("the another function called function2");
// }
// func4();

//Event Loop 
//Currying Technique in Javascript means function inside function inside function call and all function has one argument
//At its core, currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each. This creates a chain of functions, where each function returns another function until the final result is achieved.

//sum(5)(3)(8)
// function sum(num1){
//     //console.log(num1)
//     return function(num2){
//        // console.log(num1,num2,num3)
//        return function(num3){
//         console.log(num1,num2,num3)
//        }
//     }
// }
// sum(5)(3)(8)

// const sum = (num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);
// sum(5)(3)(8)

//Call Back Function Hell
// setTimeout(()=>{
//     console.log("1 work is done")
//     setTimeout(() => {
//         console.log("2 work is done")
//         setTimeout(() => {
//             console.log("3 work is done")
//             setTimeout(() => {
//                 console.log("4 work is done")
//                 setTimeout(() => {
//                     console.log("5 work is done")
//                     setTimeout(() => {
//                         console.log("6 work is done")
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// },1000)

// var my_object = {key_1:"some text", key_1:true,key_3:5}
// var object_as_string = JSON.stringify(my_object);
// console.log(object_as_string);

// typeof(object_as_string);

//PROMISES
//Either Success and reject or Fullfill and Reject

const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");
const setHeader = {
    headers:{
        Accept: "application/json"
    }
}

const generatejokes = ()=>{
     fetch('https://icanhazdadjoke.com', setHeader)
    .then((res)=>res.json() )
    .then( (data) => {
        joke.insertAdjacentHTML("afterbegin",data.joke);
    }).catch((error)=>{
        console.log(error)
    })
}
jokeBtn.addEventListener("click",generatejokes);
generatejokes();


// const res = await fetch('https://icanhazdadjoke.com', setHeader);
// const data = await res.json();

