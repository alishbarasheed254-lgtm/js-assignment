// var firstName = prompt ("Enter your first name");
// var lastName = prompt ("Enter your last name")
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName + "!"); 

// Q2
// var mobile = prompt("Enter your favorite mobile phone model:");

// document.write("My favorite phone is: " + mobile + "<br>");
// document.write("Length of string: " + mobile.length);


// Q3
// var word = "Pakistani";
// var index = word.indexOf("n");

// document.write("<br><br>");
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index);


// Q4
// var word2 = "Hello World";
// var lastIndex = word2.lastIndexOf("l");

// document.write("<br><br>");
// document.write("String: " + word2 + "<br>");
// document.write("Last index of 'l': " + lastIndex);


// Q5
// var word3 = "Pakistani";
// var character = word3.charAt(3);

// document.write("<br><br>");
// document.write("String: " + word3 + "<br>");
// document.write("Character at index 3: " + character);

// Q7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");

// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);


 // Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");

// document.write("<br><br>");
// document.write("Original message: " + message + "<br>");
// document.write("After replacement: " + newMessage);


// Q9
var value = "472";
var number = Number(value);

document.write("<br><br>");
document.write("Value: " + value + "<br>");
document.write("Type: " + typeof value + "<br>");
document.write("Value after conversion: " + number + "<br>");
document.write("Type after conversion: " + typeof number);


// Q10
// var input = prompt("Enter a word:");
// var upperCase = input.toUpperCase();

// document.write("<br><br>");
// document.write("User input: " + input + "<br>");
// document.write("Upper case: " + upperCase);


// Q11
// var input2 = prompt("Enter a word:");
// var titleCase = input2.charAt(0).toUpperCase() + input2.slice(1).toLowerCase();

// document.write("<br><br>");
// document.write("User input: " + input2 + "<br>");
// document.write("Title case: " + titleCase);

// Q12
// var num = 35.36;
// var result = num.toString().replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("Result: " + result);


// Q13
// var username = prompt("Enter your username:");

// while (
//     username.includes("@") ||
//     username.includes(".") ||
//     username.includes(",") ||
//     username.includes("!")
// ) {
//     alert("Please enter a valid username.");
//     username = prompt("Enter your username:");
// }

// document.write("Valid username: " + username);




// Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("What do you want to search?");
// var found = false;

// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === search.toLowerCase()) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert(search + " is available in the list.");
// } else {
//     alert(search + " is not available in the list.");
// }


// Q15
// var password = prompt("Enter password:");

// while (true) {
//     var hasAlphabet = false;
//     var hasNumber = false;

//     for (var i = 0; i < password.length; i++) {
//         var code = password.charCodeAt(i);

//         if (
//             (code >= 65 && code <= 90) ||
//             (code >= 97 && code <= 122)
//         ) {
//             hasAlphabet = true;
//         }

//         if (code >= 48 && code <= 57) {
//             hasNumber = true;
//         }
//     }

//     var firstCode = password.charCodeAt(0);

//     var firstIsAlphabet =
//         (firstCode >= 65 && firstCode <= 90) ||
//         (firstCode >= 97 && firstCode <= 122);

//     if (
//         password.length >= 6 &&
//         hasAlphabet &&
//         hasNumber &&
//         firstIsAlphabet
//     ) {
//         break;
//     }

//     alert("Please enter a valid password.");
//     password = prompt("Enter password:");
// }

// document.write("Entered password: " + password);


// Q16
// var university = "University of Karachi";
// var arr = university.split(" ");

// document.write("Array elements:<br>");

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }


// Q17
// var userInput = prompt("Enter something:");
// var lastCharacter = userInput.charAt(userInput.length - 1);

// document.write("User input: " + userInput + "<br>");
// document.write("Last character of input: " + lastCharacter);


// Q18
// var text = "The quick brown fox jumps over the lazy dog.";
// var count = 0;

// var words = text.toLowerCase().split(" ");

// for (var i = 0; i < words.length; i++) {
//     if (words[i].replace(".", "") === "the") {
//         count++;
//     }
// }

// document.write("Text: " + text + "<br>");
// document.write("There are " + count + " occurrence(s) of word 'the'.");