// / Q1
// var num = parseFloat(prompt("Enter a positive number:"));

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br><br>");


// Q2
// var num = parseFloat(prompt("Enter a negative floating point number:"));

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br><br>");


// Q3
// var num = parseFloat(prompt("Enter a number:"));

// document.write("The absolute value of " + num + " is " + Math.abs(num) + "<br><br>");


// Q4
// var dice = Math.floor(Math.random() * 6) + 1;

// document.write("Random dice value: " + dice + "<br><br>");


// Q5
// var coin = Math.floor(Math.random() * 2);

// if (coin === 0) {
//     document.write("Random coin value: Heads<br><br>");
// } else {
//     document.write("Random coin value: Tails<br><br>");
// }


// Q6
// var randomNumber = Math.floor(Math.random() * 100) + 1;

// document.write("Random number between 1 and 100: " + randomNumber + "<br><br>");


// Q7
// var weight = prompt("Enter your weight in kilograms:");

// var parsedWeight = parseFloat(weight);

// document.write("The weight of user is " + parsedWeight + " kilograms<br><br>");


// Q8
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userNumber = parseInt(prompt("Enter a number between 1 and 10:"));

// if (userNumber === secretNumber) {
//     document.write("Congratulations! You guessed the secret number.");
// } else {
//     document.write("Try again! The secret number was " + secretNumber + ".");
// }


// function showTime(){
// let time = new Date();
// let hours = time.getHours();
// let minutes = time.getMinutes();
// document.write(hours + ":" + minutes);
// }
// showTime();

// function greet(userName1,userName2,userName3){
//     alert("Hello Welcome "   +  userName1 +' ' + userName2 + ' '+ userName3)
// }
// let user = prompt("whats your name")
// greet( user, "alishba" ,"abrish")

// let userNum1 = Number(prompt( "Enter number1"))
// let userName2 = Number(prompt("Enter number2") )
// // add
// function addition(num1,num2){
//     document.write  ("add"+( num1+num2))
//     document.write ("<br/>")
// }
// // subtract
// function subtraction(num1,num2){
//     document.write ("minus"+( num1-num2))
//      document.write ("<br/>")
// }

// // multiplication
// function multiplication(num1,num2){
//     document.write ("multiply"+(num1*num2))
//      document.write ("<br/>")
// }
// // division
// function division(num1,num2){
//     document.write ("division"+( num1%num2))
//      document.write ("<br/>")
// }
// addition(userNum1,userName2)
// subtraction(userNum1,userName2)
// multiplication(userNum1,userName2)
// division(userNum1,userName2)
function checkNumber() {
    let num = Number(prompt("Enter a number:"));
    if (num % 2 == 0){
        document.write( num + "is Even number");
    }else {
        document.write( num + " is Odd number")
    }

}
checkNumber();