let age = prompt(`Укажите Ваш возраст`, '');

if (age <= 12) {
    alert(`Ребенок`);
}

else if (age > 12 && age <= 18) {
    alert(`Подросток`);
}

else if (age > 18 && age < 60) {
    alert(`Взролый`);
}

else if (age >= 60) {
    alert(`Пенсионер`);
}