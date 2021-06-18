let sum = prompt(`Укажите сумму покупки`, '');
let payment;

let discount = {
    light: 3,
    average: 5,
    big: 7
}

if (sum >= 200 && sum < 300) {
    payment = sum - sum * discount.light / 100;
}

else if (sum >= 300 && sum < 500) {
    payment = sum - sum * discount.average / 100;
}

else if (sum >= 500) {
    payment = sum - sum * discount.big / 100;
}

else {
    payment = sum;
}

alert(`Сумма с учетом скидки: ${payment}`);