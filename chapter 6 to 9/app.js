// Question no 1

// var a = 10;

// document.write("The value of a is: " + a + "<br><br>");

// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a);


// QUESTION 2

// var a = 2;
// var b = 1;

// var result = --a - --b + ++b + b--; 


// document.write("a is ?? <br>");
// document.write("b is ?? <br>");
// document.write("result is ??");


// QUESTION 3

// var userName = prompt("Enter your name:");

// alert("Hello " + userName + "!");

// QUESTION 5

// var number = prompt("Enter a number:");

// if (number === "" || number === null) {
//     number = 5;
// }

// for (var i = 1; i <= 10; i++) {
//     document.write(number + " × " + i + " = " + (number * i) + "<br>");
// }

// QUESTION 6

// var subject1 = prompt("Enter first subject name:");
// var subject2 = prompt("Enter second subject name:");
// var subject3 = prompt("Enter third subject name:");

// var totalMarks = 100;

// var obtainedMarks1 = Number(prompt("Enter obtained marks in " + subject1 + ":"));
// var obtainedMarks2 = Number(prompt("Enter obtained marks in " + subject2 + ":"));
// var obtainedMarks3 = Number(prompt("Enter obtained marks in " + subject3 + ":"));

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

// var totalMarksAll = totalMarks * 3;

// var percentage1 = (obtainedMarks1 / totalMarks) * 100;
// var percentage2 = (obtainedMarks2 / totalMarks) * 100;
// var percentage3 = (obtainedMarks3 / totalMarks) * 100;

// var totalPercentage = (totalObtainedMarks / totalMarksAll) * 100;

// document.write("<table>");

// document.write("<tr>");
// document.write("<th>Subject</th>");
// document.write("<th>Total Marks</th>");
// document.write("<th>Obtained Marks</th>");
// document.write("<th>Percentage</th>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + subject1 + "</td>");
// document.write("<td>100</td>");
// document.write("<td>" + obtainedMarks1 + "</td>");
// document.write("<td>" + percentage1 + "%</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + subject2 + "</td>");
// document.write("<td>100</td>");
// document.write("<td>" + obtainedMarks2 + "</td>");
// document.write("<td>" + percentage2 + "%</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + subject3 + "</td>");
// document.write("<td>100</td>");
// document.write("<td>" + obtainedMarks3 + "</td>");
// document.write("<td>" + percentage3 + "%</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<th></th>");
// document.write("<th>" + totalMarksAll + "</th>");
// document.write("<th>" + totalObtainedMarks + "</th>");
// document.write("<th>" + totalPercentage + "%</th>");
// document.write("</tr>");

// document.write("</table>");