let date = prompt('Укажите дату', '');
let day = date.substring(0, 2);
let month = date.substring(3, 5);
let year = date.substring(6, 10);
let monthMiddle;
let monthLong;
let leapYear;

if (month == 01 || month == 03 || month == 05 || month == 07 || month == 08 || month == 10 || month == 12) {
    month = monthLong;
}

else if (month == 04 || month == 06 || month == 09 || month == 11) {
    month = monthMiddle;
}

else if (month == 02 && year % 400 == 0 || month == 02 && year % 4 == 0 && year % 100 != 0) {
    year = leapYear;
}



if (day < 31 && monthLong || day < 30 && monthMiddle || day < 28 && month == 02 || month == 02 && day < 29 && leapYear) {
    ++day;
    alert(`${day}.${month}.${year}`);
}

else if (day == 31 && monthLong && month != 12 || day == 30 && monthMiddle || day == 28 && month == 02 || month == 02 && day == 29 && leapYear) {
    day = 01;
    ++month;
    alert(`${day}.${month}.${year}`);
}

else if (day == 31 && month == 12) {
    day = 01;
    month = 01;
    ++year;
    alert(`${day}.${month}.${year}`);
}


