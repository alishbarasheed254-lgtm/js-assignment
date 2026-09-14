// 1
// function showDateTime() {
//     document.write(new Date());
// }
// showDateTime();


// 2
// function greetUser(firstName, lastName) {
//     document.write("Hello " + firstName + " " + lastName);
// }
// greetUser("Humaima", "Alishba");


// 3
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
// document.write(addNumbers(10, 20));


// 4
// function calculator(num1, num2, operator) {
//     if (operator == "+") {
//         return num1 + num2;
//     } else if (operator == "-") {
//         return num1 - num2;
//     } else if (operator == "*") {
//         return num1 * num2;
//     } else if (operator == "/") {
//         return num1 / num2;
//     }
// }
// document.write(calculator(20, 5, "+"));


// 5
// function square(num) {
//     return num * num;
// }
// document.write(square(5));


// 6
// function factorial(num) {
//     var fact = 1;
//     for (var i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// document.write(factorial(5));


// 7
// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting(1, 10);


// 8
// function hypotenuse(base, perpendicular) {
//     function square(num) {
//         return num * num;
//     }

//     return Math.sqrt(square(base) + square(perpendicular));
// }
// document.write(hypotenuse(3, 4));

// Q9
// i. Arguments as value

// function rectangleArea(width, height) {
//     return width * height;
// }

// console.log(rectangleArea(10, 5));


// ii. Arguments as variables

// let width = 10;
// let height = 5;

// console.log(rectangleArea(width, height));


// Q10
// Check whether a string is palindrome or not

// function checkPalindrome(str) {
//     let reverse = str.split("").reverse().join("");

//     if (str === reverse) {
//         return "Palindrome";
//     } else {
//         return "Not a Palindrome";
//     }
// }

// console.log(checkPalindrome("madam"));


// Q11
// Convert first letter of each word to uppercase

// function capitalizeWords(str) {
//     return str
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");
// }

// console.log(capitalizeWords("the quick brown fox"));


// Q12
// Find the longest word in a string

// function longestWord(str) {
//     let words = str.split(" ");
//     let longest = "";

//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }

//     return longest;
// }

// console.log(longestWord("Web Development Tutorial"));


// Q13
// Count the number of a given letter in a string

// function countLetter(str, letter) {
//     let count = 0;

//     for (let char of str) {
//         if (char === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countLetter("javascript", "a"));

// Q14
// The Geometrizer

// Calculate Circumference
// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference);
// }

// // Calculate Area
// function calcArea(radius) {
//     let area = Math.PI * radius * radius;
//     console.log("The area is " + area);
// }


// // Example
// let radius = 5;

// calcCircumference(radius);
// calcArea(radius);