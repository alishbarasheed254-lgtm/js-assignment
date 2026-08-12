// // Question No. 1
// var studentNames = [];

// console.log(studentNames);


// // Question No. 2
// var students = new Array();

// console.log(students);


// // Question No. 3
// var stringArray = ["Apple", "Banana", "Mango", "Orange"];

// console.log(stringArray);


// // Question No. 4
// var numbersArray = [10, 20, 30, 40, 50];

// console.log(numbersArray);


// // Question No. 5
// var booleanArray = [true, false, true, false];

// console.log(booleanArray);


// // Question No. 6
// var mixedArray = ["Alishba", 20, true, "Karachi"];

// console.log(mixedArray);


// // Question No. 7
// var qualifications = [
//     "SSC",
//     "HSC",
//     "BCS",
//     "BS",
//     "BCOM",
//     "MS",
//     "M. Phil.",
//     "PhD"
// ];

// console.log(qualifications);

// document.write("<h1>Qualifications:</h1>");

// for (var i = 0; i < qualifications.length; i++) {
//     document.write(qualifications[i] + "<br>");
// }


// // Question No. 8

// var studentNames = ["Michael", "John", "Tony"];

// var scores = [320, 230, 480];

// var totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {

//     var percentage = (scores[i] / totalMarks) * 100;

//     console.log(
//         "Score of " + studentNames[i] +
//         " is " + scores[i] +
//         ". Percentage: " + percentage + "%"
//     );

//     document.write(
//         "Score of " + studentNames[i] +
//         " is " + scores[i] +
//         ". Percentage: " + percentage + "%<br>"
//     );
// }



// // Question No. 9

// var colors = ["Red", "Green", "Blue", "Yellow"];

// console.log("Original Array:", colors);
// document.write("<br>Original Array: " + colors + "<br>");


// // Question No. 9 (a)

// var colorBeginning = prompt("Which color do you want to add to the beginning?");

// colors.unshift(colorBeginning);

// console.log("Updated Array:", colors);
// document.write("Updated Array: " + colors + "<br>");


// // Question No. 9 (b)

// var colorEnd = prompt("Which color do you want to add to the end?");

// colors.push(colorEnd);

// console.log("Updated Array:", colors);
// document.write("Updated Array: " + colors + "<br>");


// // Question No. 9 (c)

// colors.unshift("Purple", "Orange");

// console.log("Updated Array:", colors);
// document.write("Updated Array: " + colors + "<br>");


// // Question No. 9 (d)

// colors.shift();

// console.log("Updated Array:", colors);
// document.write("Updated Array: " + colors + "<br>");


// // Question No. 9 (e)

// colors.pop();

// console.log("Updated Array:", colors);
// document.write("Updated Array: " + colors + "<br>");


// // Question No. 9 (f)

// var index = prompt("At which index do you want to add a color?");

// var colorName = prompt("Enter color name:");

// colors.splice(index, 0, colorName);

// console.log("Updated Array:", colors);
// document.write("Updated Array: " + colors + "<br>");


// // Question No. 9 (g)

// var deleteIndex = prompt("At which index do you want to delete color(s)?");

// var deleteCount = prompt("How many colors do you want to delete?");

// colors.splice(deleteIndex, deleteCount);

// console.log("Updated Array:", colors);
// document.write("Updated Array: " + colors + "<br>");