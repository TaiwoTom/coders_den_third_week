 //question1: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base value");
let height = prompt("Enter height value");
let areaTriangle1 = 0.5 * base * height;
console.log(`The area of the triangle is ${areaTriangle1}`);

 // question2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = prompt("Enter a side");
let b = prompt("Enter b side");
let c = prompt("Enter c side");
perimtrTriangle1 = parseInt(a) + parseInt(b) + parseInt(c);
console.log(`The perimeter of the triangle is ${perimtrTriangle1}`);

 // question3: Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter length value");
let width = prompt("Enter width value");
const areaRectg = length * width;
const perimtrRectg = 2 * (parseInt(length) + parseInt(width));
console.log(`The area of the rectangle is ${areaRectg} and the perimeter of the rectangle is ${perimtrRectg}`);

//question4: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter radius value");
const areaCircle = Math.PI * radius * radius;
const circmCircle = 2 * Math.PI * radius;
console.log(`The area of the circle is ${areaCircle} and the perimeter of the circle is ${circmCircle}`);

//question5: Calculate the slope, x-intercept and y-intercept of y = 2x -2
let y = 0;
let x = 1;
let slope = (y/2) + (2/x);
console.log(slope);

//question6: Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
x1 = 2;
y1 = 2;
x2 = 6;
y2 = 10;

let m = (y2 - y1) / (x2 - x1);
alert(m)

//question7:Compare the slope of above two questions.

if (slope === m){
  console.log("They are equal")}
else if (slope > m){
  console.log("They are equalslope value is greater than m value")}
else if (slope < m) {
  console.log("slope value is greater than m value");}

else {console.log("They are undefined values")};



//question8: Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
/let x = prompt("Enter your x value");
let y = (x ** 2) + (6 * x) + 9;
console.log(`y equals ${y} when x is ${x}`);
//at x = -3, y = 0

//question9: Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
hr = prompt("Enter hours");
rt = prompt("Enter rate per hour");

console.log(`Your  weekly earning is $${hr * rt}`);

//question10: If the length of your name is greater than 7 say, your name is long else say your name is short.
let nam = "Taiwo";
nam.length > 7
  ? console.log("your name is long")
  : console.log("your name is short");

//question11: Compare your first name length and your family name length and you should get this output.
const firstNam = "Asabeneh";
const lastNam = "Yetayeh";
firstNam.length >= lastNam.length
  ? console.log("Your first name, Asabeneh is longer than your family name, Yetayeh")
  : console.log("Your family name Yetayeh,  is longer than your first name, Asabeneh");

//question12: Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;
myAge > yourAge
  ? console.log(`I am ${myAge - yourAge} years older than you`)
  : console.log("You are older than me ");

//question13: Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let userYr = prompt("Enter birth year");
let userAge = new Date().getFullYear() - userYr;
userAge >= 18
  ? console.log(`You are ${userAge}. You are old enough to drive`)
  : console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years`);

//question14: Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.
let userLife = prompt("Enter the number of years you can live")
console.log(`You lived ${60 * 60 * 24 * 365 * userLife}seconds`);


//question15: Create a human readable time format using the Date time object

const caledr1 = new Date();
let yr1 = caledr1.getFullYear();
let mth1 = caledr1.getMonth();
let dt1 = caledr1.getDate();
let hrs1 = caledr1.getHours();
let mints1 = caledr1.getMinutes();

//i.
console.log(`${yr1}-${mth1 + 1}-${dt1} ${hrs1}:${mints1}`);

//ii.
console.log(`${dt1}-${mth1+1}-${yr1} ${hrs1}:${mints1}`);

//iii.
console.log(`${dt1}/${mth1 + 1}/${yr1} ${hrs1}:${mints1}`);
