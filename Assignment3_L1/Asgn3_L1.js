//question1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.


var firstName = "Taiwo";
console.log(typeof firstName);
var lastName = "Tom";
console.log(typeof lastName);
var country = "America";
console.log(typeof country);
var city = "New York";
console.log(typeof city);
var age = 18;
console.log(typeof age);
var isMarried = "No";
console.log(typeof isMarried);
var year = 2022;
console.log(typeof year);

//Or
//let firstName = prompt("Enter firstName", "firstName goes here");
//console.log(typeof firstName);
//let lastName = prompt("Enter lastName", "lastName goes here");
//console.log(typeof lastName);
//let country = prompt("Enter country", "country goes here");
//console.log(typeof country);
//let city = prompt("Enter city", "city goes here");
//console.log(typeof city);
//let age = prompt("Enter age", "age goes here");
//console.log(typeof age);
//let isMarried = prompt("Are you Married?", "type true or false");
//console.log(typeof isMarried);
//let year = prompt("Enter year", "year goes here");
//console.log(typeof year);

//question2:check if typeOf '10' equals 10.
if (typeof "10" === typeof 10) {
  console.log("They are equal");
} else {
  console.log("They are not equal");
}

//question3:check if parseFloat(9.8) equals 10.
if (parseFloat("9.8") == 10) {
  console.log("They are equal");
} else {
  console.log("They are not equal");
}

//question4:Boolean value is either true or false
//a)Write three JavaScript statement which provide truthy value.
let firstTruthy = true;
console.log(firstTruthy);

let secondTruthy = 4 > -2;
console.log(secondTruthy);

let thirdTruthy = "My name is Tee";
console.log(thirdTruthy);

//b)Write three JavaScript statement which provide falsy value.
let firstFalsy = 0;
console.log(firstFalsy);

let secondFalsy = "";
console.log(secondFalsy);

let thirdFalsy = false;
console.log(thirdFalsy);

//question5:Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != "4"); //false
console.log(4 == "4"); //true
console.log(4 === "4"); //false
console.log("python".length !== "jargon".length); //false

//question6:Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 === "4")); //true
console.log(!("python".includes("on") && "jargon".includes("on"))); //false

//question7:Use the Date object to do the following activities
const cldr = new Date();

// i)What is the year today?
console.log(cldr.getFullYear()); // it returns "2022"

// ii) What is the month today as a number?
console.log(cldr.getMonth()); // it returns "2" because we are in the minth of February

// iii) What is the date today?
console.log(cldr.getDate()); // it returns "16" as the date of the month

// iv) What is the day today as a number?
console.log(cldr.getDay()); // it returns "3" beacuse today si wednesday.
// v) What is the hours now?
console.log(cldr.getHours()); // it returns "18" because the time is 18:52:18
// vi) What is the minutes now?
console.log(cldr.getMinutes()); // it returns "52" because the time is 18:52:18
// vii) Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(cldr.getTime()); // it returns "164745313203.." milliseconds since Jan 1970
