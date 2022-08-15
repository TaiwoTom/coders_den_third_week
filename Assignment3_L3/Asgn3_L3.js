//question1:Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let date = new Date();
let newDate = new Date();
newDate.setFullYear(2022, 7, 15);

let re = `${newDate.getFullYear()} - ${
  newDate.getMonth() <= 9 ? "0" + newDate.getMonth() : newDate.getMonth()
} - ${newDate.getDate() <= 9 ? "0" + newDate.getDate() : newDate.getDate()}   ${
  date.getHours() <= 9 ? "0" + date.getHours() : date.getHours()
}:${date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()}`;
console.log(re);
