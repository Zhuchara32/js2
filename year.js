let year = prompt(`Укажите год`, '');

if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    alert(`Это высокостный год`);
}

else {
    alert(`Это не высокостный год`);
}