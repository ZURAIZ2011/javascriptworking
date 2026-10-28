

// let input = prompt("Enter a number for Table")
// console.log(input);


// let coefficient = input
// let table = coefficient

// document.write(`Program to print multiplication table of a  number`)
// document.write("<br>")

// document.write(`${coefficient} * 1 = ${table * 1} ` ) 
//   document.write("<br>")

// document.write(`${coefficient} * 2 = ${table * 2} ` ) 
// document.write("<br>")
// document.write(`${coefficient} * 3 = ${table * 3} ` ) 
// document.write("<br>")
// document.write(`${coefficient} * 4 = ${table * 4} ` ) 
// document.write("<br>")
// document.write(`${coefficient} * 5 = ${table * 5} ` ) 
// document.write("<br>")
// document.write(`${coefficient} * 6 = ${table * 6} ` ) 
// document.write("<br>")
// document.write(`${coefficient} * 7 = ${table * 7} ` ) 
// document.write("<br>")
// document.write(`${coefficient} * 8 = ${table * 8} ` ) 
// document.write("<br>")
// document.write(`${coefficient} * 9 = ${table * 9} ` ) 
// document.write("<br>")
// document.write(`${coefficient} * 10 = ${table * 10}`) 
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")



// addition 

// let num1 = +prompt("enter a number for addition 1")
// let num2 = +prompt("enter a number for addition 2")





// document.write(`${num1} + ${num2} = ${num1 + num2}`)


// document.write("<br>")
// document.write("<br>")


// // subtraction 
// let num3 = prompt("enter a number for subtraction 1")
// let num4 = prompt("enter a number for subtraction 2")

// document.write(`${num3} - ${num4} = ${num3 - num4}`)


// document.write("<br>")
// document.write("<br>")

// // division 
// let num5 = prompt("enter a number for division 1")
// let num6 = prompt("enter a number for division 2")

// document.write(`${num5} / ${num6} = ${num5 / num6}`)


// document.write("<br>")
// document.write("<br>")

// // multiplicaion 

// let num7 = prompt("enter a number for multiplication 1")
// let num8 = prompt("enter a number for multiplication 2")

// document.write(`${num7} * ${num8} = ${num7 * num8}`)


// document.write("<br>")
// document.write("<br>")



// prompt("enter your name") 

//  let name = prompt("enter your name "  , " ZURAIZ")

// console.log(name);


// let total = prompt( "Your total price")
// // let final_price = 


// document.write(`Total price =Rs. ${total}`)


// document.write("<br>")

// let discount = 15/100 * total

// document.write(`discount  = Rs. ${15/100 * total}`)


// document.write("<br>")



// document.write(`Discounted price  =Rs. ${total - discount}`) 




// comparison operator 

// let age = 20
// console.log(age == 20);    //true
// console.log(age === "20");    //false
// console.log(age != 20);      // false
// console.log(age !== "20");    // true
// console.log(age > 15);     //true



// console.log(age < 15);      //false



// console.log(age >= 16);     // true





// console.log("10" < "20");  //true






// conditions

// let num = prompt("enter a number")

// if(num % 2  == 0){
//     alert("Your number is even.")
// }  else{
//    alert("Your number is odd.")  
// }





// let traffic_signal = prompt("which colour have you seen ?")

// if (traffic_signal == "red") {
// alert("stop")
// }
// else if(traffic_signal == "yellow"){
// alert("get ready")
// }
// else if(traffic_signal == "green") {
// alert("go")
// }
// else{
//   alert("invalid signal")
// }


// let marks = +prompt("enter your marks")

// if (marks >= 90) {
//     alert("A+")
// }
// else if (marks >= 80) {
//     alert("A")
// }
// else if (marks >= 70) {
//     alert("B")
// }
// else if (marks >= 60) {
//     alert("C")
// }
// else if (marks >= 50) {
//     alert("D")
// }
// else {
//     alert("Fail")
// }



// let user_name = prompt("your username");
// let password = +prompt("your password");



// if (user_name === "admin") {
//     if (password === 1234) {
//         alert("login successful")
//     }
//     else {
//         alert("wrong password")
//     }
// }
// else{
//     alert("invalid username")
// }



// let pin = +prompt("Enter your pin")
// let balance = 500000
// let withdraw = +prompt("Enter your withdraw amount")


// if(pin === 1234){

//  document.write(`remaining balance = ${balance - withdraw}`) 

//  if(withdraw <= balance){
//     alert("Transaction successful")

//  }
//  else{
//     alert("insufficient balance")
//  }

// }
// else{
//     alert("incorrect pin")
// }





// // array 

// let student = ["ali" , "usman" , "ahmed " , "babar" , "abrar" , "hamza " ,"khan " , "sajid" , "rizwan" , "shaheen" ] 
// console.log(student);

// console.log(student[3]);

// console.log(student[8]);

// console.log(student[10]);



// student[7] = "haris"
// console.log(student);



// console.log(student.length);


// // index through length 
// console.log(student[student.length - 1]);


// student.length = 0
// console.log(student.length);




// let nested = [ "box1" , ["box2" , ["box2.0" , "box2.1" , "box2.2"] , "box 2 sis" , "box 2 bro"]   , "box3" ,    ["box4" , 4 , 4.4]   ,  "box5"     ]
// let nested1
// console.log(nested);


// console.log(nested[4]);
// console.log(nested[3]);



// console.log(nested[1][2]);


// console.log(nested[1][1][0]);













// practise   


// Q15. Final challenge 🏆
// Ek employees naam ka nested array banao:

// Har employee ka name aur salary store ho.

// Kam az kam 4 employees hon.



// Second employee ka name print karo.

// Third employee ki salary print karo.

// First employee ki salary replace karo.

// Fourth employee ka name replace karo.

// Outer array ki length print karo.

// Final updated array print karo.

// Example structure:


// javascript
// let employees = [
//   ["Ali", 30000],
//   ["Sara", 40000],
//   ["Ahmed", 35000],
//   ["Zara", 45000]
// ];



let employe = [  ["Ali", 30000],  ["Sara", 40000],   ["Ahmed", 35000],   ["Zara", 45000]   ]



console.log(employe[1][0]);
console.log(employe[2][1]);


employe[0][1] = 70000

employe[3][0] = "Faiza"

console.log(employe.length);

console.log(employe);


