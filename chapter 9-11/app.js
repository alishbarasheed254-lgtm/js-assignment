// Question no 1
// var city = prompt("Enter your city name:");

// if (city.toLowerCase() === "karachi") {
//     alert("Welcome to city of lights");
// }

// Question no 2

// var gender = prompt("Enter your gender:");

// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir");
// } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma'am");
// }

// Question no 3
// var signal = prompt("Enter signal color:");

// if (signal.toLowerCase() === "red") {
//     alert("Must Stop");
// } else if (signal.toLowerCase() === "yellow") {
//     alert("Ready to move");
// } else if (signal.toLowerCase() === "green") {
//     alert("Move now");
// }

// Question no 4
// var fuel = +prompt("Enter remaining fuel (litres):");

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// Question no 5
// a
// var a = 4;

// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// Question no 6
// var totalMarks = +prompt("Enter Total Marks:");

// var sub1 = +prompt("Enter Marks of Subject 1:");
// var sub2 = +prompt("Enter Marks of Subject 2:");
// var sub3 = +prompt("Enter Marks of Subject 3:");

// var obtained = sub1 + sub2 + sub3;
// var percentage = (obtained / totalMarks) * 100;

// var grade, remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// }
// else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h1>Mark Sheet</h1>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);

// // Question no 7
// var secret = 7;
// var guess = +prompt("Guess a number (1 to 10)");

// if (guess === secret) {
//     alert("Bingo! Correct answer");
// }
// else if (guess + 1 === secret) {
//     alert("Close enough to the correct answer");
// }


// Question no 8
// var num = +prompt("Enter a number");

// if (num % 3 === 0) {
//     alert("The number is divisible by 3");
// }
// else {
//     alert("The number is not divisible by 3");
// }

// Question no 9
// var num = +prompt("Enter a number");

// if (num % 2 === 0) {
//     alert("Even Number");
// }
// else {
//     alert("Odd Number");
// }

// Question no 10
// var T = +prompt("Enter Temperature");

// if (T > 40) {
//     alert("It is too hot outside.");
// }
// else if (T > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (T > 20) {
//     alert("Today's Weather is cool.");
// }
// else if (T > 10) {
//     alert("OMG! Today's weather is so Cool.");
// }
// else {
//     alert("It's Cold.");
// }

// Question no 11
// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var op = prompt("Enter Operator (+, -, *, /, %)");

// if (op === "+") {
//     alert(num1 + num2);
// }
// else if (op === "-") {
//     alert(num1 - num2);
// }
// else if (op === "*") {
//     alert(num1 * num2);
// }
// else if (op === "/") {
//     alert(num1 / num2);
// }
// else if (op === "%") {
//     alert(num1 % num2);
// }
// else {
//     alert("Invalid Operator");
// }